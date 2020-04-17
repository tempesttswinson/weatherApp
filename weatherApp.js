

$('#submit').click(() =>{

	// var Moment = moment.tz().format('MMMM Do YYYY, h:mm a z');

	var Moment = moment().format('MMMM Do YYYY, h:mm a');

	var display_time = $('#display_time');
	display_time.text(Moment);

	let zip = $('#zipCode').val();

	$.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=678ba9df227448b5ef0a9f4ff586b675`, ((data)=>{

		var weather = data;

		if(zip !== ''){
		var display_weather = $('#display_weather');
		console.log(data);
		display_weather.text(weather.main.temp);
	}

	}))
});