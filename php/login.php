<?php 
header("content-type:text/html;charset=utf-8");
//连接数据库
$link=mysqli_connect("localhost",'root',"","shop2");
//设置编码
mysqli_set_charset($link,"utf8");
//获取参数
$u1=$_GET['username'];
$p1=$_GET['password'];
//SQL语句
$sql="select * from aaa where name='$u1' and pass='$p1'";
//执行sql
$result=mysqli_query($link,$sql);
//判断结果集中是否有数据
if(mysqli_fetch_assoc($result)){
    echo '1';
    
}else{
    echo '0';
}
//关闭连接
mysqli_close($link);

?>