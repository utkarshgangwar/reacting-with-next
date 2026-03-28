"use client";

import React, { useState, useTransition } from "react";

const page = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [data, setData] = useState<string[]>([]);
  const [data2, setData2] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    startTransition(() => {
      const l = [];
      for (let i = 0; i < 20000; i++) {
        l.push(newValue);
      }

      setData(l);
    });
  };

  function handleChangeWithoutTransition(
    e: React.ChangeEvent<HTMLInputElement>,
  ) {
    const newValue2 = e.target.value;
    setInputValue2(newValue2);
    const l = [];
    for (let i = 0; i < 20000; i++) {
      l.push(newValue2);
    }

    setData2(l);
  }

  return (
    <>
      <h1 className="text-center">This is useTransition v18</h1>
      <div className="flex flex-column justify-between">
        <div>
          <h1 className="text-center">This is with useTransition hook</h1>
          <input
            className="border-1"
            type="text"
            value={inputValue}
            onChange={handleChange}
          />{" "}
          <br />
          {isPending && <>Loading ...</>}
          {data.map((item, index) => {
            return (
              <span key={item + index}>
                {item} <br />
              </span>
            );
          })}
        </div>
        <div>
          <h1 className="text-center">This is without useTransition hook</h1>
          <input
            className="border-1"
            type="text"
            value={inputValue2}
            onChange={handleChangeWithoutTransition}
          />{" "}
          <br />
          {data2.map((item, index) => {
            return (
              <span key={item + index}>
                {item} <br />
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default page;
