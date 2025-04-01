import axios from "axios";
import { useEffect, useState } from "react";

import { CurrDropdown } from "../components/CurrDropdown";
export const Converter = () => {
  const [userInput, setUserInput] = useState({
    amount: "",
    fromCurr: "",
    toCurr: "",
  });
  function handleChange(e) {
    setUserInput((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  return (
    <main>
      <form>
        <legend>Currency converter</legend>
        <br />
        <label htmlFor="amount">Enter amount:</label>
        <br />
        <input
          onChange={(e) => {
            handleChange(e);
          }}
          type="text"
          name="amount"
          id="amount"
        />
        <br />
        <CurrDropdown userInput={userInput} handleChange={handleChange} />
        <br />
        <button>Get exchange rate</button>
      </form>
      <br />
      <p></p>
    </main>
  );
};
