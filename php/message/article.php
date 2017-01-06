<?php
	include_once 'conn.php';
?>
<!DOCTYPE html>
<html lang="zh">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<title>bootstrap</title>
    <link rel="stylesheet" href="http://localhost/zzz/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.7.0/styles/monokai-sublime.min.css">
	<link rel="stylesheet" href="http://localhost/zzz/bootstrap/css/main.css">
    <style>
		.hljs{
			font-size: 16px;
			line-height: 1.4;
			font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
		}
    </style>
</head>
<body style="padding-top:50px;">
<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class="container">
    	<div class="nav navbar-nav">
    		<li><a href="#">前端笔记</a></li>
    		<li><a href="#">工具</a></li>
    		<li><a href="#">插件</a></li>
    		<li><a href="#">参考文档</a></li>
    	</div>
    </div>
</nav>
<div class="container">
	<?php
		$id = 5;
		$sql = 'select * from `article` where `id` = '.$id;
		$query = mysql_query($sql);
		while($rs = mysql_fetch_array($query)){
			echo $rs['content'];
		};
	?>
</div>
<script src="http://localhost/zzz/bootstrap/js/jquery.min.js"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.7.0/highlight.min.js"></script>
<script>
	$(function(){
		$('pre').each(function(index, item) {
			hljs.highlightBlock(item);
		});
	});
</script>
</body>
</html>