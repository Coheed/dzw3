'use strict';

const gulp = require('gulp'),
  livereload = require('gulp-livereload'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  sourcemaps = require('gulp-sourcemaps');


const assetsDir = '../assets';
const srcDir = '../_src';

const config = {
  'scss': {
    'srcDir': srcDir + '/scss/**/*.*',
    'srcFiles': srcDir + '/scss/**/*.scss',
    'sourcemaps': 'sourcemaps',
    'dest': assetsDir + '/css'
  }
}

/**
 * Sass Output Styles
 * :nested
 * :compact
 * :expanded
 * :compressed
 */
gulp.task('sass', function () {
  gulp.src(config.scss.srcFiles)
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded',
      includePaths: config.scss.includePath,
    }).on('error', sass.logError))
    .pipe(autoprefixer('last 2 version'))
    .pipe(sourcemaps.write(config.scss.sourcemaps))
    .pipe(gulp.dest(config.scss.dest));
});


gulp.task('watch', function(){
  livereload.listen();

  gulp.watch(config.scss.srcDir, ['sass']);
  gulp.watch([config.scss.dest + '/**/*.css', '../templates/**/*.html.twig'], function (files) {
    livereload.changed(files);
  });
});
