"use client";

import React, { useEffect, useRef, useState } from "react";

const page = () => {
  const [message, setMessage] = useState("Initialized message value");
  const [messageButton, setMessageButton] = useState(
    "Initialized message button value",
  );
  const [isMounted, setIsMounted] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  let updationCount = useRef(0);

  //   ComponentDidMount,
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("Congrats! Component is mounted!!");
      setIsMounted(true);
    }, 5000);

    //   ComponentWillUnmount
    return () => clearTimeout(timer);
  }, []);

  //   ComponentDidUpdate
  useEffect(() => {
    if (isMounted) {
      const timer = setTimeout(() => {
        setMessage("This message is after 5 seconds of component mounting!");
      }, 5000);

      //   ComponentWillUnmount
      return () => clearTimeout(timer);
    }
  }, [isMounted]);

  const hadleState = () => {
    setButtonClicked((prev) => !prev);
  };

  //   ComponentDidUpdate
  useEffect(() => {
    setMessageButton(`Button value is set ${buttonClicked}`);
  }, [buttonClicked]);

  //   ComponentDidUpdate
  useEffect(() => {
    // setUpdationCount((prev) => prev + 1);
    updationCount.current += 1;
    console.log(`Component Updated: ${updationCount.current} times`);
  });

  return (
    <>
      <h1 className="text-center p-5">This is useEffect Page!</h1>

      <h2 className="p=5 text-center">Message 1: {message}</h2>
      <h2 className="p=5 text-center">Message 2: {messageButton}</h2>

      <button onClick={hadleState} className="p-5 cursor-pointer border-1">
        Toggle the state information
      </button>

      <h1 className="text-center">Component updated: {updationCount.current} times</h1>
    </>
  );
};

export default page;
