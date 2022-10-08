import axios from "axios";

const apiBase = process.env.REACT_APP_API_BASE;
const apiKey = process.env.REACT_APP_API_KEY;

export const fetchWeatherData = (city) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiBase}weather?q=${city}&units=metric&APPID=${apiKey}`)
      .then((res) => {
        
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err.response);
        console.log(err.message);
        console.log(err.response.status);
      
        console.log(city);
        

        reject({ status: err.resopnse.status, message: err.message });
      });
  });
};
