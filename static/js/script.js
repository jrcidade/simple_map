var config = {
  attributionControl: false,
};

var zoom = 7;
var lat = 2.3295;
var lng = -61.1938;

var map = L.map("map", config).setView([lat, lng], zoom);

L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}.png",).addTo(map);
