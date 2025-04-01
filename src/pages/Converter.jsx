import { useEffect, useState } from "react";

import { CurrDropdown } from "../components/CurrDropdown";
export const Converter = () => {
  const [userInput, setUserInput] = useState({
    amount: 100,
    fromCurr: "",
    toCurr: "",
  });
  function handleChange(e) {
    setUserInput((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }
  console.log(userInput);
  return (
    <main className="flex flex-row justify-center  items-center min-h-screen">
      <form className="flex flex-col gap-3">
        <legend className="text-center font-bold text-2xl">
          Currency converter
        </legend>
        <label htmlFor="amount">Enter amount:</label>
        <input
          onChange={(e) => {
            handleChange(e);
          }}
          type="text"
          name="amount"
          id="amount"
          className="border"
          value={userInput.amount}
        />
        <CurrDropdown userInput={userInput} handleChange={handleChange} />
        <button className="border cursor-pointer">Get exchange rate</button>
        <p className="text-center border-dashed border p-2">
          Exchange rates will appear here
        </p>
      </form>
    </main>
  );
};
