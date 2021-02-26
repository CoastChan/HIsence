$(function () {
    //1、制作省市区级联下拉菜单
    //创建省市区的数据
    var ar1 = [{
        name: "广东省", cityList: [{
            name: "深圳市", areaList: ["宝安区", '南山区', '龙岗区']
        }, {
            name: '广州市', areaList: ["天河区", '白云区', '越秀区']
        }]
    }, {
        name: "四川省", cityList: [{
            name: "成都市", areaList: ['金牛区', '青羊区', '武侯区']
        }, {
            name: '内江市', areaList: ["东兴区", "市中区", "白马区"]
        }]
    }, {
        name: "江苏省", cityList: [{
            name: "苏州市", areaList: ['吴中区', '吴江区']
        }, {
            name: "南京市", areaList: ["溧水区", "六合区", "南京三区"]
        }]
    }]
    //ar1[i]["cityList"][j]["areaList"][z]
    //获取操作对象
    var pro = document.querySelector('[name="province"]')
    var city = document.querySelector('[name="city"]')
    var area = document.querySelector('[name="area"]')
    //给省份下拉框添加选项
    //遍历数组元素
    for (var i in ar1) {
        console.log(ar1[i]["name"])
        //创建选项
        var opa = document.createElement("option")
        //给当前选项添加内容
        opa.innerHTML = ar1[i]["name"]
        //给当前选项添加value属性值
        opa.setAttribute("value", ar1[i]["name"])
        //把当前选项追加到下拉框中
        pro.appendChild(opa)
    }
    //给省份下拉框绑定onchange事件
    pro.onchange = function () {
        city.length = 1
        area.length = 1
        //获取到被选中的省份
        var sheng = this.value
        //遍历数组中所有元素
        for (var i in ar1) {
            //判断当前遍历出来的省份是否跟被选中的省份相等
            if (ar1[i]["name"] == sheng) {
                //遍历当前被选中的省份中的城市
                for (var j in ar1[i]["cityList"]) {
                    //创建选项
                    var option1 = document.createElement("option")
                    //添加内容
                    option1.innerHTML = ar1[i]["cityList"][j]["name"]
                    option1.setAttribute("value", ar1[i]["cityList"][j]["name"])
                    //把当前选项追加到城市下拉框中
                    city.appendChild(option1)
                }
            }
        }
    }
    //给城市下拉框绑定onchange事件
    city.onchange = function () {
        area.length = 1
        //获取被选中的省份
        var sheng = pro.value
        var city2 = this.value
        //遍历数组
        for (var i in ar1) {
            //判断当前遍历出来的省份是否是被选中的
            if (ar1[i]["name"] == sheng) {
                //遍历城市数组
                for (var j in ar1[i]['cityList']) {
                    if (ar1[i]["cityList"][j]["name"] == city2) {
                        //遍历区
                        for (var z in ar1[i]["cityList"][j]["areaList"]) {
                            //创建选项
                            var option1 = document.createElement("option")
                            //添加内容
                            var val = ar1[i]["cityList"][j]["areaList"][z]
                            option1.innerHTML = val
                            option1.setAttribute("value", val)
                            //把当前选项追加到区中
                            area.appendChild(option1)
                        }
                    }
                }
            }
        }
    }
})