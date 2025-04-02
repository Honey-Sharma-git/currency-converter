import { useState } from "react";
import { ToCurrDD } from "./ToCurrDD";
import { FromCurrDD } from "./FromCurrDD";
export const CurrDropdown = ({ handleChange, userInput }) => {
  const [countryCode, setCountryCode] = useState({
    fromCountryCode: "",
    toCountryCode: "",
  });
  return (
    <div className="flex flex-row gap-3">
      <FromCurrDD
        userInput={userInput}
        handleChange={handleChange}
        setCountryCode={setCountryCode}
        countryCode={countryCode}
      />
      <ToCurrDD
        userInput={userInput}
        handleChange={handleChange}
        setCountryCode={setCountryCode}
        countryCode={countryCode}
      />
    </div>
  );
};
