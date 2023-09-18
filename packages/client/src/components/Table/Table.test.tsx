import React from 'react'
import { render } from '@testing-library/react'
import Table from './Table'

describe('Table', () => {
  it('should render a table element with the correct default classnames and props', () => {
    const { container } = render(
      <Table className="w-full">
        <thead>
          <tr>
            <th>data header</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>data value</td>
          </tr>
        </tbody>
      </Table>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a table headers element with the correct default classnames and props', () => {
    const { container } = render(
      <table>
        <Table.Headers className="w-full">
          <tr>
            <th>data header</th>
            <th>data2 header</th>
            <th>data3 header</th>
          </tr>
        </Table.Headers>
      </table>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a table header element with the correct default classnames and props', () => {
    const { container } = render(
      <table>
        <thead>
          <tr>
            <Table.Header className="w-fit">data header</Table.Header>
          </tr>
        </thead>
      </table>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a table body element with the correct default classnames and props', () => {
    const { container } = render(
      <table>
        <Table.Body className="w-full">
          <tr>
            <td>data value</td>
          </tr>
        </Table.Body>
      </table>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a table row element with the correct default classnames and props', () => {
    const { container } = render(
      <table>
        <tbody>
          <Table.Row>
            <td>data value</td>
            <td>data2 value</td>
            <td>data3 value</td>
          </Table.Row>
        </tbody>
      </table>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a table cell element with the correct default classnames and props', () => {
    const { container } = render(
      <table>
        <tbody>
          <tr>
            <Table.Cell>data value</Table.Cell>
          </tr>
        </tbody>
      </table>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
