import { useCallback } from "react";
import { useContext } from "react";
import { WeatherDataContext } from "../context/context";
import { fetchWeatherData } from "../services/api";


export const SearchBox = () => {
  
  const { city, setCity, setWeatherData, setError, setErrorCodeNumber } = useContext(WeatherDataContext);

  const handleInputKeyPress = useCallback((event) => {
    if (event.key === "Enter") {
      fetchWeatherData(city)
        .then((data) => {
          console.log(data);
          setWeatherData(data);
          setCity("");
        })
        .catch((err) => {
          setErrorCodeNumber(err.status);
          setError(err.message);
        });
    }
  }, [city, setCity, setError, setErrorCodeNumber, setWeatherData]);

  return (
    <div className="conatiner">
      <input
        className="input"
        placeholder="Enter City"
        onChange={(e) => setCity(e.target.value)}
        value={city}
        onKeyPress={handleInputKeyPress}
      />
    </div>
  );
};
