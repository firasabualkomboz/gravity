    //code js owl
    $('.owl-carousel').owlCarousel({
        center: true,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
    0:{
    items:1
},
    600:{
    items:3
},
    1000:{
    items:4
}
}
})
//    end code owl js

// js code slider

    var myIndex = 0;
    carousel();

    function carousel() {
        var i;
        var x = document.getElementsByClassName("mySlides");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        myIndex++;
        if (myIndex > x.length) {myIndex = 1}
        x[myIndex-1].style.display = "block";
        setTimeout(carousel, 1000);
    }

    // end js slider



    // wow animation js

    // end  wow animation js