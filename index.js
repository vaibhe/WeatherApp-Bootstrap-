


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '042d6242ecmsha504c48e072674cp199cb2jsneba380cfee3e',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

function formatUnixTimestamp(unix_timestamp) {
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds
    var date = new Date(unix_timestamp * 1000);
  
    // Hours part from the timestamp
    var hours = date.getHours();
  
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
  
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();
  
    // Will display time in 10:30:23 format
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
  
    return formattedTime;
  }

const getWeather = (city) =>{
	cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {
	console.log(response)

	temp.innerHTML= response.temp + " °C"
	feels_like.innerHTML= response.feels_like + " °C"
	humidity.innerHTML= response.humidity + " %"
	min_temp.innerHTML= response.min_temp + " °C"
	max_temp.innerHTML= response.max_temp + " °C"
	wind_speed.innerHTML= response.wind_speed + " km/hr"
	wind_degrees.innerHTML= response.wind_degrees + " °C"
	var sunrisetime =  formatUnixTimestamp(response.sunrise)
	var sunsettime =   formatUnixTimestamp(response.sunset)
	sunrise.innerHTML= sunrisetime + " am"
	sunset.innerHTML=  sunsettime + " pm"
	
})
	

	.catch (err => console.error(err));
}

submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather(city.value)
})






