$(document).ready(function() {
    
    $(".js--section-features").waypoint(function(direction) {

        $("#clone h1 img").attr("src", "images/radar-red.svg");
        $("#clone h1").css("color", "#f43c43");

    }, {
        offset: "60px;"
    });
    
})