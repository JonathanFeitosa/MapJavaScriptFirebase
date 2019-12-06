$(document).ready(function() {

  console.log("Teste");
  lerDadosMakers();

});

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBEJ7WcVVlntN5gGJrLknzRms9-u-ne23g",
    authDomain: "jsafetransportation.firebaseapp.com",
    databaseURL: "https://jsafetransportation.firebaseio.com",
    projectId: "jsafetransportation",
    storageBucket: "jsafetransportation.appspot.com",
    messagingSenderId: "846435494070",
    appId: "1:846435494070:web:5d1491bbb448dd9e3fde17",
    measurementId: "G-SDRV739FXN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


var db = firebase.firestore();
function lerDadosMakers(){
  console.log("Teste");
  db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log('${doc.id} => ${doc.data()}');
    });
  });
}