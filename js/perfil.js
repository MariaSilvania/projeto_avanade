var database = firebase.database();
var USER_ID = window.location.search.match(/\?id=(.*)/)[1];
$(document).ready(function () {
	//	pegando o Nome do usuário
	database.ref("user/" + USER_ID).once("value")
		.then(function (snapshot) {
			var userInfo = snapshot.val();
			$(".user-name").text(userInfo.name);
		})
	//  Pegando usuários do firebase
	// database.ref("user").once("value")
	// 	.then(function (snapshot) {
	// 		snapshot.forEach(function (childSnapshot) {
	// 			var childKey = childSnapshot.key;
	// 			var childData = childSnapshot.val();
	// 			createUsers(childData.name, childKey);
	// 	});
	// })
});