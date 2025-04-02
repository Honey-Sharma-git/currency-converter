import { useEffect, useState } from "react";
import { CurrDropdown } from "../components/CurrDropdown";
import axios from "axios";
export const Converter = () => {
  const baseURL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@";
  const [conversionFactor, setConversionFactor] = useState("");
  const [exchangeRates, setExchangeRates] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    amount: 100,
    fromCurr: "",
    toCurr: "",
    date: "",
  });

  const date = new Date();
  const currDate = date.getDate();
  const currMonth = date.getMonth();
  const currYear = date.getFullYear();
  const completeDateStr = `${currYear.toString()}-${(currMonth + 1)
    .toString()
    .padStart(2, "0")}-${currDate.toString().padStart(2, "0")}`;
  console.log(completeDateStr);

  function handleChange(e) {
    setUserInput((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }
  console.log(userInput);
  async function getData() {
    try {
      if (userInput.amount && userInput.fromCurr && userInput.toCurr) {
        const URL = userInput.date
          ? `${baseURL}${userInput.date}/v1/currencies/${userInput.fromCurr}.json`
          : `${baseURL}latest/v1/currencies/${userInput.fromCurr}.json`;

        setIsLoading(true);
        const response = await axios.get(URL);
        if (response.status === 200) {
          setExchangeRates(response.data);
        }
      }
    } catch (error) {
      console.log("Error calling Currency exchange API:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (exchangeRates) {
      setConversionFactor(
        exchangeRates[userInput.fromCurr]?.[userInput.toCurr]
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
        <div className="flex flex-row  gap-3 ">
          <label className="w-full " htmlFor="date">
            Conversion as on date:
          </label>
          <input
            className="border w-full"
            type="date"
            name="date"
            id="date"
            max={completeDateStr}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            getData();
          }}
          className="border cursor-pointer"
        >
          Convert amount
        </button>

        <p className="text-center border-dashed border p-2">
          {isLoading
            ? "Loading..."
            : conversionFactor
            ? (conversionFactor * userInput.amount).toFixed(2)
            : "Result will appear here"}
        </p>
      </form>
    </main>
  );
};
