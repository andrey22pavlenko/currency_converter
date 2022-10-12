import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CurrencyType } from '../type/type';

const numberFirst = 22.8;

interface initialStateProps {
  currency: CurrencyType[];
  selectFirst: number;
  selectSecond: number;
  inputFirst: number;
  inputSecond: number;
}

const initialState: initialStateProps = {
  currency: [],
  selectFirst: numberFirst,
  selectSecond: numberFirst,
  inputFirst: 0,
  inputSecond: 0,
};

export const reducerApp = createSlice({
  name: 'reducerApp',
  initialState,
  reducers: {
    selectFirstChange: (state, action: PayloadAction<number>) => {
      state.selectFirst = action.payload;
      state.inputSecond = +(
        (state.inputFirst * state.selectSecond) /
        state.selectFirst
      ).toFixed(2);
    },
    selectSecondChange: (state, action: PayloadAction<number>) => {
      state.selectSecond = action.payload;
      state.inputFirst = +(
        (state.inputSecond * state.selectFirst) /
        state.selectSecond
      ).toFixed(2);
    },

    inputFirstChange: (state, action: PayloadAction<number>) => {
      state.inputFirst = action.payload;
      state.inputSecond = +(
        (state.inputFirst * state.selectSecond) /
        state.selectFirst
      ).toFixed(2);
    },

    inputSecondChange: (state, action: PayloadAction<number>) => {
      state.inputSecond = action.payload;
      state.inputFirst = +(
        (state.inputSecond * state.selectFirst) /
        state.selectSecond
      ).toFixed(2);
    },
  },
});

export const {
  selectFirstChange,
  selectSecondChange,
  inputFirstChange,
  inputSecondChange,
} = reducerApp.actions;
