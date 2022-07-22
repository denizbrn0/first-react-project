import styled from "styled-components";
import "./index.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Veri from "./veri";

const Title = styled.h1`
  color: red;
`;

function App() {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState("ankara");
  const key = "asdasd";

  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&appid=" +
            key +
            "&units=metric"
        );
        setWeather(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
  }, [city]);

  return (
    <>
      <div className="flex justify-center py-[15%]">
        <div className="mb-3 xl:w-96">
          <input
            onChange={(e) => {
              setCity(e.target.value);
            }}
            type="text"
            className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            id="exampleFormControlInput1"
            placeholder={city != "" ? city : "City name for weather"}
          />
          {weather && <Veri hava={weather} city={city} />}
        </div>
      </div>
    </>
  );
}

export default App;
