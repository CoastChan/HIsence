
window.onload = function () {
    //获取操作对象
    var list1 = document.querySelector('.list1');
    var pagination1 = document.querySelector(".pagination");
    var search = location.search

    async function fn2(aa) {
        var dt = await promiseAjax({
            url: '../php/list.php',
            datatype: 'json',
            data: `type="${aa}"`

        })
        // console.log(dt)
        //创建分页器对象
        new Pagination(pagination1, {
            pageInfo: {
                pagenum: 1,
                pagesize: 20,
                totalsize: dt.length,
                totalpage: Math.ceil(dt.length / 20)
            },
            //页面文本信息参数
            textInfo: {
                prev: "<",
                next: ">",
            }, cb(m) {

                //获取当前页面需要显示的数据
                var ar1 = dt.slice((m - 1) * 20, m * 20)
                // console.log(ar1)
                //创建拼接所有数据的字符串
                var str = ''
                //遍历当前ar1数组中的所有数据
                ar1.forEach(item => {
                    str += `<li>
            <div class="produce-image">
                <a href="../pages/xiangqing.html?id=${item.id}"><img src="${item.img}"></a>
            </div>
            <div class="produce-right">
                <p class="produce-title">
                    <a href="../pages/xiangqing.html?id=${item.id}">
                    ${item.name}
                    </a>
                </p>
                <p class="produce-price">
                    <span class="currently">
                        ￥<span class="price">${item.price}</span>
                    </span>
                    <span class="salequantity">${item.num}</span>
                </p>
            </div>
        </li> `
                    //把当前拼接好的字符串，添加到list盒子中
                    list1.innerHTML = str
                });
                var str1 = `<span class="page">共${dt.length}条</div>`
                $(".pagination").prepend($(str1))
            }
        })

    }

    async function fn1(aa,bb) {
        var dt2 = await promiseAjax({
            url: '../php/list2.php',
            datatype: 'json',
            data: `type="${aa}"&type2="${bb}"`
        })
        console.log(dt2.length);
        //创建分页器对象
        new Pagination(pagination1, {
            pageInfo: {
                pagenum: 1,
                pagesize: 20,
                totalsize: dt2.length,
                totalpage: Math.ceil(dt2.length / 20)
            },
            //页面文本信息参数
            textInfo: {
                prev: "<",
                next: ">",
            }, cb(m) {

                //获取当前页面需要显示的数据
                var ar1 = dt2.slice((m - 1) * 20, m * 20)
                // console.log(ar1)
                //创建拼接所有数据的字符串
                var str2 = ''
                //遍历当前ar1数组中的所有数据
                ar1.forEach(item => {
                    str2 += `<li>
           <div class="produce-image">
               <a href="../pages/xiangqing.html?id=${item.id}"><img src="${item.img}"></a>
           </div>
           <div class="produce-right">
               <p class="produce-title">
                   <a href="../pages/xiangqing.html?id=${item.id}">
                   ${item.name}
                   </a>
               </p>
               <p class="produce-price">
                   <span class="currently">
                       ￥<span class="price">${item.price}</span>
                   </span>
                   <span class="salequantity">${item.num}</span>
               </p>
           </div>
       </li> `
                    //把当前拼接好的字符串，添加到list盒子中
                    list1.innerHTML = str2
                });
                var str3 = `<span class="page">共${dt2.length}条</div>`
                $(".pagination").prepend($(str3))

               
            }
        })

    }


    async function fn3(aa) {
        var arr = [
            ['55英寸', '65英寸', '75英寸', '43英寸', '32英寸', '50英寸', '70英寸', '85英寸', '40英寸', '58英寸', '60英寸', '65英寸', '75英寸'],
            ['75英寸', '80英寸', '100英寸', '88英寸']]
        
        //创建拼接所有数据的字符串
        //遍历当前ar1数组中的所有数据

        if (aa == "1") {
            var str4 = ''

            for (var i in arr[0]) {
                str4 += `<li>${arr[0][i]}</li> `
                //把当前拼接好的字符串，添加到list盒子中
            }
            $(".list-side ul").html(str4)

        }
        if (aa == "2") {
            var str4 = ''

            for (var i in arr[1]) {
                str4 += `<li>${arr[1][i]}</li> `
                //把当前拼接好的字符串，添加到list盒子中
            }
            $(".list-side ul").html(str4)

        }
 


    }

    if (search) {

        //获取参数中传入的地址
        var url1 = search.split('=')[1]
        fn3(url1)
        fn2(url1)
      
     
    } else {
        fn3(1)
        fn2(1)
      

    }


    var side = $(".list-side")[0]

    side.onclick = function (e) {
        var e = e || window.event

        //获取点击对象
        var target = e.target || e.srcElement
        //判断当前点击的是否为＋按钮
        if (target.nodeName == "LI") {
            
            if (search) {

                //获取参数中传入的地址
                var url1 = search.split('=')[1]
                fn1(target.innerHTML,url1)
              
             
            } else {
               
                fn1(target.innerHTML,1)

            }
        }

    }

}
