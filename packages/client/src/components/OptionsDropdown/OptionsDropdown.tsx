import React from 'react'
import { ctwMerge } from '../../utility/ctw-merge'
import ButtonSquare, { ButtonSquareProps } from '../ButtonSquare/ButtonSquare'

const Dots = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20 24C21.656 24 23 25.344 23 27C23 28.656 21.656 30 20 30C18.344 30 17 28.656 17 27C17 25.344 18.344 24 20 24ZM20 25C21.104 25 22 25.896 22 27C22 28.104 21.104 29 20 29C18.896 29 18 28.104 18 27C18 25.896 18.896 25 20 25ZM20 17C21.656 17 23 18.344 23 20C23 21.656 21.656 23 20 23C18.344 23 17 21.656 17 20C17 18.344 18.344 17 20 17ZM20 18C21.104 18 22 18.896 22 20C22 21.104 21.104 22 20 22C18.896 22 18 21.104 18 20C18 18.896 18.896 18 20 18ZM20 10C21.656 10 23 11.344 23 13C23 14.656 21.656 16 20 16C18.344 16 17 14.656 17 13C17 11.344 18.344 10 20 10ZM20 11C21.104 11 22 11.896 22 13C22 14.104 21.104 15 20 15C18.896 15 18 14.104 18 13C18 11.896 18.896 11 20 11Z"
      fill="#050505"
    />
  </svg>
)

export const OptionsDropdown = ({ className, ...props }: Omit<ButtonSquareProps, 'children'>) => {
  return (
    <ButtonSquare
      {...props}
      className={ctwMerge(
        'bg-transparent w-10 h-10 outline-transparent',
        'hover:bg-neutral4Hover active:bg-neutral4Hover',
        'focus-visible:bg-neutral4Hover',
        'disabled:bg-transparent disabled:cursor-not-allowed',
        className
      )}
    >
      <Dots className="fill-neutral1 w-10 h-10" />
    </ButtonSquare>
  )
}

export default OptionsDropdown
