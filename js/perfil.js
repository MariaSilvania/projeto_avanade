var database = firebase.database();
var USER_ID = window.location.search.match(/\?id=(.*)/)[1];

function perfil() {
	window.location = "perfil.html?id=" + USER_ID;
	console.log(USER_ID);
}
