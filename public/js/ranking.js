var database = firebase.database();
var USER_ID = window.location.search.match(/\?id=(.*)/)[1];


$(document).ready(function () {
	database.ref("user").once("value").then(function (snapshot) {
			snapshot.forEach(function (childSnapshot) {
				var childKey = childSnapshot.key;
				var childData = childSnapshot.val();
				createRanking(childData.name, childKey, childData.ranking);
			});
		})
})

function createRanking(name, key, ranking) {
	$(".ranking-info").append(`
		<div class="box">
			<h4>${name}</h4>
			<h5 class="ranking"><img src="img/medal.png" width="25px">${ranking}</h5>
		</div>
		`);
}