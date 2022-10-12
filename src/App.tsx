import React from 'react';
import Header from './components/header/Header';
import InputFirst from './components/input/InputFirst';
import InputSecond from './components/input/InputSecond';
import SelectFirst from './components/select/SelectFirst';
import SelectSecond from './components/select/SelectSecond';

export default function App() {
  return (
    <div className="ml-96 mt-24 space-y-10  ">
      <Header />

      <div className="flex flex-row space-x-28 ">
        <div className="flex flex-col  w-80 space-y-5">
          <InputFirst />
          <SelectFirst />
        </div>

        <div className="flex flex-col  w-80 space-y-5">
          <InputSecond />
          <SelectSecond />
        </div>
      </div>
    </div>
  );
}
