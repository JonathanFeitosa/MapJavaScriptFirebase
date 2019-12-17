
$(document).ready(function() {
  lerDadosMakers();

}
);

  

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
    db.collection("teste").get().then((querySnapshot) => {
      querySnapshot.forEach(function(doc) {

        const infoUser = {

          latitude: doc.data().routelines.locations[0].latitude,
          longitude: doc.data().routelines.locations[0].longitude,
          imageUrl: doc.data().vehicle.imageUrl
        }

    //    console.log(doc.id, " => ", doc.data().routelines.locations[0].latitude);
        createMakers(infoUser)

    });
  });
  
function createMakers(infoUser){

  var maker = new google.maps.Marker({
        position: new google.maps.LatLng(infoUser.latitude, infoUser.longitude),
        map: map,
        icon: {
          url: infoUser.imageUrl, // url
          scaledSize: new google.maps.Size(37, 37), // scaled size
          origin: new google.maps.Point(0,0), // origin
          anchor: new google.maps.Point(0, 0) // anchor
        }
  })
}


}