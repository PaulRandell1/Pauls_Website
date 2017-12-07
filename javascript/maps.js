function initMap() {
        var uluru = {lat: 52.6291319724, lng: -1.1397671492};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
