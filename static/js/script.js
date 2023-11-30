var config = {
  attributionControl: false,
};

var zoom = 7;
var lat = 2.3295;
var lng = -61.1938;

var map = L.map("map", config).setView([lat, lng], zoom);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",).addTo(map);

map
  .locate({
    setView: true,
    enableHighAccuracy: true,
  })
  .on("locationfound", (e) => {
    console.log(e);
    const marker = L.marker([e.latitude, e.longitude]).bindPopup(
      "Você está aqui !"
    );
    const circle = L.circle([e.latitude, e.longitude], e.accuracy / 2, {
      weight: 2,
      color: "red",
      fillColor: "red",
      fillOpacity: 0.1,
    });
    map.addLayer(marker);
    map.addLayer(circle);
  })
  .on("locationerror", (e) => {
    console.log(e);
    alert("Location access denied.");
  });
