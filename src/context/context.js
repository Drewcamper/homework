import React, { createContext, useState } from "react";

export const WeatherDataContext = createContext()


export const WeatherDataProvider = ({children}) => {
    const [weatherData, setWeatherData] = useState()
    const [city, setCity] = useState('') 
    const [errorCodeNumber, setErrorCodeNumber] = useState()
    const [error, setError] = useState('')
    
    return (
      <WeatherDataContext.Provider value={{weatherData, setWeatherData, city, setCity, errorCodeNumber, setErrorCodeNumber, error, setError}}>
        {children}
      </WeatherDataContext.Provider>
    )
  }
