function initMap() {
  const tokyotower = { lat: 35.65875, lng: 139.74537 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: tokyotower,
  });
  const marker = new google.maps.Marker({
    position: tokyotower,
    map: map,
  });
  const infoWindow = new google.maps.InfoWindow({ 
    content: '<div class="sample">Tokyo Tower</div>' 
  });
  marker.addListener('click', function() { 
    infoWindow.open(map, marker); 
  });
}