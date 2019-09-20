$(function() {
    $('.carousel').carousel();

    if ($(window).width() < 1024) {
        $("a.navbar-brand").removeClass("ml-4");
        $("div.col.p-1:nth-of-type(3)").children().removeClass("backdark");
        $("div.col.p-1:nth-of-type(4)").children().addClass("backdark");
        $("div.col.p-1:nth-of-type(3)").children("a").addClass("tekstwhite");

        $("nav#navbre a.nav-link").click(function() {
            $("div.navbar-collapse").removeClass("show");
        });

        $("h2.zaimg1").css({ "margin-top": "50px!important", "margin-left": "50px!important" });
    } else {
        $('#carouselExampleSlidesOnly').on('slide.bs.carousel', function() {
            setTimeout(function() {
                let imgsrc = $(".carousel-item.active img").attr('src');
                if (imgsrc === "img/srezana.jpeg") {
                    $("h2.zaimg1").css({ "margin-top": "13%", "margin-left": "66%" });
                } else if (imgsrc === "img/novihero1.jpg") {
                    $("h2.zaimg1").css({ "margin-top": "27%", "margin-left": "62%" });
                } else if (imgsrc === "img/daf.jpg") {
                    $("h2.zaimg1").css({ "margin-top": "7%", "margin-left": "5%" });
                } else {
                    $("h2.zaimg1").css({ "margin-top": "7%", "margin-left": "5%" });
                }
            }, 1500);
        });
    }
    var date = new Date();
    var year = date.getFullYear();
    console.log(year);
    document.getElementById('prava').innerHTML = "Copyright &copy; RDdesign " + year + ". All Rights Reserved";

});