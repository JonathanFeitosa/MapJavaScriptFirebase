const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -3.0790187, lng: -60.0119109},
    zoom: 13.4
  });
  createMakers();
}
function createMakers(){
    var maker = new google.maps.Marker({
        position: new google.maps.LatLng(-3.065350, -60.009441),
        map: map,
        icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/parking_lot_maps.png"
    })

}