
$('#submit').click(() =>{

	var Moment = moment.tz().format('MMMM Do YYYY, h:mm a z');

	var display = $('#display');
	display.text(Moment);
});