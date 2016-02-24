var gulp = require('gulp'),
	sass = require('gulp-sass'),
	nano = require('gulp-cssnano'),
	util = require('gulp-util'),
	browserSync = require('browser-sync'),
	watch = require('gulp-watch');

gulp.task('sass', function() {
	return gulp.src('scss/*.scss')
		.pipe(sass({outputStyle:'compressed'}))
		.pipe(gulp.dest('css/'))
		.pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], function() {
	browserSync.init({
		server: {
			baseDir: './'
		}
	});

	gulp.watch('scss/*.scss', ['sass']);
	gulp.watch('*.html').on('change', browserSync.reload);
	gulp.watch('css/*.css').on('change', browserSync.reload);

});

gulp.task('default', ['serve']);
