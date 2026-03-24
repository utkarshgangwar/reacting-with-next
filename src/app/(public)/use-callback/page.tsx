"use client";

import React, { useCallback, useRef, useState } from "react";

const page = () => {
  const [count, setCount] = useState(0);
  const prevClickRef = useRef<any>(null);
  const prevByeRef = useRef<any>(null);

  const handleClick = () => {
    console.log("Clicked!! ");
  };

  const handleByeBye = useCallback(() => {
    console.log("Bye Bye I am Memoized!! ");
  }, []);

  const isClickSame = prevClickRef.current === handleClick;
  const isByeSame = prevByeRef.current === handleByeBye;

  prevClickRef.current = handleClick;
  prevByeRef.current = handleByeBye;

  console.log(prevByeRef.current, prevByeRef.current)

  return (
    <div className="flex flex-col gap-4 text-center">
      <h1>Function Reference Demo</h1>

      <button onClick={() => setCount(count + 1)}>Re-render ({count})</button>

      <div>
        <button onClick={handleClick}>Click Me (Normal)</button>
        <p>Same reference? {isClickSame.toString()}</p>
      </div>

      <div>
        <button onClick={handleByeBye}>No Click Me (Memoized)</button>
        <p>Same reference? {isByeSame.toString()}</p>
      </div>
    </div>
  );
};

export default page;
