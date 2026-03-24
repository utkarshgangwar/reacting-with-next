"use client";

import { useLayoutEffect, useRef } from "react";

const Page = () => {
  const boxRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    console.log("Layout effect");

    if (boxRef.current) {
      boxRef.current.style.background = "red";
    }
  }, []);

  return <div ref={boxRef}>Hello</div>;
};

export default Page;
