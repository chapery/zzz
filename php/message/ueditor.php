<?php
	include_once 'conn.php';
	// header('Content-Type:text/html; charset=utf-8');
	$sql = "insert into `article` set `content`='".$_POST['content']."', `title`='title'";
	$query = mysql_query($sql);
	echo $query;
?>