import { currSymbolData } from "../utils/currencySymbolData";
export const CurrDropdown = ({ handleChange, userInput }) => {
  return (
    <>
      <label htmlFor="fromCurr">From currency:</label>
      <br />
      {userInput.fromCurr && (
        <img src={`https://flagsapi.com/${userInput.fromCurr}/flat/64.png`} />
      )}
      <select
        onChange={(e) => {
          handleChange(e);
        }}
        name="fromCurr"
        id="fromCurr"
      >
        <option value="From Currency">From Currency</option>
        {currSymbolData.map((symbol, index) => {
          return (
            <option key={index} value={symbol.countryCode}>
              {symbol.name} {symbol.countryCode}
            </option>
          );
        })}
      </select>
      <br />
      <label htmlFor="toCurr">From currency:</label>
      <br />
      {userInput.toCurr && (
        <img src={`https://flagsapi.com/${userInput.toCurr}/flat/64.png`} />
      )}
      <select
        onChange={(e) => {
          handleChange(e);
        }}
        name="toCurr"
        id="toCurr"
      >
        <option value="To currency">To Currency</option>
        {currSymbolData.map((symbol, index) => {
          return (
            <option key={index} value={symbol.countryCode}>
              {symbol.name} {symbol.countryCode}
            </option>
          );
        })}
      </select>
    </>
  );
};
