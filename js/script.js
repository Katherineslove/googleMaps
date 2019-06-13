var map;
var allMarkers = [
  {
    id:1,
    lat: -41.278454,
    lng: 174.776628,
    title: 'Wellington Beehive',
    description:'Politics are boring',
    openingHours: {
        Monday: '9am - 5pm',
        Tuesday: '9am - 5pm'
    }
  },
  {
    id:2,
    lat: -41.292262,
    lng: 174.781666,
    title: 'Mama Brown',
    description:'She got some chicken',
    openingHours: {
        Wednesday: '11am - 11pm',
        Thursday: '11am - 11pm',
    }
  },
  {
    id:3,
    lat: -41.288795,
    lng: 174.777211,
    title: 'Wellington Hospital',
    description:'My second home',
    openingHours: {
        Monday: '9am - 5pm',
        Tuesday: '9am - 5pm',
    }
  },
  {
    id:4,
    lat: -41.259378,
    lng: 174.784614,
    title: "Larissa's House",
    description: "My boos house",
    openingHours: {
        Monday: '9am - 5pm',
        Tuesday: '9am - 5pm',
    }
  },
  {
    id:5,
    lat: -41.2792,
    lng: 174.7803,
    title: "YOOBEE",
    description: "Schools aight I guess",
    openingHours: {
        Monday: '9am - 5pm',
        Tuesday: '9am - 5pm',
    }
  }
];

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -41.2792, lng: 174.7803},
          zoom: 13.5,
          backgroundColor: '#48dbfb',
          styles: [
            {
                featureType: 'water',
                stylers: [
                      { color: '#48dbfb'}
                ]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [
                    {
                        lightness: '-40'
                      }
                ]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [
                    { color: '#34495e'}
                ]
            },
            {
              featureType: 'road.highway',
              stylers: [
                  {
                      visibility: 'off'
                  }
              ]
            },
            {
                featureType: 'landscape',
                stylers: [
                   {
                       color: '#2ecc71'
                   }
                ]
            },
            {
                featureType: 'landscape.man_made',
                stylers: [
                    {
                        color: '#27ae60'
                    }
                ]
            },
            {
                featureType: 'transit',
                stylers: [
                    {
                        visibility: 'off'
                    }
                ]
            }
          ]
        });

        for (var i = 0; i < allMarkers.length; i++) {
          var marker = new google.maps.Marker({
            position: {
                lat: allMarkers[i].lat,
                lng: allMarkers[i].lng
            },
            map: map,
            animation: google.maps.Animation.DROP,
            icon: 'images/marker-red.png',
            markerTitle: allMarkers[i].title,
            markerID: allMarkers[i].id
        });
        addClickEventToMarker(marker);
    }

    var infobox;
    var firstMarker;
    var secondMarker;
    function addClickEventToMarker(singleMarker) {

      if(infobox){
        infobox.close();
    }
    infobox = new google.maps.InfoWindow();
    google.maps.event.addListener(singleMarker, 'click', function(){
      console.log('position of singleMarker is ' + singleMarker.position);
      infobox.setContent('<div><h3>'+singleMarker.markerTitle+'</h3></div>');
      // infobox.open(map, singleMarker);

      for (var i = 0; i < allMarkers.length; i++) {
          if (allMarkers[i].id === singleMarker.markerID) {
              var markerSingle = allMarkers[i];
              break;
          }
      }

      $('#details').show();
      $('#details').find('h2').text(markerSingle['title']);
      $('#details').find('p').text(markerSingle['description']);
      $('#mon').text(markerSingle['openingHours']['Monday']);
      $('#tues').text(markerSingle['openingHours']['Tuesday']);

      // singleMarker.setIcon('images/marker-green.png');

      if(firstMarker){}

          });
        }
}

google.maps.event.addDomListener(window, 'load', initMap);
