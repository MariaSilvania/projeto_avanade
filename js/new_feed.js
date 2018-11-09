var database = firebase.database();
var USER_ID = window.location.search.match(/\?id=(.*)/)[1];

function NewFeed() {
  event.preventDefault();
  var title = document.getElementById("id-title").value;
  var content = document.getElementById("id-content").value;
  var members = document.getElementById("id-members").value;
  console.log(members);


  if (content !== "") {
    var newPosts = createPost(title, content, members);

    // mostrarPost(newPosts.key);
  }
  // var filePost = document.getElementById("files").files[0];
  // if (filePost !== undefined) {
  //   photoPost(filePost);
  // }
}

function createPost(title, content, members) {
  return database.ref("invates/" + USER_ID).set({
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