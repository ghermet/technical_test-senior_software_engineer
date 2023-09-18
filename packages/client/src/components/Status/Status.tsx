import React from 'react'
import { ShieldCheck, ExclamationMarkTriangle } from '@pretto/picto'
import { ctwMerge } from '../../utility/ctw-merge'
import type { PeopleStatus as SearchPeopleStatus } from '../../graphql/queries/PeopleByPage'

export const Status = ({ status }: { status: SearchPeopleStatus }) => {
  const isProtected = status === 'PROTECTED'
  const isVulnerable = status === 'VULNERABLE'
  const statusText = isProtected ? 'PROTECTED' : 'Vulnerable'
  const statusIcon = isProtected ? (
    <ShieldCheck className={'fill-primary2'} />
  ) : (
    <ExclamationMarkTriangle className={'fill-error1'} />
  )
  return (
    <span
      className={ctwMerge('flex items-center flex-nowrap gap-2 body-book-16 capitalize', {
        'text-primary2': isProtected,
        'text-error1': isVulnerable,
      })}
    >
      {statusIcon} {statusText.toLowerCase()}
    </span>
  )
}

export default Status
