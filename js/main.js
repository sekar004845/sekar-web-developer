

// Website Slider
$(document).ready(function() {
    $("#website-slider").owlCarousel({
        items: 3, // Default items for desktop
        loop: true, // To make sure the carousel loops infinitely
        margin: 10, // Margin between items
        nav: true, // Show next/prev navigation
        navText: ["", ""], // Text for navigation buttons
        autoplay: true, // Enable autoPlay
        autoplayTimeout: 5000, // 5 seconds autoPlay interval
        autoplayHoverPause: true, // Pause on hover
        responsive: {
            0: {
                items: 1 // Items for mobile devices
            },
            600: {
                items: 2 // Items for tablets
            },
            1000: {
                items: 3 // Items for desktops
            }
        }
    });
});

// Landing Slider
$(document).ready(function() {
    $("#landing-slider").owlCarousel({
        items: 3, // Default items for desktop
        loop: true, // To make sure the carousel loops infinitely
        margin: 10, // Margin between items
        nav: true, // Show next/prev navigation
        navText: ["", ""], // Text for navigation buttons
        autoplay: true, // Enable autoPlay
        autoplayTimeout: 6000, // 5 seconds autoPlay interval
        autoplayHoverPause: true, // Pause on hover
        responsive: {
            0: {
                items: 1 // Items for mobile devices
            },
            600: {
                items: 2 // Items for tablets
            },
            1000: {
                items: 3 // Items for desktops
            }
        }
    });
});
