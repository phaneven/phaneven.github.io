var navOffset = $('.navbar').height();
/**** direct jump to specific position*****/
// $('.navbar li a').click(function(event) {
//     var href = $(this).attr('href');
//
//     // Don't let the browser scroll, but still update the current address
//     // in the browser.
//     event.preventDefault();
//     window.location.hash = href;
//
//     // Explicitly scroll to where the browser thinks the element
//     // is, but apply the offset.
//     $(href)[0].scrollIntoView();
//     window.scrollBy(0, -navOffset);
// });

/**** slowly jump to specific position ****/
$('.navbar li a, .pull-right a').click(function(event){
    if(this.hash !=="") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top - navOffset
        }, 800, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            // window.location.hash = hash;
        });
    }
});


// $('.pull-right a').click(function(event){
//     if(this.hash !=="") {
//         // Prevent default anchor click behavior
//         event.preventDefault();
//
//         // Store hash
//         var hash = this.hash;
//
//         // Using jQuery's animate() method to add smooth page scroll
//         // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//         $('html, body').animate({
//             scrollTop: $(hash).offset().top - navOffset
//         }, 800, function(){
//
//             // Add hash (#) to URL when done scrolling (default click behavior)
//             // window.location.hash = hash;
//         });
//     }
// });

$('#myCarousel').carousel({
    interval: 2000,
    pause: 'hover',
    wrapper: true
});

// Add scrollspy to <body>
$('body').scrollspy({target: ".navbar", offset: 50});

$(window).ready(function() {
})