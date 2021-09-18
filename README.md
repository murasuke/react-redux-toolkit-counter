# react-redux-counter

![img1](./img/img1.png)

下記サンプルソースを元に一部修正しました

https://github.com/oukayuka/Riakuto-StartingReact-ja3.1/tree/master/11-redux/04-toolkit


* 修正点
  * containerコンポーネントとpresentationalコンポーネントを一つにまとめる

---
* [codesandbox](https://codesandbox.io/)で作ったソースをgithubにpushして微調整

  https://codesandbox.io/s/bold-resonance-1mqrf


src/features/counter.ts

* redux toolkitを利用することで、驚くほどreducerが書きやすくなりました

```typescript
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CounterState = { count: number };
const initialState: CounterState = { count: 0 };

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    added: (state, action: PayloadAction<number>) => ({
      ...state,
      count: state.count + action.payload,
    }),
    decremented: (state) => ({ ...state, count: state.count - 1 }),
    incremented: (state) => ({ ...state, count: state.count + 1 }),
  },
});


```

