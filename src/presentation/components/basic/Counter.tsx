"use client";
import { useState } from "react";

/*
  演習 2-3 stateを使ってカウンターの値を変化させる
  - 現在値を表示
  - +1 / -1 / Reset の3ボタン
*/
export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ border: "1px solid #ddd", padding: 16, borderRadius: 8, width: 320 }}>
      <h3 style={{ margin: 0, marginBottom: 8 }}>Counter</h3>
      <p style={{ fontSize: 18, margin: "8px 0" }}>現在のカウント: <strong>{count}</strong></p>
      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={increment}>＋1</button>
        <button onClick={decrement}>－1</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
