import classNames from 'classnames'
import { twMerge } from 'tailwind-merge'

export const ctwMerge = (...args: classNames.ArgumentArray) => twMerge(classNames(...args))
