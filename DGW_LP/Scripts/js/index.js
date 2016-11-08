﻿$(document).ready(function () {
    $("#home").removeClass("active");
    $("#binhchon").removeClass("active");
    $("#tltag").removeClass("active");

    $("#home").addClass("active");


    var winHeight = $(window).height();
    var winWidth = $(window).width();

    $(".fullpage").css("min-height", 500);

    if (winHeight < 750) {
        //$(".fullpage").css("min-height", winHeight-80);
        $(".fullpage-bot").css("min-height", winHeight);
        $(".fullpage-bot").css("height", winHeight);
        //$("#mb-fixed-height").css("height",437);
    } else {
        //$(".fullpage").css("height", winHeight - 60);
        $(".fullpage-bot").css("height", winHeight - 100);
    }

    if (winWidth < 375) {
        $(".bg-step-desc").css("background-size", "cover");
    }
    if (winWidth < 415) {

        // Modify slider height
        $(".fill").css("height", "75%");
        $(".carousel-control").css("top", "35%");

        $(".slide-title").css("display", "none");
        $(".slide-title2").show();



        //$(".slide-title").css("left", "10%");

    }

    if ($(".lg-block").css("visibility") == "hidden" && $(".lg-block-2").is("visible") == true) {
        $(".lg-block").remove();
    }

 

    //$(".bg-step-desc").css("max-width", winWidth);
   // $(".bg-step-desc").css("height", $(".bg-step-desc").width()/2);
});


function ShowLogin() {
    $("#coll").click();

    $("#loginModal").modal();
}

function ShowDesc(index, htmlItem) {
    $(".step-active").removeClass("step-active");
    $(htmlItem).addClass("step-active");
    $(".content-inside").hide();
    $("#desc" + index).show();
}




