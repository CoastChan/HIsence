//获取操作对象
var user = document.querySelector('[type="text"]')
var pass = document.querySelector('[type="password"]')
var btn = document.querySelector('[type="submit"]')
//获取地址栏中的参数
var search = location.search

//给登录按钮绑定点击事件
btn.onclick = function () {

    //获取账户输入框中的value
    var u1 = user.value
    var p1 = pass.value


    //调用ajax发送请求
    Ajax({
        url: '../php/login.php',
        data: `username=${u1}&password=${p1}`,
        success: function (dt) {
            //判断当前返回值是否等于1
            console.log(dt)
            if (dt == 1) {


                //判断当前地址栏中是否有参数
                if (search) {

                    //获取参数中传入的地址
                    var url1 = search.split('=')[1]
                    location.href = url1
                } else {
                    location.href = "../pages/list.html"

                }
                setCookie("user", u1)
            } else {
                alert("登录失败")
                location.href = "../pages/login.html"
            }
        }
    })




}




// $("input").focus(function () {
//     $(this).prev().css({
//         'top': '-26px',
//         'left': '-5px',
//         'transform': 'scale(0.85)',
//         'opacity': .8


//     })
   

// })
// $("input[type='password']").focus(function(){
//     $(".error-empty").css({
//         'display': 'none'
//     })
// })

// $("input").blur(function () {

//     if ($("input").val()) {

//         $(this).prev().css({
//             'top': '-26px',
//             'left': '-5px',
//             'transform': 'scale(0.85)',
//             'opacity': .8


//         })

//     } else {

//         $(this).prev().css({
//             'top': 0,
//             'left': 0,
//             'transform': 'scale(1)',
//             'opacity': .5


//         })
//     }
//     if ($("input[type='password']").val()) {
//         $(".error-empty").css({
//             'display': 'none'
//         })
//     } else {
//         $(".error-empty").css({
//             'display': 'block'
//         })
//     }



// })




// $("input[type='text']").keydown(function () {
//     var reg = /^[0-9A-Za-z]{6,16}$/

//     if (reg.test($("input[type='text']").val())) {
//         $(this).next().html('')
//     } else {


//         $(this).next().html('请输入正确的账号')
//     }
// })







// $("input[type='password']").keydown(function () {
//     var reg = /^\w{6,16}$/

//     if (reg.test($("input[type='password']").val())) {
//         $(".bdyz2").html('')
//     } else {


//         $(".bdyz2").html('请输入6-20位数字大小写字母组合密码')
//     }
// })

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
    $(".bdyz1").css({
        'display': 'none'
    })

})

$("input[type='text']").blur(function () {

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

