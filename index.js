AOS.init();

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $(".navbar").addClass("sticky");
        }else{
            $(".navbar").removeClass("sticky");
        }

        if(this.scrollY > 500){
            $(".scroll-up").addClass("show");
        }else{
            $(".scroll-up").removeClass("show");
        }
    });

    // typing animation script
    var typed = new Typed(".typing", {
        strings: ["Web developer.", "Designer.", "Coding enthusiast."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing2", {
        strings: ["Web developer", "Designer", "Coding enthusiast"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // slide up script
    $('.scroll-up').click(function(){
        $('html').animate({scrollTop : 0});
    })

    // toggle menu/navbar script
    $(".menu-btn").click(function(){
        $(".navbar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    });
})