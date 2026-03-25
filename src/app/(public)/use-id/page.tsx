"use client";

import { useId, useState } from "react";

const page = () => {
  const emailId = useId();
  const passwordId = useId();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const id = Math.random();

  console.log("emailId : ", emailId);
  console.log("passwordId : ", passwordId);
  console.log("id : ", id);

  return (
    <form>
      <div>
        <label htmlFor={emailId}>Email</label>
        <input
          id={emailId}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor={passwordId}>Password</label>
        <input
          id={passwordId}
          type="password"
          onChange={(e) => setPass(e.target.value)}
          value={pass}
        />
      </div>
    </form>
  );
};

export default page;
