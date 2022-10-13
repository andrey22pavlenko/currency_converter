import React from 'react'
import Header from './components/Header'
import Input from './components/Input'
import { inputFirstChange, inputSecondChange, selectFirstChange, selectSecondChange} from './reducers/appReducer'
import { useAppSelector } from './store/hooks'
import  Select  from './components/Select'
import { useGetCurrencyQuery } from './reducers/apiReducer'


export default function App() {

 
  const inputFirst = useAppSelector((state) => state.currency.inputFirst)
  const inputSecond = useAppSelector(state => state.currency.inputSecond)
  const { data, isLoading } = useGetCurrencyQuery('')
  
 
  return (

    <div className='ml-96 mt-24 space-y-10  '>


      <Header currency={data} loading={isLoading} />

      <div className='flex flex-row space-x-28 '>
        <div className='flex flex-col  w-80 space-y-5'>

          <Input  value={inputFirst} onChange={inputFirstChange} />
          <Select  currency={data} loading={isLoading} onChange={selectFirstChange} />
         
        </div>

        <div className='flex flex-col  w-80 space-y-5'>
         
          <Input  value={inputSecond} onChange={inputSecondChange} />
          <Select  currency={data} loading={isLoading} onChange={selectSecondChange} />
        </div>
      </div>
    </div>
  )
}
