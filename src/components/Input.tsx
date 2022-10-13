import React, { FC } from 'react'
import { TextField } from '@mui/material'


interface InputProps {
  value: number
  onChange: (e: number) => void
}
const Input: FC<InputProps> = ({ value, onChange }) => {

  return (
    <TextField
      id='outlined-basic'
      value={value}
      onChange={(e) => onChange(+e.target.value)}
      variant='outlined'
    />
  )
}

export default Input
