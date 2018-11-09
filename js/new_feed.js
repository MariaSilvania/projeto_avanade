var database = firebase.database();
var USER_ID = window.location.search.match(/\?id=(.*)/)[1];

$(document).ready(function () {
  NewFeed(title, content, members);

});

function NewFeed() {
  event.preventDefault();
  var title = $("#id-title").val();
  var content = $("#id-content").val();
  var members = $("#id-members").val();

  if (content !== "") {
    var newPosts = createPost(title, content, members);

    // mostrarPost(newPosts.key);
  }
  // var filePost = document.getElementById("files").files[0];
  // if (filePost !== undefined) {
  //   photoPost(filePost);
  // }
}

function createPost(conteudoPost, conteudoTipo) {
  return database.ref("invates/" + USER_ID).push({
    title: title,
    content: content,
    members: members
  });
}

// function photoPost(filePost) {
//   var storagePost = firebase.storage().ref(USER_ID + '/photoPost/' + filePost.name);
//   storagePost.put(filePost);
//   // var pathReference = storage.ref(USER_ID + '/photoPost/' + filePost.name);
// }