import { render } from '@testing-library/react'
import React from 'react'
import { People } from '../../graphql/queries/GetPeople'
import MobilePeopleTable from './MobilePeopleTable'

describe('MobilePeopleTable', () => {
  const props = {
    id: 'mobile-people-table',
    search: 'John Doe',
    data: {
      countPeople: 1,
      people: [
        {
          id: '1',
          fullName: 'John Doe',
          createdAt: '2021-01-01',
          status: 'PROTECTED',
        },
      ] as People[],
    },
    loading: false,
    limit: 10,
    isAllChecked: false,
    onAllCheckedChange: jest.fn(),
    onRowCheckedChange: jest.fn(),
    onLoadMore: jest.fn(),
  }

  it('should render a mobile people table element with the correct default classnames and props', () => {
    const { container } = render(<MobilePeopleTable {...props} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
