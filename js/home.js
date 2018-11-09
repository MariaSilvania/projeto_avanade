var database = firebase.database();
var USER_ID = window.location.search.match(/\?id=(.*)/)[1];

function newText() {
	window.location = "new_feed.html?id=" + USER_ID;
	console.log(USER_ID);
}
