import React, { FC } from 'react'
import { TextField } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { inputSecondChange } from '../../reducers/appReducer'

const InputSecond: FC = () => {
  const dispatch = useAppDispatch()
  const inputSecond = useAppSelector((state) => state.currency.inputSecond)

  return (
    <TextField
      id='outlined-basic'
      value={inputSecond}
      onChange={(e) => dispatch(inputSecondChange(+e.target.value))}
      variant='outlined'
    />
  )
}

export default InputSecond
