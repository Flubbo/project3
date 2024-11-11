function init(){
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
  
  var marker = new google.maps.Marker({
    position: myLocation,
    map: myMap,
    animation: google.maps.Animation.BOUNCE,
  });
  
  var contentString = '<h2>This is the center of London</h2>';
  
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  
  google.maps.event.addListener(marker, 'mouseover', function(){
    infowindow.open(myMap, marker);
  });
}
  
google.maps.event.addDomListener(window, 'load', init);