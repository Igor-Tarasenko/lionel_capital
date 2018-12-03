$(document).ready(function(){
    $(".main-replenishment .hover-block").click(function () {
        $(".hover-block").removeClass('active');
        $(this).addClass('active');
    });
    $(".some-question-js").click(function () {
        $(".answer").slideUp();
        $("h3").removeClass("transform");
        $(this).find(".answer").slideDown();
        $(this).find("h3").addClass("transform");
    });
    $(".analitics-js").click(function () {
        $(".analitics-js").removeClass("active");
        $(this).addClass("active");
    });
    $(".choose-month-dropdown .dropdown-menu .analitics-js").click(function () {
        var textButton = $(".choose-month-dropdown .dropdown-menu").find(".active").text();
       $(".choose-month-dropdown .btn-dropdown").text(textButton);
    });
});