var USER_ID = window.location.search.match(/\?id=(.*)/)[1];

function CarregarPerfil() {
	window.location = "perfil.html?id=" + USER_ID;
}

function carregarFeed() {
	window.location = "home.html?id=" + USER_ID;
}

function carregarRanking() {
	window.location = "ranking.html?id=" + USER_ID;
}

function carregarContatos() {
	window.location = "card.html?id=" + USER_ID;
}