import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CurrencyType } from '../type/type';

const URL_CURRENCY =
  'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

export const currentApi = createApi({
  reducerPath: 'currentApi',
  baseQuery: fetchBaseQuery({ baseUrl: URL_CURRENCY }),
  endpoints: (builder) => ({
    getCurrency: builder.query<CurrencyType[],any>({
      query: () => '/v1/statdirectory/exchange?json',
    }),
  }),
});

export const { useGetCurrencyQuery } = currentApi;
