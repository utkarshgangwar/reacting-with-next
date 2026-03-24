"use client";

import React, { useCallback, useState } from "react";

const Child = React.memo(({ onClick }: { onClick: () => void }) => {
  console.log("👶 Child rendered");

  return (
    <button className="cursor-pointer border-1" onClick={onClick}>
      Child Button
    </button>
  );
});

const Page = () => {
  const [count, setCount] = useState(0);

  const normalFn = () => {
    console.log("Normal function");
  };

  const memoFn = useCallback(() => {
    console.log("Memo function");
  }, []);

  return (
    <div className="text-center">
      <h1>Child Re-render Demo</h1>

      <button
        className="cursor-pointer border-1"
        onClick={() => setCount(count + 1)}
      >
        Re-render Parent ({count})
      </button>

      <h3>Without useCallback</h3>
      <Child onClick={normalFn} />

      <h3>With useCallback</h3>
      <Child onClick={memoFn} />
    </div>
  );
};

export default Page;
