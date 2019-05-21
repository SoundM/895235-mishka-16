if (document.querySelector(".contacts__map")) {

  function initMap() {
    var uluru = {lat: 59.938749, lng: 30.323058};
    var map = new google.maps.Map(document.getElementById("google-map"), {
      zoom: 17,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: google-map,
      draggable: true,
      animation: google.maps.Animation.DROP,
      icon: {
        url: "../img/map-pin.svg",
        scaledSize: new google.maps.Size(67, 100),
        title: 'Интернет магазин "Мишка"'
      }
    });
  }

  window.addEventListener("load", initMap);
}
