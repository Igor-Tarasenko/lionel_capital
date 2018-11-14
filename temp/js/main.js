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
});