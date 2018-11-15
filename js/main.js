window.addEventListener("load", function(event) {
    function drawSVG( selector ) {
        var paths = document.querySelectorAll( selector );
        paths.forEach(path => {
            var length = path.getTotalLength();
            path.style.transition = path.style.WebkitTransition = 'none';
            path.style.strokeDasharray = length + ' ' + length;
            path.style.strokeDashoffset = length;
            path.getBoundingClientRect();
            path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 20s ease-in-out';
            path.style.strokeDashoffset = '0';
        });
    }
    drawSVG( 'header.welcome .svg-name path' );
});

(function () {
    var nav_toggle = document.querySelector('.nav-toggle');
    var nav = document.querySelector('.nav');
    nav_toggle.addEventListener('click', function(e) {
        this.classList.toggle('opened');
        nav.classList.toggle('show');
    });
})();

function showMore(selfId, id) {
    document.getElementById(selfId).style.display = "none";
    document.getElementById(id).style.display = "block";
}
function showLess(selfId, id) {
    document.getElementById(selfId).style.display = "none";
    document.getElementById(id).style.display = "block";
}

function initMap() {
    var markers = [
        {latlng: {lat: 6.264524, lng: -75.566549}, title: 'RutaN Medellin', address: "Calle 67 Nº 52-20"},
        {latlng: {lat: 6.208972, lng: -75.5657422}, title: 'Diez Hotel', address: "Calle 10 A Nº 34 - 11"}
    ];
    
    var map = new google.maps.Map(document.querySelector('#map'), {
        zoom: 13,
        center: {lat: 6.238385, lng: -75.5702787},
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false,
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER
        }
    });

    markers.forEach(function(marker) {
        var element = new google.maps.Marker({
            position: marker.latlng,
            map: map,
            title: marker.title
        });
        var windowContent = new google.maps.InfoWindow({ content: '<div class="map-window"><p class="map-title">' + marker.title + '</p><p>' + marker.address + '</p></div>' });
        element.addListener('click', function() {
            windowContent.open(map, element);
        });
    });
}

initMap();