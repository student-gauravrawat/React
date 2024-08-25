import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


export default function WeatherSearch({updateInfo}){
    let[city, setCity]= useState("")
    let[error, setError] = useState(false)

    let URL = `https://api.openweathermap.org/data/2.5/weather`;
    let apiKey= "6b8930efe3c87a25f80aae7aa37ca5a7";

    let getWeatherInfo = async()=>{

        try{

            let response = await fetch(`${URL}?q=${city}&appid=${apiKey}&units=metric`)
            let jsonResponse = await response.json()
            
            let result ={
                city:city,
                temp: jsonResponse.main.temp,
                tempMin:jsonResponse.main.temp_min,
                tempMax:jsonResponse.main.temp_max,
                humidity:jsonResponse.main.humidity,
                feelsLike:jsonResponse.main.feels_like,
                weather:jsonResponse.weather[0].description
            }
            console.log(result)
            return result;
        }

        catch(err){
            throw(err)
        }
    }


   let handleChange = (event)=>{
            setCity(event.target.value)
   }

   let handleSubmit= async (event)=>{

    try{
         event.preventDefault()
        console.log(city)
        setCity('')
        let newInfo = await getWeatherInfo()
        updateInfo(newInfo)
    }
    catch(err){
     setError(true)
 
    }
       
   }

    return(
        <div style={{marginBottom:'25px'}}>

            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/><br /><br />
            <Button variant="contained" type='submit' >Send</Button>

            {error && <p style={{fontWeight:'bold',color:'red'}}>No such place exists!</p>}
            </form>
        </div>
    )
}