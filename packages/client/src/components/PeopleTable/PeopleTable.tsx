import { ExclamationMarkCircleBold } from '@pretto/picto'
import React from 'react'
import { PeopleStatus as SearchPeopleStatus } from '../../graphql/queries/PeopleByPage'
import { ctwMerge } from '../../utility/ctw-merge'
import Checkbox from '../Checkbox/Checkbox'
import OptionsDropdown from '../OptionsDropdown/OptionsDropdown'
import Status from '../Status/Status'
import Table from '../Table/Table'

function formatDate(date: string): string {
  const dateObj = new Date(date)
  const month = new Intl.DateTimeFormat('default', { month: 'short' }).format(dateObj)
  const day = new Intl.DateTimeFormat('default', { day: '2-digit' }).format(dateObj)
  const hours = new Intl.DateTimeFormat('default', { hour: '2-digit' }).format(dateObj)
  const minutes = new Intl.DateTimeFormat('default', { minute: '2-digit' }).format(dateObj)
  const minutesWithLeadingZero = minutes.length < 10 ? `0${minutes}` : minutes
  return `${day} ${month}, ${hours}:${minutesWithLeadingZero}`
}

export const PeopleTable = ({
  children,
  id,
  isLoading,
  isAllChecked,
  onAllCheckedChange,
  ...props
}: React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> & {
  children: React.ReactNode | React.ReactNode[]
  isLoading?: boolean
  isAllChecked?: boolean
  onAllCheckedChange?: (isChecked: boolean) => void
}) => {
  return (
    <Table
      {...props}
      id={id}
      className={ctwMerge('w-full', {
        'opacity-50': isLoading,
      })}
    >
      <Table.Headers>
        <Table.Row className="grid mb-6 grid-cols-peopleTableMobile bg-neutral4 laptop:grid-cols-peopleTable">
          <Table.Header>
            <Checkbox
              label="Select all people"
              isChecked={isAllChecked}
              onCheckedChange={onAllCheckedChange}
              disabled={isLoading}
            />
          </Table.Header>
          <Table.Header className="laptop:hidden">People</Table.Header>
          <Table.Header className="hidden laptop:flex">Created at</Table.Header>
          <Table.Header className="hidden laptop:flex">Name</Table.Header>
          <Table.Header className="hidden laptop:flex items-center gap-4 text-neutral1">
            <ExclamationMarkCircleBold />
            ID
          </Table.Header>
          <Table.Header className="hidden laptop:flex">Status</Table.Header>
          <Table.Header className="hidden justify-end">Options</Table.Header>
        </Table.Row>
      </Table.Headers>
      <Table.Body>{children}</Table.Body>
    </Table>
  )
}

PeopleTable.Row = ({
  id,
  createdAt,
  fullName,
  profilePicture,
  status,
  onCheckedChange,
  ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> & {
  id: string
  createdAt: string
  fullName: string
  status: SearchPeopleStatus
  profilePicture?: string
  isChecked?: boolean
  onCheckedChange?: (isChecked: boolean) => void
}) => {
  const [isChecked, setIsChecked] = React.useState(false)
  function handleCheckedChange(checked: boolean): void {
    setIsChecked(checked)
    onCheckedChange?.(checked)
  }

  return (
    <Table.Row
      {...props}
      className={ctwMerge(
        'peopleTable-row',
        'grid items-baseline grid-cols-peopleTableMobile laptop:items-center laptop:grid-cols-peopleTable laptop:h-16 transition-colors duration-150 ease-in-out'
      )}
    >
      <Table.Cell>
        <Checkbox label={`Select ${fullName}`} isDefaultChecked={isChecked} onCheckedChange={handleCheckedChange} />
      </Table.Cell>
      <Table.Cell className="hidden laptop:flex">{formatDate(createdAt)}</Table.Cell>
      <Table.Cell className="hidden laptop:flex items-center gap-4">
        <img
          src={profilePicture}
          className={ctwMerge('w-6 h-6 rounded-full', {
            invisible: !profilePicture,
          })}
          alt="Profile picture"
        />
        {fullName}
      </Table.Cell>
      <Table.Cell className="hidden laptop:flex whitespace-nowrap">{id}</Table.Cell>
      <Table.Cell className="hidden laptop:flex">
        <Status status={status} />
      </Table.Cell>
      <Table.Cell className="hidden laptop:flex justify-end">
        <OptionsDropdown aria-label="People's options" />
      </Table.Cell>
      <Table.Cell className="flex flex-col gap-4 laptop:hidden">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img
              src={profilePicture}
              className={ctwMerge('w-6 h-6 rounded-full', {
                invisible: !profilePicture,
              })}
              alt="Profile picture"
            />
            {fullName}
          </div>
          <OptionsDropdown aria-label="People's options" />
        </div>
        <div className="flex flex-nowrap">
          <span>{id}</span>
          <ExclamationMarkCircleBold className="relative top-7 right-28 h-4 w-4 tablet:top-1 tablet:left-2" />
        </div>
        <Status status={status} />
      </Table.Cell>
    </Table.Row>
  )
}

export default PeopleTable
