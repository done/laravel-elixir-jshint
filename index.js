'use strict';

/**
 * Imports
 * 
 */
var Elixir = require('laravel-elixir');
var gulp = require('gulp');
var path = require('path');
var jshint = require('gulp-jshint');
var notify = require('gulp-notify');


/**
 * JSHint task
 * 
 * @param {Array} src Paths to files to watch and not to watch.
 * @param {Object} options JSHint options
 * @description Based on the extension ponko2/laravel-elixir-jshint, but modified
 *              due to that the extension does not support the Elixir version that
 *              comes with laravel 5.1
 * 
 */
Elixir.extend('jshint', function(src, options){

	// Fallback to default if the src parameter is not set
	src = src || [
		'public/js/**/*.js',
		'!public/js/vendor/**/*.js'
	];

	// Create an empty object if options parameter is not set
	options = options || {};

	// Error handler
	var onError = function(err) {

		notify.onError({

			title		: 'Laravel Elixir',
			subtitle	: 'JSHint failed',
			message		: '<%= error.message %>',
			icons 		: path.join(__dirname, '../laravel-elixir/icons/fail.png')

		})(err);

		this.emit('end');

	};

	// The JSHint task
	var task = new Elixir.Task('jshint', function(){

		gulp.src(src)
			.pipe(jshint(options))
			.pipe(jshint.reporter('jshint-stylish'))
			.pipe(jshint.reporter('fail'))
			.on('error', onError)
			.pipe(notify({
				title: 'Laravel Elixir',
				message: 'JSHint passed',
				icon: path.join(__dirname, '../laravel-elixir/icons/pass.png'),
				onLast: true
		}));

	}).watch(src);

	// Return our created task for method chaining
	return task;

});
