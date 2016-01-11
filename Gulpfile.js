var gulp = require('gulp');
var reactify = require('reactify');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var streamify = require('gulp-streamify');

gulp.task('watchify', function () {
	var bundler = browserify({
		entries: ['./client/main.jsx'],
		transform: [reactify],
		debug: true,
		cache: {},
		packageCache: {},
		fullPaths: true
	});

	var watcher = watchify(bundler);

	return watcher
		.on('update', function () {
			watcher.bundle()
				.on('error', function (err) {
					console.log('There was an error compiling!', err.message);
				})
				.pipe(source('bundle.js'))
				.pipe(streamify(uglify()))
				.pipe(gulp.dest('./dest/'));
		})
		.bundle()
		.on('error', function (err) {
			console.log('There was an error compiling!', err.message);
		})
		.pipe(source('bundle.js'))
		.pipe(streamify(uglify()))
		.pipe(gulp.dest('./dest/'));
});

gulp.task('default', ['watchify']);
