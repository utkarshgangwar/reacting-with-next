"use client";

import React, { useEffect, useState } from "react";

const page = () => {
  const [message, setMessage] = useState("Initialized message value");
  const [messageButton, setMessageButton] = useState("Initialized message button value");
  const [isMounted, setIsMounted] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("Congrats! Component is mounted!!");
      setIsMounted(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const timer = setTimeout(() => {
        setMessage("This message is after 5 seconds of component mounting!");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isMounted]);

  const hadleState = () => {
    setButtonClicked((prev) => !prev);
  };

  useEffect(() => {
    setMessageButton(`Button value is set ${buttonClicked}`);
  }, [buttonClicked]);

  return (
    <>
      <h1 className="text-center p-5">This is useEffect Page!</h1>

      <h2 className="p=5 text-center">Message 1: {message}</h2>
      <h2 className="p=5 text-center">Message 2: {messageButton}</h2>

      <button onClick={hadleState} className="p-5 cursor-pointer border-1">
        Toggle the state information
      </button>
    </>
  );
};

export default page;
