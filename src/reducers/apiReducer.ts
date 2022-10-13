import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { currencyType } from '../type/currencyType'

const URL_CURRENCY = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'

export const apiReducer = createApi({
  reducerPath: 'apiReducer',
  baseQuery: fetchBaseQuery({ baseUrl: URL_CURRENCY }),
  endpoints: (builder) => ({
    getCurrency: builder.query<currencyType[], any>({
      query: () => '/v1/statdirectory/exchange?json',
    }),
  }),
})

export const { useGetCurrencyQuery } = apiReducer
