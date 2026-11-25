import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import './WeatherApp.css';
import { useState } from "react";

export default function WeatherApp(){

    let [weatherInfo, setWeatherInfo] = useState({
        city:"",
        temp:"",
        maxTemp:"",
        minTemp:"",
        humidity:"",
        weather:"",
        feelsLike:"",
    });

    let updateInfo = (result)=>{
        setWeatherInfo(result);
    }

    return(
        <div className="WeatherApp">
            <h2>Weather App</h2>
            <SearchBox updateInfo = {updateInfo}/> 
            {weatherInfo.city && <InfoBox info={weatherInfo}/>}
              
        </div>

    );
}