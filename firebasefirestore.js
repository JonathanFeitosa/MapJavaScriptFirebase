var ajax;

$(document).ready(function () {
  ajax = iniciaAjax();
  lerDadosMakers();

}
);

function iniciaAjax() {
  var req;

  try { req = new ActiveXObject("Microsoft.XMLHTTP"); }
  catch (e) {
    try { req = new ActiveXObject("Msxml2.XMLHTTP"); }
    catch (ex) {
      try { req = new XMLHttpRequest(); }
      catch (exc) {
        alert("Esse browser não tem recursos para uso do Ajax!");
        req = null;
      }
    }
  }
  return req;
}

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
var linksativos = [];
var makersativos = [];
var db = firebase.firestore();

function pegarLinkInfo() {
  db.collection("corridas").get().then((querySnapshot) => {

    querySnapshot.forEach(function (doc) {

      if (linksativos.includes(doc.data().link)) { // SE JÁ TIVER O LINK NO FIREBASE = ATUALIZA

        //         linksativos.slice(doc.data().link) // Remove do Loop

        const linkUser = {
          hora: doc.data().hora,
          link: doc.data().link
        } // Pegar Hora e Link do Firebase
        readLinkHTML(linkUser);

      } else { // SE NÃO TIVER O LINK NO FIREBASE = ADICIONA

        linksativos.push(doc.data().link) // Adiciona 

      }
      //    if(doc.data().hora.includes(doc.data().link))
      //createMakers(infoUser)
    });
  });
}

function readLinkHTML(linkUser) { // Pegar o Link do HTML
  if (ajax) {
    ajax.open("GET", "convertJSON.php?jLink=" + linkUser.link, true);
    ajax.onreadystatechange = function () {
      if (ajax.readyState == 4) {
        if (ajax.status == 200) {
          atualizarJSONinHTML(JSON.parse(ajax.responseText));
        } else {
          console.log("Erro readLinkHTML: " + ajax.statusText);
        }
      }
    }
    ajax.send(null);
  }
  else {
    console.log("O Ajax nao funcionou corretamente");
  }
}


/*
Criar variavel : Lat, longe, placa.
placa != variavel.placa
apaga o antigo e atualiza.
*/
function atualizarJSONinHTML(jsonJFS) { // Pegar o que eu preciso do JSON !!!!
  
  const infoUser = {
    latitude: jsonJFS.routelines.locations[0].latitude,
    longitude: jsonJFS.routelines.locations[0].longitude,
    imageUrl: jsonJFS.vehicle.imageUrl,
    plateVehicle: jsonJFS.vehicle.licensePlate,
    maker: ""
  }
  createMakers(infoUser);
}

function createMakers(infoUser) {

/*
"Blue Whale".indexOf("Blue") !== -1; // true
"Blue Whale".indexOf("Bloe") !== -1; // false
*/
  if (makersativos.plateVehicle.includes(infoUser.plateVehicle)){
   // if(makersativos.plateVehicle.indexOf(infoUser.plateVehicle) !== -1)
    if(makersativos.longitude != infoUser.longitude || makersativos.latitude != infoUser.latitude){
      makersativos.maker.setMap(null);
    }
  }else{
    makersativos.push(infoUser)
  }
  makersativos.maker = new google.maps.Marker({
    position: new google.maps.LatLng(infoUser.latitude, infoUser.longitude),
    map: map,
    icon: {
      url: infoUser.imageUrl, // url
      scaledSize: new google.maps.Size(37, 37), // scaled size
      origin: new google.maps.Point(0, 0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    }
  })

}