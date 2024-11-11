function init(){
  alert('it works');
  var el = document.getElementById('canvas');
  var myLocation = new google.maps.LatLng(51.5072, -0.1276);
  var mapOptions = {
    center: myLocation,
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_CENTER
    }
  };
  
  var myMap = new google.maps.Map(el, mapOptions);
}

google.maps.event.addDomListener(window, 'load', init);