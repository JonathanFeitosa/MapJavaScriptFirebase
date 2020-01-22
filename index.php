<!DOCTYPE html>
  <head>
    <title>Simple Map</title>
    <meta name="viewport" content="initial-scale=1.0">
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="style.css">


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

    <title>Safe Transportation</title>

  </head>
  <body>
    
    <div id="map"></div>

    <!--  Firebase -->
    <script src="https://www.gstatic.com/firebasejs/7.5.0/firebase-app.js"></script>
    <!--  Firebase Firestore -->
    <script src="https://www.gstatic.com/firebasejs/7.5.0/firebase-firestore.js"></script>

    <script type="text/javascript" src="map.js"></script>

    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBEJ7WcVVlntN5gGJrLknzRms9-u-ne23g&callback=initMap" async defer></script>
    
    <script type="text/javascript" src="firebasefirestore.js"></script>

    <script type="text/javascript" src="create_service.js"></script>

    <p>Count numbers: <output id="result"></output></p>
    <button onclick="startWorker()">Start Worker</button>
    <button onclick="stopWorker()">Stop Worker</button>

  </body>
</html>