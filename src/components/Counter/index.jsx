import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from './slice';
import style from './style.module.scss';

const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = React.useState('2');

  return (
    <div>
      <div className={style.row}>
        <button
          aria-label="Increment value"
          className={style.button}
          onClick={() => dispatch(increment())}
          type="button"
        >
          +
        </button>

        <span className={style.value}>{count}</span>

        <button
          aria-label="Increment value"
          className={style.button}
          onClick={() => dispatch(decrement())}
          type="button"
        >
          -
        </button>
      </div>

      <div className={style.row}>
        <input
          aria-label="Set increment amount"
          className={style.textbox}
          onChange={(e) => setIncrementAmount(e.target.value)}
          value={incrementAmount}
        />

        <button
          className={style.button}
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}
          type="button"
        >
          Add Amount
        </button>

        <button
          className={style.AsyncButton}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
          type="button"
        >
          Add Async
        </button>
      </div>
    </div>
  );
};

export default Counter;
