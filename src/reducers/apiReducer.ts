import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CurrencyType } from '../types/CurrencyType'

const URL_CURRENCY = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'

export const apiReducer = createApi({
  reducerPath: 'apiReducer',
  baseQuery: fetchBaseQuery({ baseUrl: URL_CURRENCY }),
  endpoints: (builder) => ({
    getCurrency: builder.query<CurrencyType[], any>({
      query: () => '/v1/statdirectory/exchange?json',
    }),
  }),
})

export const { useGetCurrencyQuery } = apiReducer
