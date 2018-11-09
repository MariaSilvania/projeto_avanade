var database = firebase.database();
var USER_ID = window.location.search.match(/\?id=(.*)/)[1];

$(document).ready(function () {
	database.ref("user").once("value").then(function (snapshot) {
			snapshot.forEach(function (childSnapshot) {
				var childKey = childSnapshot.key;
				var childData = childSnapshot.val();
				createRanking(childData.name, childKey, childData.email);
			});
		})
})

function createRanking(name, key, email) {
	$(".box-membros").append(`
		<div class="box">
			<h4>${name}</h4>
			<h5 class="ranking">${email}</h5>
		</div>
		`);
}
