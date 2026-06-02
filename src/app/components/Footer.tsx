import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col align-center content-center font-sans font-semibold leading-1 tracking-tight text-sm">
      <p>{`Reacting with Next`}</p>
      <p>Utkarsh Gangwar</p>
      <span>{new Date().getFullYear()}</span>
    </div>
  );
};

export default Footer;
