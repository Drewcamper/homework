import './App.css'
import React from 'react'
import { WeatherDataPage } from './components/WeatherDataPage'
import { WeatherDataProvider } from './context/context'



function App() {

  return  ( 
    <WeatherDataProvider>
      <WeatherDataPage />
    </WeatherDataProvider>
         
  )
}


export default App