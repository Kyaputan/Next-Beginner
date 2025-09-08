'use client'
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  }
  const subCount = () => {
    setCount(count - 1);
  }
  return (
    <>
    <div className="flex gap-4 items-center justify-center text-2xl">
    <button onClick={subCount} className="border border-black p-2"> - </button>
    <span>{count}</span>
    <button onClick={addCount} className="border border-black p-2"> + </button>
    </div>
    </>
  );
};

export default Counter;
