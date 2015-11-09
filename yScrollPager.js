$.each($(".yScrollPage"), function (index, ele) {
    $("#yScrollPagerDropDown").append("<li><a onclick=smoothScrollTo('#"+$(ele).attr("id")+"')>"+$(ele).attr("data-title")+"</a></li>")
})
function smoothScrollTo(ele) {    
    $('html, body').animate({
        scrollTop: $(ele).offset().top
    }, 600);
}
function yScrollPagerPrev() {
    yScrollPagerMove(-1)
}

function yScrollPagerNext() {
    yScrollPagerMove(1)
}
function yScrollPagerMove(val) {
    console.log($("#yScrollPagerNav").attr("data-current-section"))
    var nextEleIndex = parseInt(parseInt($("#yScrollPagerNav").attr("data-current-section")) + parseInt(val))
    var nextEle = $(".yScrollPage").eq(nextEleIndex)
    smoothScrollTo(nextEle)
    $("#yScrollPagerNav").attr("data-current-section", nextEleIndex)
}
$(document).scroll(function() {
    $.each($(".yScrollPage"), function (index, ele) {
        if (($(ele).offset().top - $("#yScrollPagerNav").height() <= $(document).scrollTop()) && ($(".yScrollPage").eq(index + 1).offset().top - $("#yScrollPagerNav").height() > $(document).scrollTop())) {            
            $("#yScrollPagerNav>span.pull-left").text($(ele).attr("data-title"))
            $("#dropdownMenu2").text(index+1 + " of " + $(".yScrollPage").length)
            $("#yScrollPagerNav").attr("data-current-section", index)
        }
    })
})