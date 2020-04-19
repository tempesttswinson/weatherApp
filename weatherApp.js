
function convert(num){
	return  Math.floor((num -273) * (9/5) +32);
}
// function setWeather(){
// 	var weather =
// }

$('#submit').click(() =>{

	let zip = $('#zipCode').val();

	if (zip != "" ){
	// var Moment = moment.tz().format('MMMM Do YYYY, h:mm a z');

	var Moment = moment().format('MMMM Do YYYY, h:mm a');

	var display_time = $('#display_time');
	display_time.text(Moment);


	$.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=678ba9df227448b5ef0a9f4ff586b675`, ((data)=>{

			var display_weather = $('#display_weather');
			var weather = data.weather[0].main;
			console.log(data);
			$('#city').text(data.name);
			display_weather.text(convert(data.main.temp)+" F");
			$('#clouds').text(data.weather[0].description);

			// determines which picture to display to represent the current weather condition
			if (weather === 'Clear'){
				var img = $('<img src= "https://cdn2.iconfinder.com/data/icons/weather-collection-1/512/sunny512x512-01-128.png"></img>');
				$('.jumbotron').append(img);
			}else if (weather === 'Clouds'){
				var img = $('<img src= "https://cdn2.iconfinder.com/data/icons/weather-collection-1/512/rainnyday-128.png"></img>')
				$('.jumbotron').append(img);
			}else if (weather === 'Thunderstorm'){
				var img = $('<img src= "images/thunderstorm-01-128.png"></img>')
				$('.jumbotron').append(img);
			}else if (weather === 'Rain' || weather === 'Drizzle'){
				var img = $('<img src= "https://cdn2.iconfinder.com/data/icons/weather-collection-1/512/rainnyday-128.png"></img>')
				$('.jumbotron').append(img);
			}

	}))
	}else{
		alert("Enter Zip Code!");
	}
});