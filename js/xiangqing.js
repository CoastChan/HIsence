window.onload = function () {
    //获取当前地址栏中的参数信息
    // console.log(location)
    var search = location.search
    //获取大盒子对象
    var box = document.querySelector('.xiangqing-content')
    var dt;

    //判断当前search对象中是否有值
    if (search) {
        //分割search字符串
        var id = search.split('=')[1];

        (async function () {
            dt = await promiseAjax({
                url: '../php/xiangqing.php',
                data: 'id=' + id,
                datatype: 'json'

            })

            //创建拼接所有内容的字符串
            var str = `
        <div class="xiangqing-wrap">
        <div class="xiangqing wrap">
            <div class="item-detail-left">
           
            <div class="box">
              <img class="img1" src="${dt.img}">
              <div class="mark"></div>
            </div>
                <div class="carousel-wrap">
                    <div class="carousel">
                        <ul class="carousel-container">
                            <li >
                                <img src="//img.shop.hisense.com/2020/01/03/5c570439-aabd-4d31-86d0-f839260a3bac.png?x-oss-process=image/resize,m_mfit,h_550,w_550/sharpen,100">
                            </li>
                            <li >
                                <img src="//img.shop.hisense.com/2020/01/03/2a840d88-dce9-4852-9f2a-43fd602f519e.png">
                            </li>
                            <li >
                                <img src="//img.shop.hisense.com/2020/01/03/cb70421c-448c-43d7-a83e-66388995ce96.png">
                            </li>
                            <li >
                                <img src="//img.shop.hisense.com/2020/01/03/9e2b015d-4ea1-4c3f-90bd-386860d8b2e8.png">
                            </li>
                            <li >
                                <img src="//img.shop.hisense.com/2020/01/03/1fe02d8e-22d7-4965-b125-cd88c7275cc1.png">
                            </li>
                        </ul>
                        <a href="#">
                            <i class="iconfont"></i>
                        </a>
                        <a href="#">
                            <i class="iconfont"></i>
                        </a>
                    </div>

                </div>

            </div>
            <div class="boxRight" >
                <img src="${dt.img}">
            </div>

            <div class="item-detail-right">
                <div class="item-title">
                    <div class="share-content">
                        <i class="iconfont">&#xe624;</i>
                    </div>
                    <h1>
                        ${dt.name}
                    </h1>
                    <h3>
                        <b> 券后到手价不高于5999元,</b>库存有限，先到先得，预计下单后15天左右发货！ <a href="#">活动页领券更优惠！</a> 详见 <a
                            href="#">活动规则</a>；
                    </h3>
                    <br>
                    <p>
                        ●18日全场21:00-22:00瓜分5000元;
                    </p>
                    <p>
                        ●跨品类套购返至高500元补贴、赚积分兑好礼；
                    </p>
                    <p>
                        ●咨询客服有惊喜，送180天延保；
                    </p>
                </div>
                <div class="item-info">
                    <div class="item-price">
                        <i class="iconfont">&#xe641;</i>
                        <span class="price">${dt.price}</span>
                        <span class="number">${dt.num}</span>
                    </div>
                    <div class="reminder">
                        <i class="iconfont">&#xe605;</i>
                        <span>降价提醒</span>
                    </div>
                </div>

                <div class="service-list">
                    <div class="list-title">
                        承诺
                    </div>
                    <div class="list-content ">
                        <div class="commitment">
                            <img src="../img/30.png">
                            <span>30天保价</span>
                        </div>
                        <div class="commitment">
                            <img src="../img/7tian.png">
                            <span>七天无理由</span>
                        </div>
                        <div class="commitment">
                            <img src="../img/you.png">
                            <span>全场包邮</span>
                        </div>
                        <div class="commitment">
                            <img src="../img/lian.png">
                            <span>全国联保</span>
                        </div>
                        <div class="select">
                            <i></i>
                        </div>
                    </div>
                    <div></div>
                </div>
                <div class="item-address">
                    <div class="address-left">
                        <i class="iconfont">&#xe609;</i>
                    </div>
                    <div class="address-select">
                        <div>
                            <select name="province">
                                <option value="请选择省">请选择省</option>
                            </select>
                             <select name="city">
                                <option value="请选择市">请选择市</option>
                            </select>
                             <select name="area">
                                <option value="请选择区">请选择区</option>
                             </select>
                          
                        </div>
                        <div class="instock">现货</div>
                    </div>
                </div>
                <div class="item-skus">

                    <div class="choose-amount">
                        <div class="amount-title">选择数量</div>
                        <div class="amount-controls">
                            <input type="button" value="-" >
                            <input type="text" value="${dt.number}" name="num1">
                            <input type="button" value="+" >
                        </div>
                    </div>

                    <div class="choose-btns">
                        <a href="../pages/cart.html" class="buy-now">立即购买</a>
                        <a href="javascript:;" class="add-cart"> 加入购物车</a>
                    </div>

                </div>

            </div>


        </div>

    </div>
    <div class="page-part-wrap">
        <div class=" page-part wrap">
            <ul class="tab-nav">
                <li class="li1">图片详情</li>
                <li >评价(0) </li>
                <li > 包装及参数</li>
                <li >服务 </li>
            </ul>
            <div class="tab-item-detail show">
                <p><img src="//img.shop.hisense.com/2020/10/19/955d87e1-4bcd-4b82-b473-20afe7588385.jpg" title="E8D新版-790_01.jpg"></p>
                <p><img src="//img.shop.hisense.com/2020/10/19/ef9eadd8-4007-4bb4-a8eb-384a29c89429.jpg" title="E8D新版-790_02.jpg"></p>
                <p><img src="//img.shop.hisense.com/2020/10/19/3047e475-d373-4977-9bc7-4e48464b53a5.jpg" title="E8D新版-790_03.jpg"></p>
                <p><img src="//img.shop.hisense.com/2020/10/19/ebb85135-84fd-4f1e-9901-5748397e1b43.jpg" title="E8D新版-790_04.jpg"></p>
                <p><img src="//img.shop.hisense.com/2020/10/19/16237f54-218f-4fde-a1e9-c401d59f83e6.jpg" title="E8D新版-790_05.jpg"></p>
                <p><img src="//img.shop.hisense.com/2020/10/19/1b81cdb9-9510-44ed-bdbf-447ec819ba2a.jpg" title="E8D新版-790_06.jpg"></p>
                <p><img src="//img.shop.hisense.com/2020/10/19/1506a882-4e3d-47b7-a95b-2c98e7a3b690.jpg" title="E8D新版-790_07.jpg"></p>
                <p><img src="//img.shop.hisense.com/2020/10/19/020eff89-c793-4312-8c2f-b8b9a1f34b22.jpg" title="E8D新版-790_08.jpg"></p>
                <p><img src="//img.shop.hisense.com/2020/10/19/4d5ea90b-d863-4c0f-bd03-6596238ac1ac.jpg" title="E8D新版-790_09.jpg"></p>
                <p><img src="//img.shop.hisense.com/2020/10/19/557b15c0-45ef-4c50-9083-2cfd3bb3e0fd.jpg" title="E8D新版-790_10.jpg"></p>
                <p><img src="//img.shop.hisense.com/2020/10/19/0d69d87a-7ac6-481a-868a-f88750fd713a.jpg" title="E8D新版-790_11.jpg"></p>
                <p><img src="//img.shop.hisense.com/2020/10/19/f5e8a4c5-4c8f-491a-8963-2dca35910a52.jpg" title="E8D新版-790_12.jpg"></p>
                <p><img src="//img.shop.hisense.com/2020/10/19/0e867478-2959-40b4-bbaa-2fe2a5434403.jpg" title="E8D新版-790_13.jpg"></p>
                <p><img src="//img.shop.hisense.com/2020/10/19/46c53d98-505a-44de-b1d7-a77a1fd23a1f.jpg" title="E8D新版-790_14.jpg"></p>
                <p><img src="//img.shop.hisense.com/2020/10/19/685a38a2-e43c-4ba1-bd09-bf912e5ddc31.jpg" title="E8D新版-790_15.jpg"></p>
                <p><img src="//img.shop.hisense.com/2020/10/19/d5e5abeb-bdb7-4dfb-8b8b-18f2a12d304f.jpg" title="65E8D-参数表-790.jpg"></p>
                <p><br></p>
            </div>
            <div class="tab-item-detail" > 
                <p style="text-align: center"><img src="//img.shop.hisense.com/2021/02/18/8d566bfc-a97f-4988-b26d-2f6392eb723f.jpg" title="疫情通告.jpg" alt="疫情通告.jpg"></p>
                <p style="text-align: center"><img src="//img.shop.hisense.com/2021/01/22/33a26fdb-6187-44dc-bdf2-7f097a8a58af.jpg" title="790-购买须知-电视_02.jpg"></p>
                <p style="text-align: center"><img src="//img.shop.hisense.com/2021/01/22/a3b432f2-d77f-4c8a-8ae7-bb421ca1ba55.jpg" title="790-购买须知-电视_03.jpg"></p>
                <p style="text-align: center"><img src="//img.shop.hisense.com/2021/01/22/3f6a0ead-fc0a-4357-9b8a-9ebe14228083.jpg" title="790-购买须知-电视_04.jpg"></p>
                <p style="text-align: center"><img src="//img.shop.hisense.com/2021/01/22/4920f690-b9b5-4bb3-a9d8-f22606794782.jpg" title="790-购买须知-电视_05.jpg"></p>
                <p style="text-align: center"><img src="//img.shop.hisense.com/2021/01/22/7ad9b3fe-9a30-4b66-b971-973c323208d7.jpg" title="790-购买须知-电视_06.jpg"></p>
                <p style="text-align: center"><img src="//img.shop.hisense.com/2021/01/22/08e17db0-72b5-47b5-979e-bb2d93b0de88.jpg" title="790-购买须知-电视_07.jpg"></p>
                <p style="text-align: center"><img src="//img.shop.hisense.com/2021/01/22/91f31a8f-c566-4550-955f-5cb72d46d94f.jpg" title="790-购买须知-电视_08.jpg"></p>
                <p style="text-align: center"><br></p><p style="text-align: center"><br></p><p style="text-align: center"><br></p><p style="text-align: center"><br></p>
                <p style="text-align: center"><br></p><p style="text-align: center;"><br></p>
            </div>
            <div class="tab-item-detail">
                <p><img src="//img.shop.hisense.com/2020/10/19/955d87e1-4bcd-4b82-b473-20afe7588385.jpg" title="E8D新版-790_01.jpg"></p>
                <p><img src="//img.shop.hisense.com/2020/10/19/ef9eadd8-4007-4bb4-a8eb-384a29c89429.jpg" title="E8D新版-790_02.jpg"></p>
                <p><img src="//img.shop.hisense.com/2020/10/19/3047e475-d373-4977-9bc7-4e48464b53a5.jpg" title="E8D新版-790_03.jpg"></p>
                <p><img src="//img.shop.hisense.com/2020/10/19/ebb85135-84fd-4f1e-9901-5748397e1b43.jpg" title="E8D新版-790_04.jpg"></p>
                <p><img src="//img.shop.hisense.com/2020/10/19/16237f54-218f-4fde-a1e9-c401d59f83e6.jpg" title="E8D新版-790_05.jpg"></p>
                <p><img src="//img.shop.hisense.com/2020/10/19/1b81cdb9-9510-44ed-bdbf-447ec819ba2a.jpg" title="E8D新版-790_06.jpg"></p>
                <p><img src="//img.shop.hisense.com/2020/10/19/1506a882-4e3d-47b7-a95b-2c98e7a3b690.jpg" title="E8D新版-790_07.jpg"></p>
                <p><img src="//img.shop.hisense.com/2020/10/19/020eff89-c793-4312-8c2f-b8b9a1f34b22.jpg" title="E8D新版-790_08.jpg"></p>
                <p><img src="//img.shop.hisense.com/2020/10/19/4d5ea90b-d863-4c0f-bd03-6596238ac1ac.jpg" title="E8D新版-790_09.jpg"></p>
                <p><img src="//img.shop.hisense.com/2020/10/19/557b15c0-45ef-4c50-9083-2cfd3bb3e0fd.jpg" title="E8D新版-790_10.jpg"></p>
                <p><img src="//img.shop.hisense.com/2020/10/19/0d69d87a-7ac6-481a-868a-f88750fd713a.jpg" title="E8D新版-790_11.jpg"></p>
                <p><img src="//img.shop.hisense.com/2020/10/19/f5e8a4c5-4c8f-491a-8963-2dca35910a52.jpg" title="E8D新版-790_12.jpg"></p>
                <p><img src="//img.shop.hisense.com/2020/10/19/0e867478-2959-40b4-bbaa-2fe2a5434403.jpg" title="E8D新版-790_13.jpg"></p>
                <p><img src="//img.shop.hisense.com/2020/10/19/46c53d98-505a-44de-b1d7-a77a1fd23a1f.jpg" title="E8D新版-790_14.jpg"></p>
                <p><img src="//img.shop.hisense.com/2020/10/19/685a38a2-e43c-4ba1-bd09-bf912e5ddc31.jpg" title="E8D新版-790_15.jpg"></p>
                <p><img src="//img.shop.hisense.com/2020/10/19/d5e5abeb-bdb7-4dfb-8b8b-18f2a12d304f.jpg" title="65E8D-参数表-790.jpg"></p>
                <p><br></p>
            </div>
            <div class="tab-item-detail"> 
                <p style="text-align: center"><img src="//img.shop.hisense.com/2021/02/18/8d566bfc-a97f-4988-b26d-2f6392eb723f.jpg" title="疫情通告.jpg" alt="疫情通告.jpg"></p>
                <p style="text-align: center"><img src="//img.shop.hisense.com/2021/01/22/33a26fdb-6187-44dc-bdf2-7f097a8a58af.jpg" title="790-购买须知-电视_02.jpg"></p>
                <p style="text-align: center"><img src="//img.shop.hisense.com/2021/01/22/a3b432f2-d77f-4c8a-8ae7-bb421ca1ba55.jpg" title="790-购买须知-电视_03.jpg"></p>
                <p style="text-align: center"><img src="//img.shop.hisense.com/2021/01/22/3f6a0ead-fc0a-4357-9b8a-9ebe14228083.jpg" title="790-购买须知-电视_04.jpg"></p>
                <p style="text-align: center"><img src="//img.shop.hisense.com/2021/01/22/4920f690-b9b5-4bb3-a9d8-f22606794782.jpg" title="790-购买须知-电视_05.jpg"></p>
                <p style="text-align: center"><img src="//img.shop.hisense.com/2021/01/22/7ad9b3fe-9a30-4b66-b971-973c323208d7.jpg" title="790-购买须知-电视_06.jpg"></p>
                <p style="text-align: center"><img src="//img.shop.hisense.com/2021/01/22/08e17db0-72b5-47b5-979e-bb2d93b0de88.jpg" title="790-购买须知-电视_07.jpg"></p>
                <p style="text-align: center"><img src="//img.shop.hisense.com/2021/01/22/91f31a8f-c566-4550-955f-5cb72d46d94f.jpg" title="790-购买须知-电视_08.jpg"></p>
                <p style="text-align: center"><br></p><p style="text-align: center"><br></p><p style="text-align: center"><br></p><p style="text-align: center"><br></p>
                <p style="text-align: center"><br></p><p style="text-align: center;"><br></p>
            </div>
        </div>
    </div>
        `
            //把当前内容添加到大盒子中
            box.innerHTML = str;



            $(".box").mousemove(function (e) {

                var w1 = e.pageX - $(this).offset().left - $(".mark").width() / 2
                var h1 = e.pageY - $(this).offset().top - $(".mark").height() / 2

                if (w1 <= 0) {
                    w1 = 0
                } else if (w1 >= $(this).width() - $(".mark").width()) {
                    w1 = $(this).width() - $(".mark").width()
                }
                if (h1 <= 0) {
                    h1 = 0
                } else if (h1 >= $(this).height() - $(".mark").height()) {
                    h1 = $(this).height() - $(".mark").height()
                }
                $(".mark").css({
                    "left": w1,
                    "top": h1
                })

                $(".boxRight img").css({
                    "left": -w1 * 1.5,
                    "top": -h1 * 1.5
                })

            })

            $(".box").mouseover(function () {
                $(".boxRight").css({
                    'display': 'block'
                })
                $(".mark").css({
                    'display': 'block'
                })
            })

            $(".box").mouseout(function () {
                $(".boxRight").css({
                    'display': 'none'
                })
                $(".mark").css({
                    'display': 'none'
                })
            })

            //给下面五张小图片绑定点击事件

            $('.carousel-container li').click(function () {
                $('.carousel-container li').removeClass('imgborder')
                $(this).addClass('imgborder')
            
                
                $(".box img").attr("src", $(this).find('img').attr("src"))
                $(".boxRight img").attr("src", $(this).find('img').attr("src"))

            })
        })()




    } else {
        alert("你还没选中商品")
        location = "../pages/list.html"
    }


    //给大盒子对象绑定点击事件
    box.onclick = function (e) {
        var e = e || window.event

        //获取点击对象
        var target = e.target || e.srcElement

        //判断点击的对象是否为加入购物车按钮
        if (target.className == "add-cart") {
            console.log($(" input[type='text']")[1].value);

            //获取localstorage中的cartlist1
            var cartList = localStorage.getItem("cartList1")
            //判断当前获取的cartlist是否存在
            if (cartList) {
                //把localstorage中获取的内容转为数组对象
                cartList = JSON.parse(cartList)
                var a = 0//判断当前添加的商品是否在LOCALSTORAGE中存在
                //遍历数组中所有元素
                cartList.forEach(item => {
                    //判断当前遍历的商品是否等于要添加的商品

                    if (item.id == dt.id) {
                        a++
                        item.number = parseInt(item.number) + parseInt($("input[type='text']").eq(1).val())

                    }

                })
                if (a == 0) {
                    //修改商品数量
                    dt.number = parseInt($(" input[type='text']").eq(1).val())
                    //把当前对象追加到数组中
                    cartList.push(dt)
                }

                //把当前商品添加到localstorage中
                localStorage.setItem("cartList1", JSON.stringify(cartList))
            } else {
                //修改当前商品数量
                dt.number = parseInt($(" input[type='text']")[1].value)
                //把当前商品添加到localstorage中
                localStorage.setItem("cartList1", JSON.stringify([dt]))
            }

        }
        //判断当前点击的是否为＋按钮
        if (target.value == "+") {

            if ($(target).prev().val() < 10) {
                var val = $(target).prev().val()
                val++
                $(target).prev().val(val)
            }

        }

        //判断当前点击的是否为-按钮
        if (target.value == "-") {
            if ($(target).next().val() > 1) {
                var val = $(target).next().val()
                val--
                $(target).next().val(val)
            }

        }

        if (target.nodeName == "LI") {

            $(".tab-nav li").removeClass("li1")
            $(target).addClass("li1")
            $(".tab-item-detail").removeClass("show")
            $(".tab-item-detail").eq($(target).index()).addClass("show")
        }











    }




    //给下面五张小图片绑定点击事件
    // for (var i = 0; i < imgs.length; i++) {
    //     imgs[i].onclick = function () {
    //         //先把所有的图片边框去掉
    //         for (var j = 0; j < imgs.length; j++) {
    //             imgs[j].className = ''
    //         }
    //         //给当前选中对象添加边框
    //         this.className = 'imgborder'
    //         //获取当前点击的图片地址
    //         var url1 = this.getAttribute("src")
    //         //分别修改左右两个盒子中的图片路径
    //         boxImg.setAttribute('src', url1)
    //         rightImg.setAttribute('src', url1)
    //     }
    // }
}

