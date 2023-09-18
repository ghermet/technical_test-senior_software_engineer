import React from 'react'
import { MagnifyingGlassLeft } from '@pretto/picto'
import { ctwMerge } from '../../utility/ctw-merge'
import styles from './TextField.module.css'

interface TextFieldProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

const TextField = ({ className, ...props }: TextFieldProps) => (
  <fieldset className={ctwMerge('items-center inline-flex', className)}>
    <input
      {...props}
      className={ctwMerge(
        styles.input,
        'input-book-16 appearance-none bg-neutral4 border-2 border-neutral3 text-neutral1 outline-offset-2 h-16 -mr-10 pr-14 p-4 rounded-lg border-solid w-full placeholder-neutral2 transition-colors duration-150 ease-in-out',
        'focus:border-primary2 focus:outline-primary2 focus:outline-2 focus:outline-dashed',
        'focus-within:outline-primary2 focus-within:outline-2 focus-within:outline-dashed'
      )}
    />
    <MagnifyingGlassLeft />
  </fieldset>
)

export default TextField
