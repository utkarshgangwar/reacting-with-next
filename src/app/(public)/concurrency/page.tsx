"use client";

import React, { useState } from "react";
import UseTransition from "../use-transition/page";

const page = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Initial Text");

  console.log("rendering");

  return (
    <>
      <h1 className="text-center">Concurrency v18</h1>
      <div className="">
        <div className="flex">
          <div className="p-4">
            <p className="p-4">
              It is an optimization technique <br />
              that works by breaking a large program
              <br />
              into smaller pieces to execute it
              <br />
              independently.
              <br />
              It helps in working on multipl tasks <br />
              simultaneously.
            </p>

            <h2>Key Points:</h2>
            <ul>
              <li>- Build user centric web apps</li>
              <li>- Faster interactions</li>
            </ul>
          </div>
          <div>
            <div className="p-4 gap-2 flex border-1 flex-column">
              <h2 className="text-center">Ex: 1</h2>
              <div>
                <p>Counter: {count}</p>
                <button
                  className="border-1"
                  onClick={() => setCount(count + 1)}
                >
                  Press to increase counter
                </button>
              </div>

              <div>
                <p>{text}</p>
                <button
                  className="border-1"
                  onClick={() =>
                    setTimeout(() => setText("Text Updated"), 2000)
                  }
                >
                  Press to change text
                </button>
              </div>

              <p>
                While the text is being updated <br />
                User is able to increase the counter value <br />
                Which demonstrates that <br /> the concurrent mode allows user
                to <br />
                switch between executing different tasks.
              </p>
            </div>

            <div className="border-1">
              <h2>
                Ex 2: <UseTransition />
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
