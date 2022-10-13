import React, { FC } from 'react'
import { currencyType } from '../type/currencyType'

interface SelectProps {
  onChange: (e: number) => void
  currency?: currencyType[]
  loading: boolean
}

const SelectSecond: FC<SelectProps> = ({ onChange, currency, loading }) => {
  return (
    <div>
      {loading ? (
        <p>Loading</p>
      ) : (
        <select
          className='w-80 text-lg antialiased font-normal h-10 rounded-md  bg-teal-50'
          onChange={(e) => {
            onChange(+e.target.value)
          }}
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
