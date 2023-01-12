const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2460d06869msh717c781ec46c451p10c228jsn871e99917d2a',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

// fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

const getWeather = (city) => {
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			cloud_pct.innerHTML = response.cloud_pct
			temp.innerHTML = response.temp
			temp2.innerHTML = response.temp
			// feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			humidity2.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed
			wind_speed2.innerHTML = response.wind_speed
			wind_degrees.innerHTML = response.wind_degrees
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset
		})
		.catch(err => console.error(err));
}
// for Delhi
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		delhi_temp.innerHTML = response.temp
		delhi_humidity.innerHTML = response.humidity
		delhi_min_temp.innerHTML = response.min_temp
		delhi_max_temp.innerHTML = response.max_temp
		delhi_wind_speed.innerHTML = response.wind_speed
		delhi_wind_degrees.innerHTML = response.wind_degrees
		delhi_sunrise.innerHTML = response.sunrise
		delhi_sunset.innerHTML = response.sunset
	})
	.catch(err => console.error(err));

// for Banglore
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		Banglore_temp.innerHTML = response.temp
		Banglore_humidity.innerHTML = response.humidity
		Banglore_min_temp.innerHTML = response.min_temp
		Banglore_max_temp.innerHTML = response.max_temp
		Banglore_wind_speed.innerHTML = response.wind_speed
		Banglore_wind_degrees.innerHTML = response.wind_degrees
		Banglore_sunrise.innerHTML = response.sunrise
		Banglore_sunset.innerHTML = response.sunset
	})
	.catch(err => console.error(err));

// for Chennai
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		Chennai_temp.innerHTML = response.temp
		Chennai_humidity.innerHTML = response.humidity
		Chennai_min_temp.innerHTML = response.min_temp
		Chennai_max_temp.innerHTML = response.max_temp
		Chennai_wind_speed.innerHTML = response.wind_speed
		Chennai_wind_degrees.innerHTML = response.wind_degrees
		Chennai_sunrise.innerHTML = response.sunrise
		Chennai_sunset.innerHTML = response.sunset
	})
	.catch(err => console.error(err));

// for Mumbai
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		Mumbai_temp.innerHTML = response.temp
		Mumbai_humidity.innerHTML = response.humidity
		Mumbai_min_temp.innerHTML = response.min_temp
		Mumbai_max_temp.innerHTML = response.max_temp
		Mumbai_wind_speed.innerHTML = response.wind_speed
		Mumbai_wind_degrees.innerHTML = response.wind_degrees
		Mumbai_sunrise.innerHTML = response.sunrise
		Mumbai_sunset.innerHTML = response.sunset
	})
	.catch(err => console.error(err));

// for Pune
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Pune', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		Pune_temp.innerHTML = response.temp
		Pune_humidity.innerHTML = response.humidity
		Pune_min_temp.innerHTML = response.min_temp
		Pune_max_temp.innerHTML = response.max_temp
		Pune_wind_speed.innerHTML = response.wind_speed
		Pune_wind_degrees.innerHTML = response.wind_degrees
		Pune_sunrise.innerHTML = response.sunrise
		Pune_sunset.innerHTML = response.sunset
	})
	.catch(err => console.error(err));



submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Delhi")