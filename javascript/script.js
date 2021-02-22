$(document).ready(function() {
    
    $(".js--section-features").waypoint(function(direction) {

        $("#clone h1 img").attr("src", "images/radar-red.svg");
        $("#clone h1").css("color", "#f43c43");

    }, {
        offset: "60px;"
    });
    
    $(".js--wp-2").waypoint(function(direction) {
        $(".js--wp-2").addClass("animated pulse");
    }, {
        offset: "50%"
    });
    
    $('a[href*="#"]')
  // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    // On-page links
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && 
        location.hostname == this.hostname) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
        if (target.length) {
        // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                } else {
                    $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                };
            });
        }
    }
  });
  
    const url = "https://script.google.com/macros/s/AKfycbzpAWUTHdvya_UlEDYbkT65DHDwj-ZS5f_U5rwsveVQfG7XoQGAnDDe/exec";
    const form = document.forms['contact-form'];
    
    form.addEventListener('submit', e => {
        e.preventDefault();
        
        var formData = new FormData(form);
        
        fetch(url, { method: "POST", body: formData })
        .then(response => {
            form.reset();
            console.log("Success!", response)
        })
        .catch(error => {
            console.error("Error!", error.message);
        })
    });
    
})