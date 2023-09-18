import React, { useRef, useState } from 'react'
import '../../styles/globals.generated.css'
import PeopleTable from './PeopleTable'

export default {
  title: 'Components/PeopleTable',
  component: PeopleTable,
}

const PEOPLE_TABLE_ID = 'people-table'
const PEOPLE_TABLE_SELECTOR = `table#${PEOPLE_TABLE_ID}`

export const Default = () => {
  const peopleTableRef = useRef<HTMLTableElement>(null)
  const [isAllChecked, setIsAllChecked] = useState(false)
  return (
    <PeopleTable
      id={PEOPLE_TABLE_ID}
      ref={peopleTableRef}
      isAllChecked={isAllChecked}
      onAllCheckedChange={(checked) => {
        setIsAllChecked(checked)
        const checkboxes = document.querySelectorAll(`${PEOPLE_TABLE_SELECTOR} input[type="checkbox"]`)
        checkboxes.forEach((el) => {
          const checkbox = el as HTMLInputElement
          checkbox.checked = checked
        })
      }}
    >
      <PeopleTable.Row
        id="40387442-3672-4f23-83b8-84cb07ad"
        createdAt="19 Feb, 21:42"
        fullName="Gracyn Schaefers"
        status="PROTECTED"
        isChecked={false}
        onCheckedChange={(isChecked) => {
          const checkboxes = document.querySelectorAll(`${PEOPLE_TABLE_SELECTOR} input[type="checkbox"]`)
          const checkedCheckboxes = document.querySelectorAll(`${PEOPLE_TABLE_SELECTOR} input[type="checkbox"]:checked`)
          // document.querySelector(`tr#40387442-3672-4f23-83b8-84cb07ad`)?.classList.toggle('bg-neutral2')
          setIsAllChecked(checkboxes.length - (isChecked ? 1 : 0) === checkedCheckboxes.length - (!isChecked ? 1 : 0))
        }}
      />
    </PeopleTable>
  )
}
