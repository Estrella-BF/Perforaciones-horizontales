function initMap() {
  const myLatLng = { lat: -12.0935336, lng: -77.0298038 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: myLatLng,
  });
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
  });
}

initMap();
