import React, { FC } from 'react';
import { useGetCurrencyQuery } from '../../reducer/reducerApi';
import { selectFirstChange } from '../../reducer/reducerApp';
import { useAppDispatch } from '../../store/hooks';

const SelectFirst: FC = () => {
  const { data: currency, isLoading } = useGetCurrencyQuery('');
  const dispatch = useAppDispatch();

  return (
    <div>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <select
          className="w-80 text-lg antialiased font-normal h-10 rounded-md bg-teal-50"
          onChange={(e) => dispatch(selectFirstChange(+e.target.value))}
        >
          {currency?.map((item,id) => (
            <option key={id} className="font-normal " value={item.rate}>
              {item.txt}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default SelectFirst;
