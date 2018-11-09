$(document).ready(function(){
    $(".main-replenishment .hover-block").click(function () {
        $(".hover-block").removeClass('active');
        $(this).addClass('active');
    });
});