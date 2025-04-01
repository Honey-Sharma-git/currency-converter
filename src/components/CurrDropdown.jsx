import { currSymbolData } from "../utils/currencySymbolData";
export const CurrDropdown = ({ handleChange, userInput }) => {
  return (
    <div className="flex flex-row gap-3">
      <div className="flex flex-col">
        <label htmlFor="fromCurr">From currency:</label>
        <div className="flex flex-row gap-3 border">
          <figure className="w-10 aspect-square  ">
            {userInput.fromCurr && (
              <img
                src={`https://flagsapi.com/${userInput.fromCurr}/flat/64.png`}
              />
            )}
          </figure>

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
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="toCurr">From currency:</label>
        <div className="flex flex-row gap-3 border">
          <figure className="w-10 aspect-square">
            {userInput.toCurr && (
              <img
                src={`https://flagsapi.com/${userInput.toCurr}/flat/64.png`}
              />
            )}
          </figure>
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
        </div>
      </div>
    </div>
  );
};
