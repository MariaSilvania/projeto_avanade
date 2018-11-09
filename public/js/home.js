var database = firebase.database();
var USER_ID = window.location.search.match(/\?id=(.*)/)[1];

function newText() {
	window.location = "new_feed.html?id=" + USER_ID;
}

$(document).ready(function () {
	database.ref('/invates/' + USER_ID).once('value').then(function (snapshot) {
		snapshot.forEach(function (childSnapshot) {
			var childKey = childSnapshot.key;
			var childData = childSnapshot.val();
			var members = childData.members;
			var title = childData.title;
			var content = childData.content;
			//Chamando função que coloca os invites do firebase no html
			createInvites(childKey, title, content, members);
		});
	})
})

	// função de criar posts no HTMl
function createInvites(key, title, content, members) {
	$(".box-list").append(`
		<div class='box-post d-flex mb-3 '>
			<div class='mr-auto'>
			<h3>${title}</h3>
			<span class='box-msg' data-newedit-id=${key}>${content}</span></br></br>
			<p>Compartilhado com:</br>${members}</p>
			</div><button type='button' class='btn btn-outline-warning btn-post' data-posts-id=${key}>Deletar</button><button type='button' class='btn btn-outline-warning btn-post ml-2' data-edit-id=${key}>Editar</button></div>`);

	//Apagar posts
	$(`button[data-posts-id="${key}"]`).click(function () {
		database.ref("invates/" + USER_ID + "/" + key).remove();
		$(this).parent().remove();
	})

<<<<<<< HEAD:js/home.js
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


=======

}
>>>>>>> fa2664585adf6f6d32ba465834ecbdaa59acdbb0:public/js/home.js
