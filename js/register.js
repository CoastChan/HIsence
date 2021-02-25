$(function () {
    //获取操作对象
    var user = document.querySelector('#mobile-phone')
    var pass = document.querySelector('#verify-code')
    var btn = document.querySelector(".next-step")

    //获取操作对象
    var box = document.querySelector(".box")
    var btn2 = document.querySelector(".btn-success")
    var btn1 = document.querySelector(".btn-cancel")
    var shadow = document.querySelector(".shadow")


    box.onclick = function fn1(e) {
        var e = e.e || window.event
        var target = e.target || e.srcElement
        if (target.value == "同意并接受") {
            var agrement = document.querySelector(".register-agreement")
            var shadow = document.querySelector(".shadow")

            agrement.style = "display:none"
            shadow.style = "display:none"


        }
        if (target.className == "btn-cancel") {

            location.href = "./login.html"
        }
        if (target.className == "fas fa-times") {
            location.href = "./login.html"
        }
        if (target.className == "next-step") {
            //获取账户输入框中的value
            var u1 = $("input").eq(0).val()
            var p1 = $("input").eq(1).val()
            //调用ajax发送请求
            Ajax({
                url: '../php/register.php',
                data: `username=${u1}&password=${p1}`,
                success: function (dt) {
                    //判断当前返回值是否等于1
                    console.log(dt);
                    if (dt == 1) {
                        alert("注册成功")
                        location.href = "../pages/login.html"

                    } else {
                        alert("用户名重复")
                    }
                }
            })
        }







    }

    $("input").focus(function () {
        $(this).prev().css({
            'top': '-26px',
            'left': '-5px',
            'transform': 'scale(0.85)',
            'opacity': .8


        })


    })
    $("input").blur(function () {
        if ($("input").val()) {
            $(this).prev().css({
                'top': '-26px',
                'left': '-5px',
                'transform': 'scale(0.85)',
                'opacity': .8
            })

        } else {
            $(this).prev().css({
                'top': 0,
                'left': 0,
                'transform': 'scale(1)',
                'opacity': .5


            })

        }



    })




    $("input[type='text']").focus(function () {

        $(".input-tip").css({
            'display': 'block'
        })
        $(".bdyz1").css({
            'display': 'none'
        })

    })

    $("input[type='text']").blur(function () {


        $(".input-tip").css({
            'display': 'none'
        })
        $(".bdyz1").css({
            'display': 'block'
        })
        var reg = /^[0-9A-Za-z]{6,16}$/
      
        if (reg.test($(this).val())) {
            $(".bdyz1").html('')
        } else if (!$(this).val()) {
            $(".bdyz1").html('手机号不可为空')
        } else {
            $(".bdyz1").html('请输入正确的账号')
        }
    })


    $("input[type='password']").focus(function () {
        $(".bdyz2").css({
            'display': 'none'
        })
    })

    $("input[type='password']").blur(function () {
        $(".bdyz2").css({
            'display': 'block'
        })
        var reg = /^\w{6,16}$/
        if (reg.test($(this).val())) {
            $(".bdyz2").html('')
        } else if (!$(this).val()) {
            $(".bdyz2").html('密码不可为空')
        } else {
            $(".bdyz2").html('请输入正确的密码')
        }
    })

})