import { render } from '@testing-library/react'
import React from 'react'
import DesktopPeopleTable from './DesktopPeopleTable'
import { People } from '../../graphql/queries/PeopleByPage'

describe('DesktopPeopleTable', () => {
  const props = {
    id: 'desktop-people-table',
    search: 'John Doe',
    data: {
      countPeople: 1,
      peopleByPage: [
        {
          id: '1',
          fullName: 'John Doe',
          createdAt: '2021-01-01',
          status: 'PROTECTED',
        },
      ] as People[],
    },
    loading: false,
    page: 1,
    perPage: 10,
    limit: 10,
    isAllChecked: false,
    onAllCheckedChange: jest.fn(),
    onRowCheckedChange: jest.fn(),
    onPageChange: jest.fn(),
  }

  it('should render a table element with the correct default classnames and props', () => {
    const { container } = render(<DesktopPeopleTable {...props} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
