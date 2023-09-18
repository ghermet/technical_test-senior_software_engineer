import { CheckHandwrite } from '@pretto/picto'
import React from 'react'
import { ctwMerge } from '../../utility/ctw-merge'

interface CheckboxProps
  extends Omit<React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, 'onChange'> {
  label: string
  disabled?: boolean
  isChecked?: boolean
  isDefaultChecked?: boolean
  onCheckedChange?: (value: boolean) => void
}

const Checkbox = ({ id, label, isChecked, disabled, isDefaultChecked, onCheckedChange, ...props }: CheckboxProps) => {
  const handleCheckedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    return onCheckedChange ? onCheckedChange(event.currentTarget.checked) : undefined
  }

  return (
    <span {...props} className={'inline-block h-6 relative align-middle w-6'}>
      <input
        type="checkbox"
        id={id}
        checked={isChecked}
        defaultChecked={isDefaultChecked}
        disabled={disabled}
        onChange={handleCheckedChange}
        className={ctwMerge(
          'peer/input appearance-none border-neutral3 rounded h-[inherit] outline-offset-2 w-[inherit] m-0 p-0 border-2 border-solid disabled:cursor-not-allowed enabled:cursor-pointer transition-colors duration-150 ease-in-out',
          'checked:bg-primary2 checked:border-primary2',
          'checked:focus:outline-primary2 focus:outline-2 checked:focus:outline-dashed',
          'focus:outline-neutral3 focus-within:outline-2 focus:outline-dashed',
          'focus-within:outline-neutral3 focus-within:outline-2 focus-within:outline-dashed',
          'disabled:cursor-not-allowed'
        )}
        aria-label={label}
      />
      <CheckHandwrite
        className={ctwMerge(
          'fill-white pointer-events-none absolute transition-[visibility] duration-[0s] ease-linear delay-150 invisible left-0 top-0',
          'peer-checked/input:transition-[visibility] peer-checked/input:duration-[0s] peer-checked/input:ease-linear peer-checked/input:delay-[0s] peer-checked/input:visible'
        )}
      />
    </span>
  )
}

export default Checkbox
