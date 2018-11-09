var database = firebase.database();
var USER_ID = window.location.search.match(/\?id=(.*)/)[1];

function newText() {
	window.location = "new_feed.html?id=" + USER_ID;
}

$(document).ready(function () {
	database.ref("user").once("value")
		.then(function (snapshot) {
			snapshot.forEach(function (childSnapshot) {
				var childKey = childSnapshot.key;
				var childData = childSnapshot.val();

				database.ref('/invates/' + childKey).once('value').then(function (snapshot) {
					snapshot.forEach(function (childSnapshot) {
						var childKey = childSnapshot.key;
						var childData = childSnapshot.val();
						var members = childData.members;
						var title = childData.title;
						var content = childData.content;
						var hora = childData.hora;

						//Chamando função que coloca os invites do firebase no html
						createInvites(childKey, title, content, members, hora);
					});
				})
			});
		})


	// função de criar posts no HTMl
	function createInvites(key, title, content, members, hora) {
		$(".box-list").append(`
		<div class='box-post d-flex mb-3 '>
			<div class='mr-auto'>
			<h4>${title}</h4>
			<span class='box-msg' data-newedit-id=${key}>${content}</span></br></br>
			<p>Compartilhado com: <b>${members}</b></p>
			<p>hora: <b>${hora} hs</b></p>
			</div><button type='button' class='btn btn-outline-warning btn-post' data-posts-id=${key}>Deletar</button><button type='button' class='btn btn-outline-warning btn-post ml-2' data-edit-id=${key}>Editar</button></div>`);

		//Apagar posts
		$(`button[data-posts-id="${key}"]`).click(function () {
			database.ref("invates/" + USER_ID + "/" + key).remove();
			$(this).parent().remove();
		})

		//Editar posts
		$("button[data-edit-id=" + key + "]").click(function () {
			$("span[data-newedit-id=" + key + "]").append("<div><input type='text' class='form-control box-input new-post' placeholder='" + content + "'><button type='button' class='editar btn btn-outline-warning ml-2' data-btedit-id=" + key + ">Finalizar Edição</button></div>");

			//salvar edição
			$("button[data-btedit-id=" + key + "]").click(function () {
				var newText = $(".new-post").val();
				$("span[data-newedit-id=" + key + "]").html(newText);
				database.ref("invates/" + USER_ID + "/" + key).update({
					content: newText
				});
				$(this).parent().remove();
			})
		})
	}
});