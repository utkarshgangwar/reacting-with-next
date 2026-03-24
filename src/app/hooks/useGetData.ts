import React, { useEffect, useState } from 'react'

const useGetData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((dt) => setData(dt))
      .catch((error) => console.log(error))
  }, []);

  return data;
}

export default useGetData