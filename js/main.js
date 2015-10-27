$(document).ready(function(){
    
    //initialize slider
    
    $(".slider").owlCarousel({
        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem : true,
        navigationText : ["",""],
        pagination : true,
        autoPlay : 4500,
        stopOnHover : true
        // "singleItem:true" is a shortcut for:
        // items : 1, 
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false
    });
    
    $('.menu-btn').on('click', function(){
        $('nav').toggleClass('active');
    });

});