//请求top.html
$(function () {
    $.ajax({
        url: "top.html",
        type: "get",
        success: function (result) {
            $(result).replaceAll("#top");
            $(`<link rel="stylesheet" href="css/top.css">`)
        }
    })
});
// 请求header.html
$(function () {
    $.ajax({
        url: "header.html",
        type: "get",
        success: function (result) {
            $(result).replaceAll("#header");
            $(`<link rel="stylesheet" href="css/header.css">`).appendTo("head");
        }
    });
});
//请求footer.html
$(function () {
    $.ajax({
        url: "footer.html",
        type: "get",
        success: function (result) {
            $(result).replaceAll("#footer");
            $(`<link rel="stylesheet" href="css/footer.css">`).appendTo("head");
        }
    });
})
//请求bottom.html
$(function(){
    $.ajax({
        url:"bottom.html",
        type:"get",
        success:function (result){
            $(result).replaceAll("#bottom");
            $(`<link rel="stylesheet" href="css/bottom.css">`).appendTo("head");
        }
    });
})
//请求Fixed_nav.html
$(function () {
    $.ajax({
        url: "Fixed_nav.html",
        type: "get",
        success: function (result) {
            $(result).replaceAll("#FixedRight");
            $(`<link rel="stylesheet" href="css/Fixed_nav.css">`)
        }
    })
})