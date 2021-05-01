'use strict';

const gulp = require('gulp'); // Gulp of course
const plumber = require('gulp-plumber'); // Prevent pipe breaking caused by errors from gulp plugins
const livereload = require('gulp-livereload'); // Works with browser addon to live reload the page
const autoprefixer = require('gulp-autoprefixer'); // Adds vendor CSS prefixes
const sass = require('gulp-sass'); // Feelin' Sassy?
const cleanCSS = require('gulp-clean-css'); // CSS minifier
const rename = require("gulp-rename"); // For example, to rename styles.css to styles.min.css
const notify = require("gulp-notify"); // Sends message notification to the OS.
const concat = require('gulp-concat'); // Concatonates files
const minify = require('gulp-minify'); // Minify JS using terser
const dotenv = require("dotenv"); // Places .env file into process.env
if (dotenv.config().error) { throw dotenv.config().error; }
console.log(dotenv.config().parsed);

/*
 * buildHTML pipe
*/
function buildHTML() {
  return gulp
    .src([
      './app/src/html/head.html',
      './app/src/html/header.html',
      './app/src/html/pages/**/*',
      './app/src/html/footer.html'
    ])
    .pipe(plumber())
    .pipe(concat('index.html'))
    .pipe(gulp.dest("./app/dist/"))
    .pipe(livereload());
    //.pipe(notify("Gulp: buildHTML finished"));
}

/*
 * buildCSS pipe
*/
function buildCSS() {
  return gulp
    .src([
      './app/src/css/vars.css',
      './app/src/css/base.css',
      './app/src/css/header.css',
      './app/src/css/pages/**/*'
    ])
    .pipe(plumber())
    //.pipe(sass({ outputStyle: "expanded" }))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(cleanCSS())
    .pipe(concat('styles.css'))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("./app/dist/css/"))
    .pipe(livereload());
    //.pipe(notify("Gulp: buildCSS finished"));
}

/*
 * buildJS pipe
*/
function buildJS() {
  return gulp
    .src([
      './app/src/js/jquery.validate.min.js',
      './app/src/js/additional-methods.min.js',
      './app/src/js/formSubmit.js',
      './app/src/js/appState.js',
      './app/src/js/jquery.doc-ready.js',
      './app/src/js/test.js'
    ])
    .pipe(plumber())
    .pipe(concat('scripts.min.js'))
    /*.pipe(minify({
        ext:{
             min:'.min.js'
         },
        noSource: true,
        mangle: true // is it mangling?
    }))*/
    .pipe(gulp.dest("./app/dist/js/"))
    .pipe(livereload());
    //.pipe(notify("Gulp: buildJS finished"));
}

/*
 * buildIMG ipe
*/
function buildIMG() {
  return gulp
    .src("./app/src/img/**/*")
    .pipe(plumber())
    .pipe(gulp.dest("./app/dist/img/"))
    .pipe(livereload());
    //.pipe(notify("Gulp: buildIMG finished"));
}

/*
 * watch function
*/
function watch() {
  livereload.listen();
  gulp.watch("./app/src/html/**/*", buildHTML);
  gulp.watch("./app/src/css/**/*", buildCSS);
  gulp.watch("./app/src/js/**/*", buildJS);
  gulp.watch("./app/src/img/**/*", buildIMG);
}

/*
 * Express server to be called by gulp
*/
function server() {
  require('./express-server.js');
}

const start = gulp.parallel(
  buildHTML,
  buildCSS,
  buildJS,
  buildIMG,
  watch,
  server
);

const rebuild = gulp.series(
  buildHTML,
  buildCSS,
  buildJS,
  buildIMG
);

/*
 * export tasks
*/
exports.default = start;
exports.rebuild = rebuild;
