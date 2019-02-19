'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');


var SCSS_IN = './src/Assets/scss/*.scss';
var SCSS_OUT = './src/Assets/css';

gulp.task('compile_scss', function(){
	gulp.src(SCSS_IN)
		.pipe(sass().on('erorr', sass.logError))
		.pipe(minifyCSS())
		.pipe(rename({suffix: '.mini'}))
		.pipe(changed(SCSS_OUT))
		.pipe(gulp.dest(SCSS_OUT));
})

gulp.task('watch_scss', function(){
	gulp.watch(SCSS_IN, gulp.series('compile_scss'));
})

gulp.task('default', gulp.series('watch_scss'));