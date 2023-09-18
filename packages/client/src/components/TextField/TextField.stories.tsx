import React from 'react'
import TextField from './TextField'
import '../../styles/globals.generated.css'

export default {
  title: 'Components/TextField',
  component: TextField,
}

export const Default = () => <TextField className="w-80" placeholder='Search...' defaultValue="" />
