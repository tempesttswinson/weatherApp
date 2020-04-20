//converts the given temperature from Kelvin into Fahrenheit 
function convert(num){
	return  Math.floor((num -273) * (9/5) +32);
}

$('#submit').click(() =>{

	let zip = $('#zipCode').val();

	//checks to make sure user has entered a value into the input field
	if (zip != "" ){
	

		$.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=678ba9df227448b5ef0a9f4ff586b675`, ((data)=>{

	            //displays the returned object to the console 
				console.log(data);

	            //sets all my variables
	            let city = data.name; 
	            let lon = data.coord.lon;           
	            let lat = data.coord.lat; 
	            let weather = data.weather[0].main;
	           	let icon = data.weather[0].icon;
	            //creates an img tag and sets its src to the url of the returned icon 
	           	let img= $('<img>').attr('src', 'http://openweathermap.org/img/wn/' + icon + '@2x.png'); 


				//grabs the elements from HTML and sets their text to the information produced from API object so that it can be displayed on the browser
				$('#city').text(data.name);
				//calls the function convert to set temp in Fahrenheit 
				$('#display_weather').text(convert(data.main.temp)+" F");
				$('#clouds').text(data.weather[0].description);
				$('#weather_pic').html(img);

				// determines which picture to display to the background according to the  current weather condition
				if (weather === 'Clear'){
					$('body').addClass('clear');
				}else if (weather === 'Clouds'){
					$('body').addClass('clouds');
				}else if (weather === 'Thunderstorm'){
					$('body').addClass('thunderstorm');
				}else if (weather === 'Rain' || weather === 'Drizzle'){
					$('body').addClass('rain');
				}

				//uses lon and lat of the zipcode that was entered to go to the location of that lat and lon api
				$.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=678ba9df227448b5ef0a9f4ff586b675&units=imperial`, ((data2)=>{

						//grabs the timezone of the lon and lat and formats it using the moment library then displays on the browser
						let datetime= moment().tz(data2.timezone).format('dddd MMMM Do YYYY, h:mm a z');
			            $('#display_time').text(datetime);
				}))
		}))
	}else{
		alert("Enter Zip Code!");
	}

		
});