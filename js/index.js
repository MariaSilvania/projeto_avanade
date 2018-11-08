var database = firebase.database();
$(document).ready(function () {
	// $("#login").click(function () {
	// 	event.preventDefault();
	// 	var email = $("#sign-in-email").val();
	// 	var password = $("#sign-in-password").val();
	// 	firebase.auth().signInWithEmailAndPassword(email, password).then(function (response) {
	// 		// window.location = "home.html?id=" + response.user.uid;
	// 	}).catch(function (error) {
	// 		var errorCode = error.code;
	// 		var errorMessage = error.message;
	// 		console.log(errorCode, errorMessage);
	// 	});

	// });
	$("#login").click(function () {
		event.preventDefault();
		var email = $("#sign-in-email").val();
		var password = $("#sign-in-password").val();
		firebase.auth().signInWithEmailAndPassword(email, password).then(function (response) {
			console.log("oi")
			// window.location = "home.html?id=" + response.user.uid;
		}).catch(function (error) {
			var errorCode = error.code;
			var errorMessage = error.message;
			console.log(errorCode, errorMessage);
		});

	});
});