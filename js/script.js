var map;
var allMakers = [
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
    lat: -41.288739,
    lng: 174.777235,
    title: 'Civic Square',
    description:'Meh she aight',
    openingHours: {
        Monday: '9am - 5pm',
        Tuesday: '9am - 5pm'
    }
  },
  {
    id:3,
    lat: -41.292262,
    lng: 174.781666,
    title: 'Mama Brown',
    description:'She got some chicken',
    openingHours: {
        Wednesday: '11am - 11pm',
        Thursday: '11am - 11pm'
    }
  },
  {
    id:4,
    lat: -41.288795,
    lng: 174.777211,
    title: 'Wellington Hospital',
    description:'My second home',
    openingHours: {
        Monday: '9am - 5pm',
        Tuesday: '9am - 5pm'
    }
  },
  {
    id:5,
    lat: -41.259378,
    lng: 174.784614,
    title: "Larissa's House",
    description: "My boos house",
    openingHours: {
        Monday: '9am - 5pm',
        Tuesday: '9am - 5pm'
    }
  },
  {
    id:6,
    lat: -41.294975,
    lng: 174.783847,
    title: "YOOBEEEEEE",
    description: "Schools aight I guess",
    openingHours: {
        Monday: '9am - 5pm',
        Tuesday: '9am - 5pm'
    }
  }
];

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -41.286461, lng: 174.776230},
          zoom: 13,
          backgroundColor: '#48dbfb',
          styles: [
            {
              featureType: 'water',
              stylers: [
                {color: "#00a8ff"}
              ]
            },
            {
              featureType: 'road',
              stylers: [
                {color: "#bdc3c7"}
              ]
            },
            {
              featureType: 'road',
              elementType: 'labels',
              stylers: [
                {color: "#e67e22"}
              ]
            },
          ]
        });

        for (var i = 0; i < allMakers.length; i++) {
          var marker = new google.maps.Marker({
            position: {
              lat: allMakers[i].lat,
              lng: allMakers[i].lng
            },
            map: map,
            animation: google.maps.Animation.DROP,
            icon: 'images/marker.png',
            title: allMakers[i].title
          });
          addClickEventToMarker(marker);
        }

        var infobox;
        function addClickEventToMarker(singleMarker) {

          if(infobox){
            infobox.close();
          }

          var infobox = new google.maps.InfoWindow();
          google.maps.event.addListener(singleMarker, 'click', function(){
            infobox.setContent('<div><h3>'+singleMarker.markerTitle +'</h3></div>');
            infobox.open(map, singleMarker);
          })
        }
}

google.maps.event.addDomListener(window, 'load', initMap);
