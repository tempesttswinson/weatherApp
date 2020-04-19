
function convert(num){
	return  Math.floor((num -273) * (9/5) +32);
}

$('#submit').click(() =>{

	// var Moment = moment.tz().format('MMMM Do YYYY, h:mm a z');

	var Moment = moment().format('MMMM Do YYYY, h:mm a');

	var display_time = $('#display_time');
	display_time.text(Moment);

	let zip = $('#zipCode').val();

	$.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=678ba9df227448b5ef0a9f4ff586b675`, ((data)=>{

		if(zip !== ''){

			var display_weather = $('#display_weather');
			console.log(data);
			$('#city').text(data.name);
			display_weather.text(convert(data.main.temp)+" F");
			$('#clouds').text(data.weather[0].description);
		}else{
			display_weather.text("Enter Zip Code");
		}

	}))
});