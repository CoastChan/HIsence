$(function () {

    $(".ssk").click(function () {

        $(".menu").css({
            'display': 'none'
        })
        $(".search").css({
            'left': 264
        })
    })
    $(".icon-X").click(function () {
        $(".menu").css({
            'display': 'block'
        })
        $(".search").css({
            'left': 1164
        })
    })
})

