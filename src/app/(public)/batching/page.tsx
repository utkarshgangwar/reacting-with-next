"use client";

import { useState } from "react";
import CodeSnippet from "../../components/CodeSnippet";

export default function BatchingExample() {
  const [count, setCount] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);
  const [count3, setCount3] = useState<number>(0);
  const [count4, setCount4] = useState<number>(0);

  const handleClick = (): void => {
    setCount(count + 1);
    setCount(count + 2);
    setCount(count + 3);
  };

  const handleClick2 = (): void => {
    setCount2((prev) => prev + 1);
    setCount2((prev) => prev + 2);
    setCount2((prev) => prev + 3);
  };

  const handleClick3 = (): void => {
    const timer = setTimeout(() => {
      setCount3(count3 + 1);
      setCount3(count3 + 2);
      setCount3(count3 + 3);
    }, 1000);
    clearTimeout(timer);
  };

  const handleClick4 = (): void => {
    const timer = setTimeout(() => {
      setCount4((prev) => prev + 1);
      setCount4((prev) => prev + 2);
      setCount4((prev) => prev + 3);
    }, 1000);

    clearTimeout(timer);
  };

  const handleReset = () => {
    setCount(0);
    setCount2(0);
    setCount3(0);
    setCount4(0);
  };

  return (
    <div className="min-h-screen p-4 bg-zinc-50 dark:bg-black">
      {/* Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
        {/* Card 1 */}
        <div className="rounded-2xl border p-4 bg-white dark:bg-zinc-900 shadow-sm">
          <CodeSnippet
            code={`const handleClick = () => {
  setCount(count + 1);
  setCount(count + 2);
  setCount(count + 3);
};`}
          />
          <h2 className="mt-4 text-xl font-semibold">Count: {count}</h2>
          <button
            onClick={handleClick}
            className="mt-3 w-full rounded-lg bg-black text-white py-2 hover:opacity-80 dark:bg-white dark:text-black"
          >
            Increment
          </button>
        </div>

        {/* Card 2 */}
        <div className="rounded-2xl border p-4 bg-white dark:bg-zinc-900 shadow-sm">
          <CodeSnippet
            code={`const handleClick2 = () => {
  setCount2(prev => prev + 1);
  setCount2(prev => prev + 2);
  setCount2(prev => prev + 3);
};`}
          />
          <h2 className="mt-4 text-xl font-semibold">Count: {count2}</h2>
          <button
            onClick={handleClick2}
            className="mt-3 w-full rounded-lg bg-black text-white py-2 hover:opacity-80 dark:bg-white dark:text-black"
          >
            Increment
          </button>
        </div>

        {/* Card 3 */}
        <div className="rounded-2xl border p-4 bg-white dark:bg-zinc-900 shadow-sm">
          <CodeSnippet
            code={`const handleClick3 = () => {
  setTimeout(() => {
    setCount3(count3 + 1);
    setCount3(count3 + 2);
    setCount3(count3 + 3);
  }, 1000);
};`}
          />
          <h2 className="mt-4 text-xl font-semibold">Count: {count3}</h2>
          <button
            onClick={handleClick3}
            className="mt-3 w-full rounded-lg bg-black text-white py-2 hover:opacity-80 dark:bg-white dark:text-black"
          >
            Increment
          </button>
        </div>

        {/* Card 4 */}
        <div className="rounded-2xl border p-4 bg-white dark:bg-zinc-900 shadow-sm">
          <CodeSnippet
            code={`const handleClick4 = () => {
  setTimeout(() => {
    setCount4(prev => prev + 1);
    setCount4(prev => prev + 2);
    setCount4(prev => prev + 3);
  }, 1000);
};`}
          />
          <h2 className="mt-4 text-xl font-semibold">Count: {count4}</h2>
          <button
            onClick={handleClick4}
            className="mt-3 w-full rounded-lg bg-black text-white py-2 hover:opacity-80 dark:bg-white dark:text-black"
          >
            Increment
          </button>
        </div>
      </div>

      {/* Reset Button */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={handleReset}
          className="rounded-xl bg-red-500 px-6 py-2 text-white hover:bg-red-600"
        >
          Reset All
        </button>
      </div>
    </div>
  );
}
