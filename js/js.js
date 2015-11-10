jQuery(document).ready(function($){
    $('.bxslider').bxSlider({
        default: true,
        mode: "fade",
        auto: false
    });

    $("header .top-menu .main-top-menu > li").click(function(){
        $(this).find("ul").toggle();
    });
    $(".close").click(function(){
        $(".top-menu").toggle();
    })
});