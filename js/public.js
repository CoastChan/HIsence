$(function () {
    $("#content").prepend('   <div id="header"></div>    ')
    $("#header").load("../pages/header.html")
    $("#content").append('   <div id="footer"></div>    ')
    $("#footer").load("../pages/footer.html")
})