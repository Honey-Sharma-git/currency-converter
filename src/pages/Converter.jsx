import { useEffect, useState } from "react";
import { CurrDropdown } from "../components/CurrDropdown";
import axios from "axios";
export const Converter = () => {
  const baseURL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@";
  const [conversionFactor, setConversionFactor] = useState("");
  const [exchangeRates, setExchangeRates] = useState("");
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

  async function getData() {
    try {
      if (userInput.amount && userInput.fromCurr && userInput.toCurr) {
        const response = await axios.get(
          `${baseURL}latest/v1/currencies/${userInput.fromCurr}.json`
        );
        if (response.status === 200) {
          setExchangeRates(response.data);
        }
      }
    } catch (error) {
      console.log("Error calling Currency exchange API:", error);
    }
  }

  useEffect(() => {
    if (userInput.fromCurr && userInput.toCurr && exchangeRates) {
      setConversionFactor(
        exchangeRates[userInput.fromCurr]?.[userInput.toCurr] || "N/A"
      );
    }
  }, [exchangeRates]);

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
          type="number"
          name="amount"
          id="amount"
          className="border"
          value={userInput.amount}
        />
        <div className="flex flex-row gap-3">
          <CurrDropdown userInput={userInput} handleChange={handleChange} />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            getData();
          }}
          className="border cursor-pointer"
        >
          Get exchange rate
        </button>

        <p className="text-center border-dashed border p-2">
          {conversionFactor
            ? (conversionFactor * userInput.amount).toFixed(2)
            : "Result will appear here"}
        </p>
      </form>
    </main>
  );
};
