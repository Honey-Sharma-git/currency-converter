import { currSymbolData } from "../utils/currencySymbolData";
export const FromCurrDD = ({
  userInput,
  handleChange,
  setCountryCode,
  countryCode,
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="fromCurr">From currency:</label>
      <div className="flex flex-row gap-3 border">
        <figure className="w-10 aspect-square  ">
          {userInput.fromCurr && (
            <img
              src={`https://flagsapi.com/${countryCode.fromCountryCode}/flat/64.png`}
            />
          )}
        </figure>

        <select
          onChange={(e) => {
            handleChange(e);
            //For flagsapis that takes country code instead of currency code
            setCountryCode((prev) => {
              return {
                ...prev,
                fromCountryCode:
                  e.target.options[e.target.selectedIndex].dataset.countrycode,
              };
            });
          }}
          name="fromCurr"
          id="fromCurr"
        >
          <option value="From Currency">From Currency</option>
          {currSymbolData.map((symbol, index) => {
            return (
              <option
                key={index}
                data-countrycode={symbol.countryCode}
                value={symbol.currencyCode.toLowerCase()}
              >
                {symbol.name} {symbol.countryCode}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};
