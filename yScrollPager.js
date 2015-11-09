$.each($(".yScrollPage"), function (index, ele) {
    $("#yScrollPagerDropDown").append("<li><a onclick=smoothScrollTo('#"+$(ele).attr("id")+"')>"+$(ele).attr("data-title")+"</a></li>")
})
function smoothScrollTo(ele) {    
    $('html, body').animate({
        scrollTop: $(ele).offset().top
    }, 600);
}
$(document).scroll(function() {
    $.each($(".yScrollPage"), function (index, ele) {
        if (($(ele).offset().top - $("#yScrollPagerNav").height() <= $(document).scrollTop()) && ($(".yScrollPage").eq(index + 1).offset().top - $("#yScrollPagerNav").height() > $(document).scrollTop())) {            
            $("#yScrollPagerNav>span.pull-left").text($(ele).attr("data-title"))
        }
    })
})