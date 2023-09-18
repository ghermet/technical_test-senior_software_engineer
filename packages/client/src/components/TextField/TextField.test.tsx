import React from 'react'
import { render } from '@testing-library/react'
import TextField from './TextField'

describe('TextField', () => {
  it('should render a text field element with the correct default classnames and props', () => {
    const { container } = render(<TextField className="some-class" placeholder="Search..." defaultValue="" />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
