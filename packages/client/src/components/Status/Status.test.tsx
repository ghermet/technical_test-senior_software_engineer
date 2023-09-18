import { render } from '@testing-library/react'
import React from 'react'
import Status from './Status'

describe('Status', () => {
  it('should render a PROTECTED status', () => {
    const { container } = render(<Status status="PROTECTED" />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a VULNERABLE status', () => {
    const { container } = render(<Status status="VULNERABLE" />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
