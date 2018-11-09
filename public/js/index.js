var database = firebase.database();
$(document).ready(function () {
	$('.home').delay('6000').fadeIn('slow');
	var boxLogo = $("#box-logo");
	boxLogo.animate({
		height: '300px'
	}, "slow");
	boxLogo.animate({
		width: '300px',
		opacity: '0.4'
	}, "slow");
	boxLogo.animate({
		height: '50px',
		width: '50px',
		opacity: '0.6'
	}, "slow");
	boxLogo.animate({
		width: '300px',
		opacity: '1.0'
	}, "slow");
	boxLogo.animate({
		width: '300px',
		height: '300px',
		opacity: '1.0'
	}, "slow");
	boxLogo.animate({
		opacity: '0.6'
	}, "slow");
	boxLogo.animate({
		opacity: '1.0'
	}, "slow");

	$("#login").click(function () {
		event.preventDefault();
		var email = $("#sign-in-email").val();
		var password = $("#sign-in-password").val();
		firebase.auth().signInWithEmailAndPassword(email, password).then(function (response) {
			window.location = "home.html?id=" + response.user.uid;
		}).catch(function (error) {
			var errorCode = error.code;
			var errorMessage = error.message;
			console.log(errorCode, errorMessage);
		});

	});
});