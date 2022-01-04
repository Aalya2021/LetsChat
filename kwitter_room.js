  var firebaseConfig = {
      apiKey: "AIzaSyCuB5eofPJeHe-R9Y3sqHz8Ucwdu5Vy8aE",
      authDomain: "lets-chat2022.firebaseapp.com",
      databaseURL: "https://lets-chat2022-default-rtdb.firebaseio.com",
      projectId: "lets-chat2022",
      storageBucket: "lets-chat2022.appspot.com",
      messagingSenderId: "921681936336",
      appId: "1:921681936336:web:a485811203519d6cacc3d5"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    function addRoom()
    {
          room_name = document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });
          localStorage.setItem("room_name", room_name);

          window.location = "kwitter_page.html"
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
        window.location = "index.html"
}