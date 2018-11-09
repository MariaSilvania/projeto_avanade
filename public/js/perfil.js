var database = firebase.database();
var USER_ID = window.location.search.match(/\?id=(.*)/)[1];


$(document).ready(function () {
	//	pegando o Nome do usuário
	database.ref("user/" + USER_ID).once("value")
		.then(function (snapshot) {
			var userInfo = snapshot.val();
			var name = userInfo.name;
			var email = userInfo.email;
			var arquivados = userInfo.invites_arquivados;
			var enviados = userInfo.invites_enviados;
			var recebidos = userInfo.invites_recebidos;
			var notificacoes = userInfo.notificacoes;
	createPerfil(name, email, arquivados, recebidos, notificacoes, enviados);
		})
})

function createPerfil(name, email, arquivados, recebidos, notificacoes, enviados) {
	$(".box-perfil").append(`
		<div class="box">
			<h5 class="text">${name}</h5>
			<h5 class="text">${email}</h5>
			</br>
			<p>Notificações: ${notificacoes}<p/>
			<p>Invite Enviados: ${enviados}<p/>
			<p>Invite recebidos: ${recebidos}<p/>
			<p>Invite arquivados: ${arquivados}<p/>
		</div>
		`);
}