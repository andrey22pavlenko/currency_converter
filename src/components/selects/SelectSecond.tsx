import React, { FC } from 'react'
import { useGetCurrencyQuery } from '../../reducers/apiReducer'
import { selectSecondChange } from '../../reducers/appReducer'
import { useAppDispatch } from '../../store/hooks'

const SelectSecond: FC = () => {
  const { data: currency, isLoading } = useGetCurrencyQuery('')
  const dispatch = useAppDispatch()

  return (
    <div>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <select
          className='w-80 text-lg antialiased font-normal h-10 rounded-md  bg-teal-50'
          onChange={(e) => dispatch(selectSecondChange(+e.target.value))}
        >
          {currency?.map((item, id) => (
            <option key={id} value={item.rate}>
              {item.txt}
            </option>
          ))}
        </select>
      )}
    </div>
  )
}

export default SelectSecond
