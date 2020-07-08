/**
 * @file
 * Gulp Tasks
 */

const { src, dest, series, parallel, watch} = require("gulp");
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const sassLint = require('gulp-sass-lint');
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');

// Configuration
//
const config = {
  'scss': {
    'src': './_src/scss/**/*.scss',
    'watchDir': './_src/scss/**/*.*',
    'includePath': ['./node_modules'],
    'sourcemaps': 'sourcemaps',
    'dest': './assets/css'
  },
  'js': {
    'src': './_src/js/**/*.js',
    'dest': "./assets/js",
  }
};


// Transpile JavaScripts
//
const js = () => {
  return src(config.js.src)
    // Init source maps
    // .pipe(sourcemaps.init())
    // Stop the process if an error is thrown.
    .pipe(plumber())
    // Transpile the JS code using Babel's preset-env.
    .pipe(babel({
      presets: [
        ['@babel/env', {
          modules: false
        }]
      ]
    }))
    // .pipe(sourcemaps.write())
    // Save each component as a separate file in dist.
    .pipe(dest(config.js.dest))
};

// Compile SCSS
//
const scss = () => {
  sass.compiler = require('node-sass');
  return src(config.scss.src)
    // .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded',
      includePaths: [config.scss.includePath]
    }).on('error', sass.logError))
    .pipe(autoprefixer('last 2 version', 'ie 11'))
    // .pipe(sourcemaps.write('./'))
    .pipe(dest(config.scss.dest));
};

exports.scss = scss;
exports.js = js;
// exports.scssLint = scssLint;

exports.default = () => {
  watch(['./_src/scss/**/*.scss'], scss);
  watch(['./_src/js/**/*.js'], js);
};
