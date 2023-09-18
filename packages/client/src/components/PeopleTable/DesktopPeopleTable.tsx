import React from 'react'
import { PeopleByPageData, usePeopleByPage } from '../../graphql/queries/PeopleByPage'
import { ctwMerge } from '../../utility/ctw-merge'
import Pagination from '../Pagination/Pagination'
import PeopleTable from './PeopleTable'

type DesktopPeopleTableProps = {
  id: string
  data: PeopleByPageData
  loading: boolean
  page: number
  perPage: number
  isAllChecked: boolean
  onAllCheckedChange: (isChecked: boolean) => void
  onRowCheckedChange: (isChecked: boolean) => void
  onPageChange: (page: number) => void
}

export const DesktopPeopleTable = ({
  id,
  data,
  loading,
  page,
  perPage,
  isAllChecked,
  onAllCheckedChange,
  onRowCheckedChange,
  onPageChange,
}: DesktopPeopleTableProps) => {
  return (
    <>
      <div className="overflow-auto mb-6">
        <PeopleTable
          className="flex flex-col gap-10 py-10 px-5 tablet:py-10 tablet:px-20"
          id={id}
          isLoading={loading}
          isAllChecked={isAllChecked}
          onAllCheckedChange={onAllCheckedChange}
        >
          {data?.peopleByPage?.map((person) => (
            <PeopleTable.Row {...person} key={person.id} onCheckedChange={onRowCheckedChange} />
          ))}
        </PeopleTable>
      </div>
      <Pagination
        className={ctwMerge('mx-6', {
          hidden: loading,
        })}
        page={page}
        perPage={perPage}
        total={data?.countPeople ?? 0}
        onPageChange={onPageChange}
      />
    </>
  )
}

export default DesktopPeopleTable
