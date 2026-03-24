"use client";

import { useRef } from "react";

const page = () => {
  const countRef = useRef(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleRef = () => {
    countRef.current += 1;
    console.log(countRef.current);

    if (countRef.current % 2) {
      inputRef.current?.focus();
    }
  };

  console.log("Render", inputRef.current);

  return (
    <>
      <h1 className="text-center m-5 p-5">The component is not rendering</h1>
      <button onClick={handleRef} className="cursor-pointer p-5 border-1">
        Each alternate click here will focus on the input field
      </button>
      <input type="text" className="m-5" placeholder="This is a text input field" ref={inputRef} />
    </>
  );
};

export default page;
