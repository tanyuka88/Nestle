jQuery(document).ready(function($){
    $('.bxslider').bxSlider({
        default: true,
        mode: "fade",
        auto: false
    });

    $("header .top-menu .main-top-menu > li").click(function(){
        if ($("header .top-menu .main-top-menu > li").hasClass("tab-white")){
            $("header .top-menu .main-top-menu > li").removeClass("tab-white").find("ul").css("display","none");
            $("header .top-menu .main-top-menu > li").find(">a").removeClass("blue");
        }
        $(this).addClass("tab-white").find("ul").toggle();
        $(this).find(">a").addClass("blue");
    });

    $(".close").click(function(){
        $(".top-menu").toggle();
    })
});