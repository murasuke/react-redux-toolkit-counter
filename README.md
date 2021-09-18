# react-redux-counter

![img1](./img/img1.png)

下記サンプルソースを元に一部修正しました

https://github.com/oukayuka/Riakuto-StartingReact-ja3.1/tree/master/11-redux/02-redux


* 修正点
  * containerコンポーネントとpresentationalコンポーネントを一つにまとめる

---
* [codesandbox](https://codesandbox.io/)で作ったソースをgithubにpushして微調整

  https://codesandbox.io/s/bold-resonance-1mqrf


actions.ts

```typescript
export const CounterActionType = {
  ADD: 'ADD',
  DECREMENT: 'DECREMENT',
  INCREMENT: 'INCREMENT',
} as const;

type ValueOf<T> = T[keyof T];

export type CounterAction = {
  type: ValueOf<typeof CounterActionType>;
  amount?: number;
};

export const add = (amount: number): CounterAction => ({
  type: CounterActionType.ADD,
  amount,
});

export const decrement = (): CounterAction => ({
  type: CounterActionType.DECREMENT,
});

export const increment = (): CounterAction => ({
  type: CounterActionType.INCREMENT,
});

```

reducer.ts

```typescript
import { Reducer } from 'redux'; // eslint-disable-line import/no-extraneous-dependencies
import { CounterAction, CounterActionType as Type } from './actions';

export type CounterState = { count: number };
export const initialState: CounterState = { count: 0 };

export const counterReducer: Reducer<CounterState, CounterAction> = (
  state: CounterState = initialState,
  action: CounterAction,
): CounterState => {
  switch (action.type) {
    case Type.ADD:
      return {
        ...state,
        count: state.count + (action.amount || 0),
      };
    case Type.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case Type.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    default: {
      const _: never = action.type;

      return state;
    }
  }
};

```
