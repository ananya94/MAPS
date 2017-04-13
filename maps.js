//$(document).ready(function(){
//function initMap() {
//        var uluru = {
//            lat: parseInt($("#location1").val()), 
//            lng: parseInt($("#location2").val())
//        };
//        var map = new google.maps.Map(document.getElementById('map'), {
//          zoom: 4,
//          center: uluru
//        });
//        var marker = new google.maps.Marker({
//          position: uluru,
//          map: map
//        });
//      }
//$("#getlocation").click(function() {        
//        initMap();
//})
//});
$(document).ready(function () {
 function initMap() {
        var uluru = {
            lat: parseInt($("#location1").val()),
            lng: parseInt($("#location2").val())
        };
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: uluru
        });
        var marker = new google.maps.Marker({
            position: uluru,
            map: map
        });
 } 

    
    $("#getlocation").click(function() {
        
        initMap();
        
    });




});
