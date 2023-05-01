import React, { useEffect, useState } from 'react'
import SimpleSlider from '../components/SimpleSlider'

// 날씨API 사용하기위해서 axios를 이용하여 작성 
// Fetch대신에 axios 사용
import axios from 'axios'
import KakaoMapComp from '../components/KakaoMapComp';
// const axios = require('axios').default;



export default function HomePage() {
  // 아래 값은 문자열로만 받아오기 때문에 loading을 쓰지 않을 예정
  // *만약 객체로 들고 온다면 반드시 loading 사용
  const [weather, setWeather] = useState("");
  const [weatherIcon, setWeatherIcon] = useState("");

  // axios를 통해 값을 받아오기 위해
  // 비동기 함수 작성(effect 안에 있거나 밖에 있어도 무관)
  // useEffect를 사용해서 실행할 때 바로 값을 가져오기 위함
  useEffect(()=>{
    async function getWeather() {
      try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=Busan&appid=2b6566e3917c241ac9d0ff5e5526430d&lang=kr');
        console.log(response);
        console.log(response.data.weather[0].main);
        console.log(response.data.weather[0].icon);
        // state에 값 지정
        setWeather(response.data.weather[0].description);
        setWeatherIcon(response.data.weather[0].icon);
      } catch (error) {
        console.error(error);
      }
    }

    getWeather();

  }, []);



  return (
    <div>
      <h3>{weather}, {weatherIcon}</h3>
      <SimpleSlider />
      <KakaoMapComp />
    </div>
  )
}