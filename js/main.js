$(function() {

    if ($(window).width() < 1024) {
        // $("a.navbar-brand").removeClass("ml-4");
        // $("div.col.p-1:nth-of-type(3)").children().removeClass("backdark");
        // $("div.col.p-1:nth-of-type(4)").children().addClass("backdark");
        // $("div.col.p-1:nth-of-type(3)").children("a").addClass("tekstwhite");

        $("nav#navbre a.nav-link").click(function() {
            $("div.navbar-collapse").removeClass("show");
        });

        // $("h2.zaimg1").css({ "margin-top": "50px!important", "margin-left": "50px!important" });
    } else {
        $('#carouselExampleSlidesOnly').on('slide.bs.carousel', function() {
            // setTimeout(function() {
            let imgsrc = $(".carousel-item.active h2").attr("class");
            console.log(imgsrc);
            if (imgsrc === "zaimg1") {
                $("h2.zaimg1").addClass("animaleft");
                $("h2.zaimg3").removeClass("animaleft");
            } else if (imgsrc === "zaimg2") {
                $("h2.zaimg2").addClass("animatop");
                $("h2.zaimg1").removeClass("animaleft");
            } else if (imgsrc === "zaimg3") {
                $("h2.zaimg3").addClass("animaleft");
                $("h2.zaimg2").removeClass("animaltop");
            }
            // }, 1500);
        });
    }
    var date = new Date();
    var year = date.getFullYear();
    // console.log(year);
    document.getElementById('prava').innerHTML = "Copyright &copy; RDdesign " + year + ". All Rights Reserved";

});


window.onscroll = function() {
    myFunction()
};

var windowHeight = (window.innerHeight * 3) / 10;
var about = document.getElementById("about");
var services = document.getElementById("serviceshref");
var team = document.getElementById("team");
var contact = document.getElementById("contact");

function myFunction() {
    var positionS = services.getBoundingClientRect().top;
    var positionA = about.getBoundingClientRect().top;
    var positionT = team.getBoundingClientRect().top;
    var positionC = contact.getBoundingClientRect().top;

    if (document.documentElement.scrollTop >= windowHeight) {
        about.getElementsByClassName("col")[0].classList.add("animaimg");
        about.getElementsByClassName("col")[1].classList.add("animaright");
    }
    if (windowHeight >= positionS) {
        services.getElementsByClassName("col")[0].classList.add("animaleft");
        services.getElementsByClassName("col")[1].classList.add("animaimg");
    }
    if (windowHeight >= positionT) {
        team.getElementsByClassName("col")[0].classList.add("animaright");
        team.getElementsByClassName("col")[1].classList.add("animaright");
        team.getElementsByClassName("col")[2].classList.add("animaright");
        team.getElementsByClassName("col")[3].classList.add("animaright");
    }
    if (windowHeight >= positionC) {
        contact.getElementsByClassName("container")[0].classList.add("animaimg");
        // contact.getElementsByClassName("col")[1].classList.add("animaright");
    }
    console.log(positionS);
}