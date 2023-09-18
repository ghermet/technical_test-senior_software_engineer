import React from 'react'
import { render } from '@testing-library/react'
import ButtonSquare from './ButtonSquare'

describe('ButtonSquare', () => {
  it('should render a button element with the correct default classnames and props', () => {
    const { container } = render(<ButtonSquare className="some-class">Submit</ButtonSquare>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a disabled button element', () => {
    const { getByRole } = render(<ButtonSquare disabled>Submit</ButtonSquare>)
    const button = getByRole('button') as HTMLButtonElement
    expect(button.disabled).toBe(true)
  })
  
  it('should call `onClick` when clicking button', () => {
    const onClickMock = jest.fn()
    const { getByRole } = render(<ButtonSquare onClick={onClickMock}>Submit</ButtonSquare>)
    getByRole('button').click()
    expect(onClickMock).toHaveBeenCalled()
  })
})
