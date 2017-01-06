<?php
	$conn = @mysql_connect('localhost', 'root', '') or die('数据库连接失败！');
	@mysql_select_db('test') or die('没有该数据库');
	mysql_query("set names 'UTF8'");
?>