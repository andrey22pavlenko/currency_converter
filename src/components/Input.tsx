import React, { FC } from 'react'
import { TextField } from '@mui/material'
import { useAppDispatch } from '../store/hooks'


interface InputProps {
  value: number,
  onChange:(e:number) => any

}
const Input:FC<InputProps> = ({value, onChange}) => {
 
const dispatch = useAppDispatch()
  return (
    <TextField
      id='outlined-basic'
      value={value}
      onChange={(e) => {dispatch(onChange(+e.target.value))}}
      variant='outlined'
    />
  )
}

export default Input
