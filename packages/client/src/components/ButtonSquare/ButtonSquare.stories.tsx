import React from 'react'
import ButtonSquare from './ButtonSquare'
import { ChevronRightBold } from '@pretto/picto'
import '../../styles/globals.generated.css'

export default {
  title: 'Components/ButtonSquare',
  component: ButtonSquare,
}

export const Default = () => (
  <ButtonSquare>
    <ChevronRightBold />
  </ButtonSquare>
)

export const Disabled = () => (
  <ButtonSquare disabled>
    <ChevronRightBold />
  </ButtonSquare>
)
