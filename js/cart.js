window.onload=function(){
//获取账户cookie
var name1 = getCookie("user")
//获取大盒子对象
var box = document.querySelector(".cart-box")
//获取地址栏中的地址
var url = location.href
//获取localstorage中的cartlist1
var cartList = localStorage.getItem('cartList1')
//把当前cartlist字符串转为数组对象
cartList = JSON.parse(cartList) || []

//判断当前cookie是否存在
if (name1) {
    show()
} else {
    alert("你还没登录，请登录再进入")
    location = "../pages/login.html?pathurl=" + url
}


function show() {

    //判断当前localstorage中是否有内容
    if (cartList.length > 0) {
        //获取全选框是否被选中
        var aa = cartList.every(item => {
            //判断当前商品是否被选中
            return item.is_select == 1
        })
        //获取当前被选中商品的种类和价格
        var sum = total()
        var str2 = `
     <table class="shopping-cart-table">
        <thead>
            <tr>
                <th>
                    <input type="checkbox" name="quan" ${aa ? "checked" : ''}>
                </th>
                <th>
                    <span>全选</span>
                </th>
                <th>
                    <span>商品信息</span>
                </th>
                <th>
                    <span> 价格(元)</span>
                </th>
                <th>
                    <span>数量</span>
                </th>
                <th>
                    <span>小计(元)</span>
                </th>
                <th>
                    <span>操作</span>
                </th>
            </tr>
        </thead>
        <tbody>
        `
        //遍历数组中所有的商品
        cartList.forEach(item => {
            str2 += `
            
            <tr>
                <td>
                    <input type="checkbox" name="xuan" ${item.is_select == 1 ? "checked" : ''} data-id=${item.id}>
                </td>
                <td>
                    <a href="../pages/xiangqing.html?id=${item.id}">
                    <img src="${item.img}">
                    </a>
                </td>
                <td>
                    <a href="../pages/xiangqing.html?id=${item.id}">${item.name}</a>
                </td>
                <td>
                    <span>￥</span>
                    <span>${item.price}</span>
                </td>
                <td>
                    <input type="button" value="-" data-id=${item.id} ${item.number <= 1 ? "disabled" : ""}>
                    <input type="text" value="${item.number}">
                    <input type="button" value="+" data-id=${item.id}>
                </td>
                <td>
                    <span>￥</span>
                    <span>${item.price * item.number}</span>
                </td>
                <td>
                    <a href="#" data-id=${item.id}>删除</a>
                </td>
            </tr>
          
            `
        })
        str2 += `
            </tbody>
            </table>
        <div class="shopping-cart-foot">
            <div class="cart-operate">
                <input type="checkbox" name="quan" ${aa ? "checked" : ''}>
                <span>全选</span>
                <a href="javascript:;">删除选中商品</a>
            </div>
            <div class="cart-result">
                <span class="total-item">
                    已选
                    <span class="total-count">${sum[0]}</span>
                    种商品
                </span>
                <span class="total-price">
                    合计(不含运费)：
                    <span class="css-price">
                        <span>￥</span>
                        <span class="currency css-price">${sum[1]}</span>
                    </span>
                </span>
            </div>
            <div class="total-btn">
                <button class="cart-submit">去结算</button>
            </div>
        </div>
            `
        //把最后拼接好的内容添加到box大盒子中
        box.innerHTML = str2




    } else {
        var str1 = `
     <div class="cart-empty">
     <div class="empty-img">
         <img src="../img/cart-empty.png">
     </div>
     <div class="empty-tip">暂无添加的商品</div>
     <div class="empty-btn">
         <a href="../pages/list.html">马上去购物</a>
     </div>
     `
        //把当前内容添加到box盒子中
        box.innerHTML = str1
    }
}

//给box大盒子对象绑定一个点击事件
box.onclick = function (e) {
    var e = e || window.event

    //获取点击对象
    var target = e.target || e.srcElement
    //判断当前点击的是否为＋按钮
    if (target.value == "+") {

        //获取当前对象中的id属性
        var id = target.getAttribute("data-id")
        //遍历cartlist数组对象
        cartList.forEach(item => {
            //判断遍历出来的商品是否为当前操作商品
            if (item.id == id) {
                item.number++
            }
        })
        //重新把当前操作完毕的数组添加到localstorage中
        localStorage.setItem("cartList1", JSON.stringify(cartList))
        //调用show方法，重新把页面再次渲染
        show()
    }
    if (target.value == "-") {
        //获取当前对象中的id属性
        var id = target.getAttribute("data-id")
        //遍历cartlist数组对象
        cartList.forEach(item => {
            //判断遍历出来的商品是否为当前操作商品
            if (item.id == id) {
                item.number--
            }
        })
        //重新把当前操作完毕的数组添加到localstorage中
        localStorage.setItem("cartList1", JSON.stringify(cartList))
        //调用show方法，重新把页面再次渲染
        show()
    }
    //删除
    if (target.innerHTML == "删除") {
        //获取当前点击对象的id
        var id = target.getAttribute("data-id")
        cartList = cartList.filter(item => {
            //过滤被删除的shangp
            return item.id != id
        })
        //重新把当前操作完毕的数组添加到localstorage中
        localStorage.setItem("cartList1", JSON.stringify(cartList))
        //调用show方法，重新把页面再次渲染
        show()
    }


    //全选
    if (target.name == "quan") {

        //遍历所有商品
        cartList.forEach(item => {
            //判断当前全选框是否被选中
            if (target.checked) {
                item.is_select = 1
            } else {
                item.is_select = 0
            }
        })
        //重新把当前操作完毕的数组添加到localstorage中
        localStorage.setItem("cartList1", JSON.stringify(cartList))
        //调用show方法，重新把页面再次渲染
        show()
    }

    //选中框
    if (target.name == "xuan") {
        //获取当前商品对应的id
        var id = target.getAttribute('data-id')
        //遍历数组中所有的商品对象
        cartList.forEach(item => {
            if (item.id == id) {
                //判断当前选中框是否被选中
                if (item.is_select == 1) {
                    item.is_select = 0
                } else {
                    item.is_select = 1
                }
            }
        })
        //重新把当前操作完毕的数组添加到localstorage中
        localStorage.setItem("cartList1", JSON.stringify(cartList))
        //调用show方法，重新把页面再次渲染
        show()
    }

    //去结算
    if (target.innerHTML == "去结算") {
        //添加确认框
        if (confirm("你确定要购买吗？")) {
            alert("你需要支付：￥" + total()[1])
            cartList = cartList.filter(item => {
                return item.is_select != 1
            })
            //重新把当前操作完毕的数组添加到localstorage中
            localStorage.setItem("cartList1", JSON.stringify(cartList))
            //调用show方法，重新把页面再次渲染
            show()
        }
    }

    //删除选中商品
    if (target.innerHTML == "删除选中商品") {
        cartList = cartList.filter(item => {
            return item.is_select != 1
        })
         //重新把当前操作完毕的数组添加到localstorage中
    localStorage.setItem("cartList1", JSON.stringify(cartList))
    //调用show方法，重新把页面再次渲染
    show()
    }
   
}




//统计所选商品数量和价格
function total() {
    var num = 0//所选商品种类
    var price = 0 //所选商品总价格
    //遍历cartlist数组对象
    cartList.forEach(item => {
        //判断当前商品是否被选中
        if (item.is_select == 1) {
            num++
            price += item.number * item.price

        }
    })
    return [num, price]
}
}