"use client";

import React, { useEffect, useState } from "react";

export const locations = [
  // Countries
  "India",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "Netherlands",
  "Switzerland",
  "Sweden",
  "Norway",
  "Denmark",
  "Finland",
  "Russia",
  "China",
  "Japan",
  "South Korea",
  "Brazil",
  "Mexico",
  "Argentina",
  "South Africa",
  "Nigeria",
  "Egypt",
  "Saudi Arabia",
  "United Arab Emirates",
  "Turkey",
  "Indonesia",
  "Thailand",
  "Vietnam",
  "Philippines",
  "Singapore",
  "Malaysia",
  "New Zealand",
  "Ireland",
  "Poland",
  "Portugal",
  "Greece",
  "Austria",
  "Belgium",
  "Czech Republic",
  "Hungary",
  "Romania",
  "Ukraine",
  "Pakistan",
  "Bangladesh",
  "Sri Lanka",
  "Nepal",
  "Afghanistan",

  // India Cities
  "Delhi",
  "Mumbai",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Pune",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
  "Bhopal",
  "Indore",
  "Nagpur",
  "Chandigarh",
  "Surat",
  "Patna",
  "Ranchi",
  "Raipur",
  "Noida",
  "Gurgaon",

  // USA Cities
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "San Francisco",
  "Seattle",
  "Boston",
  "Dallas",
  "Miami",

  // Europe Cities
  "London",
  "Manchester",
  "Birmingham",
  "Paris",
  "Berlin",
  "Munich",
  "Rome",
  "Madrid",
  "Barcelona",
  "Amsterdam",

  // Asia Cities
  "Tokyo",
  "Osaka",
  "Beijing",
  "Shanghai",
  "Seoul",
  "Bangkok",
  "Singapore",
  "Kuala Lumpur",
  "Jakarta",
  "Manila",

  // Middle East Cities
  "Dubai",
  "Abu Dhabi",
  "Doha",
  "Riyadh",
  "Jeddah",

  // Australia Cities
  "Sydney",
  "Melbourne",
  "Brisbane",
  "Perth",
  "Adelaide",

  // Africa Cities
  "Cape Town",
  "Johannesburg",
  "Lagos",
  "Cairo",
  "Nairobi",

  // South America Cities
  "São Paulo",
  "Rio de Janeiro",
  "Buenos Aires",
  "Santiago",
  "Lima",
];

const page = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {}, [input]);

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <ul>
        {list.map((item, index) => (
          <p key={item + index}>
            {item} <br />
          </p>
        ))}
      </ul>
    </>
  );
};

export default page;
