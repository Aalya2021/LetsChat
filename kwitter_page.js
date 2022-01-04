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

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        console.log(firebase_message_id);
                        console.log(message_data);
                        name = message_data['name'];
                        message = message_data['message'];
                        name_with_tag = "<h4>" + name + "</h4>";
                        message_with_tag = "<h4 class= 'message_h4'>" + message + "</h4>";
                        row = name_with_tag + message_with_tag
                        document.getElementById("output").innerHTML += row;
                  }
            });
      });
}
getData();

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name: user_name,
          message: msg,
    });

    document.getElementById("msg").value = "";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}