import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "f869ae35ef371597832065b1b8d67007";

    let getWeatherInfo = async()=> {
        let response = await fetch(`${API_URL}?q=${encodeURIComponent(city.trim())}&appid=${API_KEY}&units=metric`);
        if (!response.ok) {
        throw new Error("Failed to fetch weather information");
        }
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
            city:jsonResponse.name,
            temp:jsonResponse.main.temp,
            maxTemp:jsonResponse.main.temp_max,
            minTemp:jsonResponse.main.temp_min,
            humidity:jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description,
            weather_arr:jsonResponse.weather,
        }
        return result;
    }

    let handleChange = (evt)=>{
        setCity(evt.target.value);
    }

    let handleSubmit = async (evt)=>{
            evt.preventDefault();
        try{
            let newinfo = await getWeatherInfo();
            updateInfo(newinfo);
            setCity("");
            setError(false);
        }catch(err){
            updateInfo({
                city:"",
                temp:"",
                maxTemp:"",
                minTemp:"",
                humidity:"",
                weather:"",
                feelsLike:"",
            })
            setError(true);
        }

    }
    return(
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
            <TextField label="Search city" id='city' required onChange={handleChange} value={city}/>
            <br /><br />
            <Button variant="contained" type='submit'>Search</Button>
            {error && <p style={{color:"red"}}>No such place exists!</p> }
            </form>
        </div>
    );  
}