import { configureStore } from '@reduxjs/toolkit';
import { currentApi } from '../reducer/reducerApi';
import { reducerApp } from '../reducer/reducerApp';

export const store = configureStore({
  reducer: {
    [currentApi.reducerPath]: currentApi.reducer,
    currency: reducerApp.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(currentApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
