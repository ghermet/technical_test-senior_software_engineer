import React from 'react'
import { ctwMerge } from '../../utility/ctw-merge'

export type ButtonSquareProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

const ButtonSquare = ({ children, className, ...props }: ButtonSquareProps) => (
  <button
    {...props}
    className={ctwMerge(
      'items-center appearance-none bg-accent1 rounded text-white cursor-pointer outline-offset-2 outline-dashed inline-flex h-8 justify-center align-middle w-8 p-0 border-none transition-colors duration-150 ease-in-out',
      'hover:bg-accent1Hover',
      'focus:outline-accent1Hover focus:outline-2',
      'focus-visible:bg-accent1Hover focus-visible:outline-accent1Hover focus-visible:outline-2',
      'disabled:bg-accent1Disabled disabled:cursor-not-allowed',
      className
    )}
  >
    {children}
  </button>
)

export default ButtonSquare
