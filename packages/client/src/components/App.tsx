import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { usePeople } from '../graphql/queries/GetPeople'
import { usePeopleByPage } from '../graphql/queries/PeopleByPage'
import { useMediaQuery } from '../utility/media-query'
import TextField from './TextField/TextField'

const MobilePeopleTable = React.lazy(() => import('./PeopleTable/MobilePeopleTable'))
const DesktopPeopleTable = React.lazy(() => import('./PeopleTable/DesktopPeopleTable'))

const PEOPLE_TABLE_ID = 'people-table'
const PEOPLE_TABLE_SELECTOR = `table#${PEOPLE_TABLE_ID}`

let timeoutId: ReturnType<typeof setTimeout>

export const App = React.memo(() => {
  const minTablet = useMediaQuery('(min-width: 640px)')
  const [searchParams, setSearchParams] = useSearchParams()
  const [isAllChecked, setIsAllChecked] = useState(false)

  const search = String(searchParams.get('search') ?? '')
  const page = Number(searchParams.get('page') ?? 1)
  const limit = Number(searchParams.get('limit') ?? 8)

  const { data: peopleByPageData, loading: peopleByPageLoading } = usePeopleByPage({
    filter: search,
    page: page,
    limit,
    skip: !minTablet,
  })

  const {
    data: peopleData,
    loading: peopleLoading,
    fetchMore: peopleFetchMore,
  } = usePeople({
    filter: search,
    limit,
    skip: minTablet,
  })

  const handleLoadMore = () => {
    peopleFetchMore({
      variables: {
        filter: search,
        limit: limit + peopleData?.people.length,
        from: peopleData?.people.at(-1).id,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev
        return {
          ...prev,
          people: [...prev.people, ...fetchMoreResult.people],
        }
      },
    })
  }

  const debounceSearch = (fn: (search: string) => void, delay: number) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => fn(e.target.value), delay)
    }
  }

  const handleSearchChange = debounceSearch((search) => {
    setSearchParams({
      ...(search.trim().length ? { search } : {}),
    })
    setIsAllChecked(false)
  }, 400)

  const handlePageChange = (page: number): void => {
    setSearchParams({ page: page.toString() })
    setIsAllChecked(false)
  }

  const handleAllCheckedChange = (checked: boolean): void => {
    setIsAllChecked(checked)
    const checkboxes = document.querySelectorAll(`${PEOPLE_TABLE_SELECTOR} input[type="checkbox"]`)
    checkboxes.forEach((el) => {
      const checkbox = el as HTMLInputElement
      checkbox.checked = checked
    })
  }

  const handleRowCheckedChange = (isChecked: boolean): void => {
    const checkboxes = document.querySelectorAll(`${PEOPLE_TABLE_SELECTOR} input[type="checkbox"]`)
    const checkedCheckboxes = document.querySelectorAll(`${PEOPLE_TABLE_SELECTOR} input[type="checkbox"]:checked`)
    setIsAllChecked(checkboxes.length - (isChecked ? 1 : 0) === checkedCheckboxes.length - (!isChecked ? 1 : 0))
  }

  return (
    <main className="flex flex-col pt-12 tablet:py-10">
      <section className="flex flex-col gap-10 mb-10 mx-5 tablet:mx-[6.75rem]">
        <h1 className="heading-32">People</h1>
        <TextField
          className="heading-32 laptop:w-[496px]"
          placeholder="Search..."
          defaultValue={search}
          onChange={handleSearchChange}
        />
      </section>
      <div className="flex flex-col tablet:mx-[5.25rem]">
        {minTablet ? (
          <React.Suspense>
            <DesktopPeopleTable
              id={PEOPLE_TABLE_ID}
              data={peopleByPageData}
              loading={peopleByPageLoading}
              page={page}
              perPage={limit}
              isAllChecked={isAllChecked}
              onAllCheckedChange={handleAllCheckedChange}
              onRowCheckedChange={handleRowCheckedChange}
              onPageChange={handlePageChange}
            />
          </React.Suspense>
        ) : (
          <React.Suspense>
            <MobilePeopleTable
              id={PEOPLE_TABLE_ID}
              data={peopleData}
              loading={peopleLoading}
              limit={limit}
              isAllChecked={isAllChecked}
              onAllCheckedChange={handleAllCheckedChange}
              onRowCheckedChange={handleRowCheckedChange}
              onLoadMore={handleLoadMore}
            />
          </React.Suspense>
        )}
      </div>
    </main>
  )
})

export default App
