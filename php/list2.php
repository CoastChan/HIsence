
<?php 
header("content-type:text/html;charset=utf-8");
$type=$_GET['type'];
$type2=$_GET['type2'];
//连接数据库
$link=mysqli_connect("localhost",'root',"","aaa");
//设置编码
mysqli_set_charset($link,"utf8");

//SQL语句
$sql="select * from lby where type=$type and type2=$type2";
//执行sql
$result=mysqli_query($link,$sql);
//创建存储所有数据的数组
$arr=[];
//遍历结果集
while($row=mysqli_fetch_assoc($result)){
//把遍历出来数据追加到数组中
array_push($arr,$row);

}
//把当前数组转为json字符串，并响应给浏览器
echo json_encode($arr);
//关闭连接
mysqli_close($link);

?>