import React, { FC } from 'react'
import { useAppDispatch } from '../store/hooks'
import { CurrencyType } from '../types/CurrencyType'


interface SelectProps {
  onChange:(e:number) => any,
  currency?: CurrencyType[]
  loading: boolean
}

const SelectSecond: FC<SelectProps> = ({onChange, currency,loading}) => {


  const dispatch = useAppDispatch()

  return (
    <div>
      {loading ? (
        <p>Loading</p>
      ) : (
        <select
          className='w-80 text-lg antialiased font-normal h-10 rounded-md  bg-teal-50'
          onChange={(e) => dispatch(onChange(+e.target.value))}
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
