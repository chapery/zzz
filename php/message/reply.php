<?php
header('Content-Type:text/html; charset=utf-8');
include_once 'conn.php';
if(!empty($_POST['content'])) {
	$sql = "insert into `reply` set mid='".$_POST['id']."', content='".$_POST['content']."'";
	$result = mysql_query($sql);
	echo $_POST['content'];
}
?>