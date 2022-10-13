import { configureStore } from '@reduxjs/toolkit'
import { apiReducer } from '../reducers/apiReducer'
import { appReducer } from '../reducers/appReducer'

export const store = configureStore({
  reducer: {
    [apiReducer.reducerPath]: apiReducer.reducer,
    currency: appReducer.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiReducer.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
