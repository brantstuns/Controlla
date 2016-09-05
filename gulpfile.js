const gulp = require('gulp');
const eslint = require('gulp-eslint');
const babel = require('gulp-babel');
const nodemon = require('nodemon');

gulp.task('runIt', function () {
  process.env.PORT = 1111;
  nodemon({
    exec: './node_modules/babel-cli/bin/babel-node.js',
    script: './server/runIt.js',
    ext: '.js',
    ignore: ['client/', 'public/']
  });
});