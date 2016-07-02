'use strict';

var gulp = require('gulp'),
    conf = require('./conf'),
    path = require('path');


// gulp.task('ngdocs', [], function () {
//   var gulpDocs = require('gulp-ngdocs');
//   return gulp.src(path.join(conf.paths.src, 'app/**/*.js'))
//     .pipe(gulpDocs.process())
//     .pipe(gulp.dest('./docs'));
// });

gulp.task('ngdocs', [], function () {
  var gulpDocs = require('gulp-ngdocs');
  var options = {
    scripts: [
      'bower_components/angular/angular.min.js',
      'bower_components/angular/angular.min.js.map',
      'bower_components/angular-animate/angular-animate.min.js',
      'bower_components/angular-animate/angular-animate.min.js.map'
    ],
    html5Mode: true,
    startPage: '/api',
    title: "Frontend Docs",
    image: "img.png",
    imageLink: "http://my-domain.com",
    titleLink: "/api"
  }
  return gulp.src(path.join(conf.paths.src, '/app/**/*.js'))
    .pipe(gulpDocs.process(options))
    .pipe(gulp.dest('./docs'));
});
