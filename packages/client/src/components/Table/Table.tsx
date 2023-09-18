import React from 'react'
import { ctwMerge } from '../../utility/ctw-merge'

export const Table = ({
  children,
  ...props
}: React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> & {
  children: React.ReactNode | React.ReactNode[]
}) => {
  return <table {...props}>{children}</table>
}

Table.Headers = ({
  className,
  children,
  ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement> & {
  children: React.ReactNode | React.ReactNode[]
}) => {
  return (
    <thead {...props} className={ctwMerge('block w-full bg-neutral4 laptop:rounded-lg', className)}>
      {children}
    </thead>
  )
}

Table.Header = ({
  className,
  children,
  ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement> & {
  children: React.ReactNode | React.ReactNode[]
}) => {
  return (
    <th {...props} className={ctwMerge('body-bold-16 flex justify-start text-neutral2', className)}>
      {children}
    </th>
  )
}

Table.Body = ({
  className,
  children,
  ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement> & {
  children: React.ReactNode | React.ReactNode[]
}) => {
  return (
    <tbody {...props} className={ctwMerge('block w-full', className)}>
      {children}
    </tbody>
  )
}

Table.Row = ({
  className,
  children,
  ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> & {
  children: React.ReactNode | React.ReactNode[]
}) => {
  return (
    <tr
      {...props}
      className={ctwMerge(
        `grid grid-flow-row grid-rows-1 gap-6 justify-normal items-center laptop:rounded-lg py-[1.25rem] px-[1.5rem] bg-white`,
        className
      )}
    >
      {children}
    </tr>
  )
}

Table.Cell = ({
  className,
  children,
  ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement> & {
  children: React.ReactNode | React.ReactNode[]
}) => {
  return (
    <td {...props} className={ctwMerge('body-16 flex justify-start', className)}>
      {children}
    </td>
  )
}

export default Table
