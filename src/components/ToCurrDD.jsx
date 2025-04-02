import { currSymbolData } from "../utils/currencySymbolData";
export const ToCurrDD = ({
  userInput,
  handleChange,
  setCountryCode,
  countryCode,
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="toCurr">From currency:</label>
      <div className="flex flex-row gap-3 border">
        <figure className="w-10 aspect-square">
          {userInput.toCurr && (
            <img
              src={`https://flagsapi.com/${countryCode.toCountryCode}/flat/64.png`}
            />
          )}
        </figure>
        <select
          onChange={(e) => {
            handleChange(e);

            setCountryCode((prev) => {
              return {
                ...prev,
                toCountryCode:
                  e.target.options[e.target.selectedIndex].dataset.countrycode,
              };
            });
          }}
          name="toCurr"
          id="toCurr"
        >
          <option value="To currency">To Currency</option>
          {currSymbolData.map((symbol, index) => {
            return (
              <option
                data-countrycode={symbol.countryCode}
                key={index}
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
