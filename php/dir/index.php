<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>directory</title>
</head>
<body>
<ul>
	<!-- php 遍历目录 -->
	<?php
		header('Content-Type:text/html; charset=utf-8');
		$url = './';
		$dir = opendir($url);
		while($file = readdir($dir)){
			if(preg_match('/(\.html|\.htm)$/', $file)){
				echo '<li><a href="'.$url.'/'.$file.'">'.$file.'</a></li>';
			};
		}
		closedir($dir);
	?>
</ul>
</body>
</html>
