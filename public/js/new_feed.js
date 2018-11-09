var database = firebase.database();
var USER_ID = window.location.search.match(/\?id=(.*)/)[1];
now = new Date;

function limite_textarea(valor) {
  var quant = 500;
  var total = valor.length;
  resto = quant - total;
  document.getElementById('cont').innerHTML = resto;
  if (resto == 20) {
    document.getElementById("id-content").disabled = true;
    document.getElementById("id-content").style.backgroundColor = "red";
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


    var newPostKey = postFromDB.key;
    document.getElementById("id-title").value = "";
    document.getElementById("id-content").value = "";
    document.getElementById("id-members").value = "";
  });
});