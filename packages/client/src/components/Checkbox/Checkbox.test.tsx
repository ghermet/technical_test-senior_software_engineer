import React from 'react'
import { render } from '@testing-library/react'
import Checkbox from './Checkbox'

describe('Checkbox', () => {
  it('should render a checkbox element with the correct default classnames and props', () => {
    const { container } = render(<Checkbox label="Select all people" />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render an unchecked input', () => {
    const { getByRole } = render(<Checkbox label="Select all people" isChecked={false} onCheckedChange={jest.fn} />)
    const checkbox = getByRole('checkbox') as HTMLInputElement
    expect(checkbox.checked).toBe(false)
  })

  it('should render a checked input', () => {
    const { getByRole } = render(<Checkbox label="Select all people" isChecked onCheckedChange={jest.fn} />)
    const checkbox = getByRole('checkbox') as HTMLInputElement
    expect(checkbox.checked).toBe(true)
  })

  it('should check the input when clicking the checkbox', () => {
    const { getByRole } = render(<Checkbox label="Select all people" isDefaultChecked={false} />)
    const checkbox = getByRole('checkbox') as HTMLInputElement
    checkbox.click()
    expect(checkbox.checked).toBe(true)
  })

  it('should uncheck the input when clicking the label', () => {
    const { getByRole } = render(<Checkbox label="Select all people" isDefaultChecked={true} />)
    const checkbox = getByRole('checkbox') as HTMLInputElement
    checkbox.click()
    expect(checkbox.checked).toBe(false)
  })

  it('should call `onCheckedChange` when clicking the checkbox', () => {
    const onCheckedChangeMock = jest.fn()
    const { getByRole } = render(
      <Checkbox label="Select all people" isDefaultChecked={false} onCheckedChange={onCheckedChangeMock} />
    )
    const checkbox = getByRole('checkbox') as HTMLLabelElement
    checkbox.click()
    expect(onCheckedChangeMock).toHaveBeenCalledWith(true)
    checkbox.click()
    expect(onCheckedChangeMock).toHaveBeenCalledWith(false)
  })
})
