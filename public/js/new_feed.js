var database = firebase.database();
var USER_ID = window.location.search.match(/\?id=(.*)/)[1];
now = new Date;

function limite_input(valor) {
  var quant = 80;
  var total = valor.length;
  resto = quant - total;
  document.getElementById('cont_input').innerHTML = resto;
  if (resto <= 0) {
    document.getElementById("id-title").style.backgroundColor = "red";
  } else {
    document.getElementById("id-title").style.backgroundColor = "#fff";
  }
}

function limite_textarea(valor) {
  var quant = 500;
  var total = valor.length;
  resto = quant - total;
  document.getElementById('cont').innerHTML = resto;
  if (resto <= 0) {
    document.getElementById("id-content").style.backgroundColor = "red";
  } else {
    document.getElementById("id-content").style.backgroundColor = "#fff";
  }
}

$(document).ready(function () {

  $("#id_compartilhar").click(function (event) {
    event.preventDefault();
    var title = document.getElementById("id-title").value;
    var content = document.getElementById("id-content").value;
    var members = document.getElementById("id-members").value;
    var hora = now.getHours() + ":" + now.getMinutes();

    if (title != "" || content != "" || members != "") {
      var postFromDB = database.ref("invates/" + USER_ID).push({
        title: title,
        content: content,
        members: members,
        hora: hora
      });
    }
    document.getElementById("id-title").value = "";
    document.getElementById("id-content").value = "";
    document.getElementById("id-members").value = "";
  });
});