"use client";

import React from "react";
import { useState } from "react";

const page = () => {
  const [count, setCount] = useState(0);

  const handleCount = (type: string): void => {
    if (type === "inc") {
      setCount((prev) => prev + 1);
    } else {
      setCount((prev) => prev - 1);
    }
  };

  console.log("Render");

  return (
    <>
      <button onClick={(e) => handleCount("dec")}>-</button>
      {count}
      <button onClick={(e) => handleCount("inc")}>+</button>
    </>
  );
};

export default page;
