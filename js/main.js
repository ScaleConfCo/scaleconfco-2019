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
    };
    drawSVG( '.svg-name path' );
});

function initMap() {
    var rutan = {lat: 6.264524, lng: -75.566549};
    var map = new google.maps.Map(document.querySelector('#map'), {
        zoom: 17,
        center: rutan
    });
    var marker = new google.maps.Marker({
        position: rutan,
        map: map
    });
}