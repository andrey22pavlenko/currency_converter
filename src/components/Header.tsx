import React, { FC } from 'react'
import { CurrencyType } from '../types/CurrencyType'

interface HeaderProps {
  currency?: CurrencyType[]
  loading: boolean
}

const Header: FC<HeaderProps> = ({ currency, loading }) => {
  return (
    <div className='flex flex-col space-x-72'>
      <h1 className='text-4xl'>Currency Converter</h1>

      {loading ? (
        <p className='pl-96 '>Loading</p>
      ) : (
        <div className='pl-96 text-lg'>
          {currency?.map((item, id) => (
            <div key={id}>
              <p>{item.txt === 'Євро' && `${item.rate.toFixed(2)} EUR`}</p>
              <p>{item.txt === 'Долар США' && `${item.rate.toFixed(2)} US`}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Header
