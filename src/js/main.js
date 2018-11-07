$(document).ready(function(){
    $(".show-more").click(function () {
        $(document).mouseup(function (e) {
            var div = $(".people-history");
            if (!div.is(e.target) && div.has(e.target).length === 0) {
                div.hide();
            }
        });
        $(this).next(".people-history").show(400);
    });
});