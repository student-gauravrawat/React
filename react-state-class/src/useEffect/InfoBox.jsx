import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

                                       
export default function InfoBox({info}){

   const INIT_URL = "https://images.unsplash.com/photo-1575214997383-a3592741c334?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

   const HOt_URL = "https://media.istockphoto.com/id/1243760572/photo/heat-wave-concrept.jpg?s=1024x1024&w=is&k=20&c=aNyp4atd-QF1Pf7PG69cP0moyao0Ip2S9iXQIq9Fxls=";

   const COLD_URL = "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

   const RAIN_URL = "https://images.unsplash.com/photo-1494007485290-ce668e189d92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHJhaW58ZW58MHx8MHx8fDA%3D";


    return(
        <div>
            
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={info.humidity>80?RAIN_URL:info.temp>15?HOt_URL:COLD_URL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperture = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempMin}</p>
          <p>Max Temp = {info.tempMax}</p>
          <p>The weather can be described as {info.weather} and feels like {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
     
    </Card>
        </div>
    )
}