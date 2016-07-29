require.config({
	baseUrl:'js',//默认为main.js所在的目录
	paths:{
		jquery:["http://libs.baidu.com/jquery/2.0.3/jquery", '../../jquery/jquery']//远程加载不成功切换到本地
	}
})
require(['require','./shirt','jquery'],function(require,shirt,$){
	console.log(shirt);
	console.log($);
});