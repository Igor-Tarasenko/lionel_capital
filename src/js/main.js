$(document).ready(function(){
    $(".main-replenishment .hover-block").click(function () {
        $(".hover-block").removeClass('active');
        $(this).addClass('active');
    });
    setTimeout(function(){
        /*$("iframe#calendar").contents().find("#headerRow").hide();*/
        var iFrameDOM = $("iframe #calendar").contents();
        var count = iFrameDOM.find(".eCalNew header");
        console.log(iFrameDOM.get());
    }, 3000);
    /*$('#headerRow:lt(3)').css('display', 'none');*/
});