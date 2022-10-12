import React, { FC } from 'react';
import { useGetCurrencyQuery } from '../../reducer/reducerApi';

const Header: FC = () => {
  const { data: currency, isLoading } = useGetCurrencyQuery('');

  return (
    <div className="flex flex-col space-x-72">
      <h1 className="text-4xl">Currency Converter</h1>

      {isLoading ? (
        <p className="pl-96 ">Loading</p>
      ) : (
        <div className="pl-96 text-lg">
          {currency?.map((item,id) => (
            <div key={id}>
              {item.txt === 'Долар США' ? (
                <p>{item.rate.toFixed(2)} US</p>
              ) : (
                <p></p>
              )}
              {item.txt === 'Євро' ? (
                <p>{item.rate.toFixed(2)} EUR</p>
              ) : (
                <p></p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
