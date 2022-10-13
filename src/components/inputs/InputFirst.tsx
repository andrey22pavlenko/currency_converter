import React, { FC } from 'react'
import { TextField } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { inputFirstChange } from '../../reducers/appReducer'

const InputFirst: FC = () => {
  const dispatch = useAppDispatch()
  const inputFirst = useAppSelector((state) => state.currency.inputFirst)

  return (
    <TextField
      id='outlined-basic'
      value={inputFirst}
      onChange={(e) => dispatch(inputFirstChange(+e.target.value))}
      variant='outlined'
    />
  )
}

export default InputFirst
