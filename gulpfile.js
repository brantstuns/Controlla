const gulp = require('gulp');
const plumber = require('gulp-plumber');
const eslint = require('gulp-eslint');
const babel = require('gulp-babel');
const nodemon = require('nodemon');
const webpack = require('webpack-stream');
const jasmine = require('gulp-jasmine');
const TerminalReporter = require('jasmine-terminal-reporter');
const path = require('path');


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
  process.env.CREDS = process.argv[4];
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

const terminalReporter = new TerminalReporter({
  showColors: true,
  includeStackTrace: true,
  stackFilter: function (stack) {
    const jasmineCorePath = require.resolve('jasmine-core').split(path.sep).slice(0, -1).join(path.sep);
    return stack.split('\n').filter(function (stackLine) {
      return stackLine.indexOf(jasmineCorePath) === -1;
    }).join('\n');
  }
});

gulp.task('specs', function () {
  process.env.NODE_ENV = 'test';
  process.env.CREDS = path.join(__dirname, 'specs/server/middlewares/testCreds.json');
  return gulp.src('specs/server/**/*Spec.js')
    .pipe(jasmine({reporter: terminalReporter}));
});