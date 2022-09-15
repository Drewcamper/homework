import React, { useState, useCallback } from 'react'
import axios from 'axios'
import './App.css'


const apiBase = process.env.REACT_APP_API_BASE
const apiKey = process.env.REACT_APP_API_KEY


function App() {

  const [weatherData, setWeatherData] = useState()
  const [city, setCity] = useState('')
  const [temperature, setTemperature] = useState()
  const [tempFeelsLike, setTempFeelsLike] = useState()
  const [windSpeed, setWindSpeed] = useState()
  const [mainDescription, setMainDescription] = useState('')

  const [codNumber, setCodNumber] = useState()

  

  const handleInputKeyPress = (event) => {if(event.key === 'Enter'){return getWeather()}}

  const searchBox = () => {
    return <div className='conatiner'>
              <input
                  className='input'
                  placeholder='Enter City'
                  onChange={e =>setCity(e.target.value)}
                  value={city}
                  onKeyPress={handleInputKeyPress}
              />
            </div>
  }

  const getWeather = useCallback(()=> {
      axios.get(`${apiBase}weather?q=${city}&units=metric&APPID=${apiKey}`).then(
        res => {
              console.log(res.data)
              setWeatherData(res.data)
              setTemperature(res.data.main.temp)
              setTempFeelsLike(res.data.main.feels_like)
              setWindSpeed(res.data.wind.speed)
              setMainDescription(res.data.weather[0].main)
              setCity('')
                }
            ).catch(err =>{
              
              setCodNumber(err.response.status)
              console.log(err.response)
              console.log(err.message)
              console.log(err.response.status)
              console.log(codNumber)
              })
              
  },[city, codNumber])
  
  
  const renderContent = () => {   
    
    // return early / early return
    if (codNumber === 404) {
      return <div className='city'>City not found!</div>
    }
    if (codNumber === 400) {  
      return <div className='city'>Please enter a city!</div>  
    }
    if (weatherData === undefined) {
      return  <div className='city'>
                  <p>Welcome to the weather app!</p>
                  <p>Enter a city to get the weather of.</p>                 
              </div>      
    } else {
      return    <div className='weather-data'>
                  <p className='city'>{weatherData.name}</p>
                  <p className='temp'>{Math.round(temperature)}ºC</p>
                  <p>Feels like {Math.round(tempFeelsLike)}ºC, and the wind speed is {Math.round(windSpeed*3.6)} km/h</p>    
                  <p className='weather'>{mainDescription}</p>
                                   
                </div>      
                
              
            }  
  }


  return  <div>
            <div>{searchBox()}</div>
            <div>{renderContent()}</div>
          </div>     
}

export default App