import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import NatureIcon from '@mui/icons-material/Nature';

import './InfoBox.css';

export default function InfoBox({info}){
    let hot_url = "https://images.unsplash.com/photo-1782048175799-2886b9903549?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
    let cold_url = "https://images.unsplash.com/photo-1775574993270-050296265511?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
    let rain_url = "https://images.unsplash.com/photo-1565065524861-0be4646f450b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
    let average_url = "https://images.unsplash.com/photo-1747567927551-30db9774a3c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";

    return(
        <div className='InfoBox'>
        <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={
                        (info.humidity >= 70 && info.humidity < 99 || info.weather[0].main === "Rain")?
                        rain_url: info.temp>25 ? hot_url : info.temp>14 ? average_url : cold_url
                    }
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city}&nbsp; 
                    {
                        (info.humidity >= 80 && info.humidity < 99 || info.weather[0].main === "Rain")?
                        <ThunderstormIcon/>: info.temp>25 ? <SunnyIcon/> : info.temp>14 ? <NatureIcon/> : <AcUnitIcon/>
                    }
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                    <p>Temperature: {info.temp}&deg;C</p>
                    <p>Humidity: {info.humidity}</p>
                    <p>Max temp: {info.minTemp}&deg;C</p>
                    <p>Min temp: {info.minTemp}&deg;C</p>
                    <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
                    </Typography>
                </CardContent>
        </Card>
        </div>
        </div>
    );
}