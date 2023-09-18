import React from 'react'
import ButtonSquare from '../ButtonSquare/ButtonSquare'
import PeopleTable from './PeopleTable'
import { GetPeopleData } from '../../graphql/queries/GetPeople'

type MobilePeopleTableProps = {
  id: string
  data: GetPeopleData
  loading: boolean
  limit: number
  isAllChecked: boolean
  onAllCheckedChange: (isChecked: boolean) => void
  onRowCheckedChange: (isChecked: boolean) => void
  onLoadMore?: () => void
}

export const MobilePeopleTable = ({
  id,
  data,
  loading,
  isAllChecked,
  onAllCheckedChange,
  onRowCheckedChange,
  onLoadMore,
}: MobilePeopleTableProps) => {
  const isLastPage = data?.people.length >= data?.countPeople

  return (
    <>
      <PeopleTable
        id={id}
        className="flex flex-col gap-10 py-10 px-5 tablet:py-10 tablet:px-20"
        isAllChecked={isAllChecked}
        onAllCheckedChange={onAllCheckedChange}
        isLoading={loading}
      >
        {data?.people?.map((person) => (
          <PeopleTable.Row {...person} key={person.id} onCheckedChange={onRowCheckedChange} />
        ))}
      </PeopleTable>
      <div className="p-6">
        <ButtonSquare
          className={'flex w-full h-16'}
          onClick={onLoadMore}
          disabled={isLastPage || loading}
          data-testid="load-more-button"
        >
          Load more
        </ButtonSquare>
      </div>
    </>
  )
}

export default MobilePeopleTable
