import React from 'react'
import { render } from '@testing-library/react'
import Pagination from './Pagination'

describe('Pagination', () => {
  it('should render a pagination element correctly', () => {
    const { container } = render(<Pagination page={1} perPage={10} total={100} onPageChange={jest.fn} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it("should render the current page's number", () => {
    const { getByTestId } = render(<Pagination page={1} perPage={10} total={100} onPageChange={jest.fn} />)
    expect(getByTestId('current-page').textContent).toBe('1')
  })

  it('should render the perPage items', () => {
    const { getByTestId } = render(<Pagination page={1} perPage={10} total={100} onPageChange={jest.fn} />)
    expect(getByTestId('per-page').textContent).toBe('10')
  })

  it('should render the total items', () => {
    const { getByTestId } = render(<Pagination page={1} perPage={10} total={100} onPageChange={jest.fn} />)
    expect(getByTestId('total').textContent).toBe('100')
  })

  it('should call `onPageChange` when click on the next page button', () => {
    const onPageChangeMock = jest.fn()
    const { getByTestId } = render(<Pagination page={1} perPage={10} total={100} onPageChange={onPageChangeMock} />)
    getByTestId('desktop-next-page-button').click()
    expect(onPageChangeMock).toHaveBeenCalledWith(2)
  })

  it('should call `onPageChange` when click on the previous page button', () => {
    const onPageChangeMock = jest.fn()
    const { getByTestId } = render(<Pagination page={2} perPage={10} total={100} onPageChange={onPageChangeMock} />)
    getByTestId('desktop-prev-page-button').click()
    expect(onPageChangeMock).toHaveBeenCalledWith(1)
  })

  it('should not call `onPageChange` when click on the next page button if the current page is the last one', () => {
    const onPageChangeMock = jest.fn()
    const { getByTestId } = render(<Pagination page={10} perPage={10} total={100} onPageChange={onPageChangeMock} />)
    const nextPageButton = getByTestId('desktop-next-page-button') as HTMLButtonElement
    nextPageButton.click()
    expect(onPageChangeMock).not.toHaveBeenCalled()
  })

  it('should not call `onPageChange` when click on the previous page button if the current page is the first one', () => {
    const onPageChangeMock = jest.fn()
    const { getByTestId } = render(<Pagination page={1} perPage={10} total={100} onPageChange={onPageChangeMock} />)
    const prevPageButton = getByTestId('desktop-prev-page-button') as HTMLButtonElement
    prevPageButton.click()
    expect(onPageChangeMock).not.toHaveBeenCalled()
  })

  it('should render the next page button as disabled if the current page is the last one', () => {
    const { getByTestId } = render(<Pagination page={10} perPage={10} total={100} onPageChange={jest.fn} />)
    const nextPageButton = getByTestId('desktop-next-page-button') as HTMLButtonElement
    expect(nextPageButton.disabled).toBe(true)
  })

  it('should render the previous page button as disabled if the current page is the first one', () => {
    const { getByTestId } = render(<Pagination page={1} perPage={10} total={100} onPageChange={jest.fn} />)
    const button = getByTestId('desktop-prev-page-button') as HTMLButtonElement
    expect(button.disabled).toBe(true)
  })
})
