
let sliderr = document.querySelector('#slider');
console.log(sliderr);
let offset = 0;

let dotttOne = document.querySelector('#dotone');
let dotttTwo = document.querySelector('#dottwo');
let dotttThree = document.querySelector('#dotthree');

 dotttOne.addEventListener('click', movess1);
 dotttTwo.addEventListener('click', movess2);
 dotttThree.addEventListener('click', movess3);

 function movess1() {
    sliderr.style.left = 0 + '%';
   
}

function movess2() {
    sliderr.style.left = -137 + '%';
      
}

function movess3() {
    sliderr.style.left = -274 + '%';
       
}

//////////



var geocoder;

var map;

var infowindow = new google.maps.InfoWindow();

var marker;



function initialize() {

    geocoder = new google.maps.Geocoder();
    
    var latlng = new google.maps.LatLng(50.450070, 30.523268);
    
    var mapOptions = {
    
    zoom: 16,
    
    center: latlng,
    
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    
    }
    
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    
    }
/////////