"use client";

import React, { useEffect, useState } from "react";
import useGetData from "../../hooks/useGetData";

type Item = {
  userId: string;
  id: string;
  title: string;
  body: string;
};

const page = () => {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("Data not available");
  let dataFromHook: Item[] = [];

  dataFromHook = useGetData();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((dt) => setData(dt))
      .catch((error) => console.log(error))
      .finally(() => {
        setMessage("Data is available!!");
      });
  }, []);

  return (
    <>
      <h1 className="text-center">This is API call page</h1>
      <p className="text-center">{message}</p>
      <div className="flex flex-column">
        <div>
          <h1>This is from a custom hook</h1>
          {dataFromHook
            ? dataFromHook.map((item: Item) => {
                return (
                  <div
                    className="border-1 text-center"
                    key={item.userId + "_" + item.id}
                  >
                    <p>{item.userId}</p>
                    <p>{item.id}</p>
                    <p>{item.title}</p>
                    <p>{item.body}</p>
                  </div>
                );
              })
            : "No Data"}
        </div>
        <div>
          <h1>This is from same component</h1>
          {data
            ? data.map((item: Item) => {
                return (
                  <div
                    className="border-1 text-center"
                    key={item.userId + "_" + item.id}
                  >
                    <p>{item.userId}</p>
                    <p>{item.id}</p>
                    <p>{item.title}</p>
                    <p>{item.body}</p>
                  </div>
                );
              })
            : "No Data"}
        </div>
      </div>
    </>
  );
};

export default page;
