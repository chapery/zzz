var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var paths = {
	scripts:['js/index.js','js/main.js']
}

gulp.task('task1',function(){
	console.log('task1');
})
gulp.task('task2',function(){
	console.log('task2');
})

gulp.task('default', function() {
	gulp.src(paths.scripts)
		.pipe(uglify())
		.pipe(concat('main.min.js'))
		.pipe(gulp.dest('build'));
});