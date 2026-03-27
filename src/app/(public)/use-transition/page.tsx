import React, { useState, useTransition } from "react";

const ALL_ITEMS = [
  "React",
  "React Native",
  "Next.js",
  "Vue.js",
  "Angular",
  "Svelte",
  "SolidJS",
];

const page = () => {
  const [inputValue, setInputValue] = useState("");
  const [filterQuery, setFilterQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState<string[]>([]);

  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    startTransition(() => {
      setFilterQuery(newValue);

      const filtered = ALL_ITEMS.filter((item) =>
        item.toLowerCase().includes(newValue.toLocaleLowerCase()),
      );
      setFilteredItems(filtered);
    });
  };

  return (
    <>
      <h1 className="text-center">useTransition v18</h1>
      <h2>Filter list with Transition</h2>
      <div className="flex flex-row gap-4">
        <input
          className="m-2 p-2"
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Type to filter..."
        />
        <div>
          <p className="p-2 m-2">
            <strong>Filter Query: </strong> {filterQuery}
          </p>
          <p>
            While list is being searched, user can type effortlessly
            <br />
            without getting a lag in the input field.
          </p>
        </div>
      </div>

      {isPending && <p>Filtering in background...</p>}
      <ul>
        {filteredItems.map((item, key) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default page;
