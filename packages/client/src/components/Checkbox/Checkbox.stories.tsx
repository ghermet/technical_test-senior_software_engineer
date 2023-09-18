import React from 'react'
import Checkbox from './Checkbox'
import '../../styles/globals.generated.css'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
}

export const Default = () => <Checkbox id="checkbox" label="" isDefaultChecked={false} />

export const Checked = () => <Checkbox id="checkbox" label="" isChecked={true} />

export const Unchecked = () => <Checkbox id="checkbox" label="" isChecked={false} />
