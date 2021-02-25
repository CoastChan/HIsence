<?php 
header("content-type:text/html;charset=utf-8");
//连接数据库 
$link=mysqli_connect("localhost",'root',"","aaa");
//设置编码
mysqli_set_charset($link,"utf8");
//获取传入的参数
$id=$_GET['id'];
//SQL语句
$sql="select * from lby where id=$id";
//执行sql
$result=mysqli_query($link,$sql);
//获取结果集中的第一条数据
$row=mysqli_fetch_assoc($result);
//返回字符串对象
echo json_encode($row);

//关闭连接
mysqli_close($link);

?>