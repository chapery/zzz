var express = require('express');
var router = express.Router();

router.get('/:username', function(req, res, next) {
	if(req.params.username == 'cap'){
		res.send('This name has been registered');
	}else{
		next();
	}
});
router.get('/:username', function(req, res, next) {
	res.send('your name is ' + req.params.username);
});
router.get('/cap/art', function(req, res, next) {
	res.render('article',{
		title: 'article',
		caption: 'blog',
		main: '海到尽头天作岸，山临绝顶我为峰'
	});
});

module.exports = router;