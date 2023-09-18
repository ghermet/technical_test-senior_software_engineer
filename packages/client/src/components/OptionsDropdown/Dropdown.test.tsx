import React from 'react'
import OptionsDropdown from './OptionsDropdown'
import { render } from '@testing-library/react'

describe('OptionsDropdown', () => {
  it('should render a dropdown element correctly', () => {
    const { container } = render(<OptionsDropdown />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
