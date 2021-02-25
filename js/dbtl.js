$(function () {


    $(".p").click(function () {
        var dsq = setInterval(function () {
            var top1 = document.documentElement.scrollTop
            //每次移动当前滚动距离的10分之一
            var speed = Math.ceil(top1 / 10)
            //当滚动距离为0时，清除定时器
            if (top1 <= 0) {
                clearInterval(dsq)
            }
            //重新设置滚动距离  
            document.documentElement.scrollTop = top1 - speed
            // console.log('hello')
        }, 50)
    })

    // 给window对象绑定滚动事件
    window.onscroll = function () {
        //获取滚动距离
        var top1 = document.documentElement.scrollTop

        //判断当滚动距离大于500时，显示隐藏内容
        if (top1 > 700) {


            // $(".header").css({
            //     'position': 'fixed',
            //     'top': 0
            // })
            $(".p")[0].style.display = 'block'
        } else {
            // $(".header").css({
            //     'position': 'relative'
            // })
            $(".p")[0].style.display = 'none'

        }
    }






})