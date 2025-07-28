/*----------------------------------------------------*/
/*  Google map js
/*----------------------------------------------------*/

if ($("#mapBox2").length) {
  var $lat = $("#mapBox2").data("lat");
  var $lon = $("#mapBox2").data("lon");
  var $zoom = $("#mapBox2").data("zoom");
  var $marker = $("#mapBox2").data("marker");
  var $info = $("#mapBox2").data("info");
  var $markerLat = $("#mapBox2").data("mlat");
  var $markerLon = $("#mapBox2").data("mlon");
  var map = new GMaps({
    el: "#mapBox2",
    lat: $lat,
    lng: $lon,
    scrollwheel: false,
    scaleControl: true,
    streetViewControl: false,
    panControl: true,
    disableDoubleClickZoom: true,
    mapTypeControl: false,
    zoom: $zoom,
  });

  map.addMarker({
    lat: $markerLat,
    lng: $markerLon,
    icon: $marker,
    infoWindow: {
      content: $info,
    },
  });
}
