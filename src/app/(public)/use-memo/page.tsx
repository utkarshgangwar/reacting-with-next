"use client";

import React, { useMemo, useState } from "react";

const page = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  const highComputedValue = () => {
    console.log("Running the slow function");
    let result = 0;
    for (let i = 0; i < 5_000_000; i++) {
      result += count;
    }

    return result;
  };

  const highComputedValueMemoized = useMemo(() => {
    console.log("Running the memoized function");
    let result = 0;
    for (let i = 0; i < 5_000_000; i++) {
      result += count;
    }

    return result;
  }, [count]);

  return (
    <>
      <div className="text-center">
        <h1>This is useMemo Page</h1>
        <p>NOTE: open console for logs to understand!!</p>
        <p>Without Memo: {highComputedValue()}</p>
        <p>With Memo: {highComputedValueMemoized}</p>
        <p>Count: {count}</p>
        <p>Toggle: {toggle.toString()}</p>
        <button className="border-1 cursor-pointer" onClick={() => setCount(count + 1)}>
          Increment Count
        </button>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <button className="border-1 cursor-pointer" onClick={() => setToggle((prev) => !prev)}>
          Toggle (Unrelated State)
        </button>
      </div>
    </>
  );
};

export default page;
