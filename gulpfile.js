const gulp = require('gulp');
const plumber = require('gulp-plumber');
const eslint = require('gulp-eslint');
const babel = require('gulp-babel');
const nodemon = require('nodemon');
const webpack = require('webpack-stream');


gulp.task('lintIt', function () {
  return gulp.src('server/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('webpack', function () {
  return gulp.src('./server/server.js')
    .pipe(plumber())
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest('public/'));
});

gulp.task('runIt', function () {
  process.env.PORT = 1111;
  nodemon({
    exec: './node_modules/babel-cli/bin/babel-node.js',
    script: './server/runIt.js',
    ext: '.js',
    ignore: ['public/']
  });
});

gulp.task('doIt', [
  'webpack',
  'runIt'
]);

gulp.task('stopIt', function () {
  const server = require('./server/server.js');
  process.env.PORT = 1111;
  server.stop();
});