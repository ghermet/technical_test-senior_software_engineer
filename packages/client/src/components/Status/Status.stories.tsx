import React from 'react'
import Status from './Status'
import '../../styles/globals.generated.css'

export default {
  title: 'Components/Status',
  component: Status,
}

export const Protected = () => <Status status="PROTECTED" />
export const Vulnerable = () => <Status status="VULNERABLE" />
