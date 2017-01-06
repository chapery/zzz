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
	<link rel="stylesheet" href="http://localhost/zzz/bootstrap/css/main.css">
</head>
<body style="padding-top:50px;">
<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class="container">
    	<div class="nav navbar-nav">
    		<li><a href="#">前端技术</a></li>
    		<li><a href="#">link</a></li>
    		<li><a href="#">link</a></li>
    	</div>
    </div>
</nav>
<div class="container">
    <ul class="mes-list">
    	<?php 
    		$sql_m = "select * from `message`";
    		$query_m = mysql_query($sql_m);
    		while($rs_m = mysql_fetch_array($query_m)){
		?>
        <li id="<?php echo 'message-'.$rs_m['id'] ?>">
            <h4><?php echo $rs_m['username'] ?><a class="replyBtn" href="javascript:;">回复</a></h4>
            <div class="mesCon"><?php echo $rs_m['content'] ?></div>
            <?php
            	$sql_r = "select * from `reply` where mid='".$rs_m['id']."'";
            	$query_r = mysql_query($sql_r);
            	while($rs_r = mysql_fetch_array($query_r)){
            		echo '<div class="replyCon"><pre>'.$rs_r['content'].'</pre></div>';
            	}
            ?>
            <div class="replyTo">
                <form class="form-reply" action="" method="post">
                    <textarea class="form-control" rows="3"></textarea>
                    <div class="clearfix"><button class="btn btn-primary" type="submit">确定</button></div>
                </form>
            </div>
        </li>
		<?php
    		};
    	 ?>
    </ul>
</div>
<script src="http://localhost/zzz/bootstrap/js/jquery.min.js"></script>
<script src="http://localhost/zzz/bootstrap/js/bootstrap.min.js"></script>
<script>
    $('.mes-list').on('click', '.replyBtn', function() {
        $(this).parents('li').find('.replyTo').toggle();
    });
    $('.mes-list').on('submit', '.form-reply', function(e) {
    	var _this = $(this);
    	var content = $(this).find('.form-control');
    	if(content.val() == '') {
    		alert('评论内容不能为空！');
    		return false;
    	};
    	$.post('reply.php', {
    		id: $(this).parents('li').attr('id').replace('message-', ''),
    		content: content.val()
    	}, function(data) {
    		_this.parents('.replyTo').before('<div class="replyCon"><pre>' + data + '</pre></div>').hide();
    		content.val('');
    	});
    	e.preventDefault();
    });
</script>
</body>
</html>