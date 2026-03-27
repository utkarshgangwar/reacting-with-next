"use client";

import React, { useState, useCallback } from "react";

// 🔹 Debounce with types
function debounce<T extends (...args: any[]) => void>(fn: T, delay: number) {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

// 🔹 Throttle with types
function throttle<T extends (...args: any[]) => void>(fn: T, limit: number) {
  let lastCall = 0;

  return (...args: Parameters<T>) => {
    const now = Date.now();

    if (now - lastCall >= limit) {
      lastCall = now;
      fn(...args);
    }
  };
}

const page: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [debounceValue, setDebounceValue] = useState<string>("");
  const [throttleValue, setThrottleValue] = useState<string>("");

  // ✅ Debounced handler
  const debouncedUpdate = useCallback(
    debounce((value: string) => {
      setDebounceValue(value);
      console.log("Debounce API Call:", value);
    }, 1000),
    [],
  );

  // ✅ Throttled handler
  const throttledUpdate = useCallback(
    throttle((value: string) => {
      setThrottleValue(value);
      console.log("Throttle API Call:", value);
    }, 1000),
    [],
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setInput(value);
    debouncedUpdate(value);
    throttledUpdate(value);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Throttle vs Debounce (TSX)</h2>

      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Type something..."
        style={{ padding: "10px", width: "300px" }}
      />

      <div style={{ marginTop: "20px" }}>
        <p>
          <strong>Debounced Value:</strong> {debounceValue}
        </p>
        <p>
          <strong>Throttled Value:</strong> {throttleValue}
        </p>
      </div>
    </div>
  );
};

export default page;
