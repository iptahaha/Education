const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const dartSass = require('sass');
const debug = require('gulp-debug');
const del = require('del');
const fileInclude = require('gulp-file-include');
const gulp = require('gulp');
const gulpSass = require('gulp-sass');
const removeCode = require('gulp-remove-code');
const sass = gulpSass(dartSass);

const SRC = './src';
const DIST = './dist';

const paths = {
    build: {
        root: `${DIST}/`,
        css: `${DIST}/css/`,
        js: `${DIST}/js/`,
        html: `${DIST}/`
    },
    src: {
        scss: `${SRC}/scss/style.scss`,
        js: `${SRC}/js/**/*.js`,
    },
    compileWatch: {
        scss: `${SRC}/scss/**/*.scss`,
        js: `${SRC}/js/**/*.js`,
        html: `${SRC}/html/*.html`,
    },
    reloadWatch: {
        css: `${DIST}/**/*.css`,
        js: `${DIST}/**/*.js`,
        html: `${DIST}/*.html`,
    },
};

const styles = (paths, outputFilename, outputPath) => {
    return gulp
        .src(paths)
        .pipe(sass().on('error', sass.logError))
        .pipe(debug({title: 'scss:'}))
        .pipe(concat(outputFilename))
        .pipe(gulp.dest(outputPath));
};

const scripts = (paths, outputFilename, outputPath) => {
    return gulp
        .src(paths)
        .pipe(debug({title: 'js:'}))
        .pipe(babel({presets: ['@babel/env']}))
        .pipe(concat(outputFilename))
        .pipe(debug({title: 'jsconcat:'}))
        .pipe(removeCode({ production: true }))
        .pipe(gulp.dest(outputPath));
};

gulp.task('clean', (cb) => {
    del.sync([paths.build.root]/*, { dot: true }*/)
    cb()
});

gulp.task('styles', (cb) => {
    styles([paths.src.scss], 'style.css', paths.build.css);
    cb();
});

gulp.task('scripts', (cb) => {
    scripts([paths.src.js], 'script.js', paths.build.js, false);
    cb();
});

gulp.task('fileInclude', (cb) => {
    gulp.src([SRC + '/html/index.html'])
        .pipe(fileInclude({prefix: '@@', basepath: '@file'}))
        .pipe(gulp.dest(DIST));
    cb();
});

gulp.task('build', gulp.series('clean', 'fileInclude', gulp.parallel('styles', 'scripts')));

gulp.task('watch', () => {
    gulp.watch(paths.compileWatch.html, gulp.series('fileInclude'));
    gulp.watch(paths.compileWatch.scss, gulp.series('styles'));
    gulp.watch(paths.compileWatch.js, gulp.series('scripts'));
});

gulp.task('serve', () => {
    browserSync.init({server: {baseDir: './dist/'}});

    browserSync.watch(paths.reloadWatch.css).on('change', browserSync.reload);
    browserSync.watch(paths.reloadWatch.js).on('change', browserSync.reload);
    browserSync.watch(paths.reloadWatch.html).on('change', browserSync.reload);
});

gulp.task('default', gulp.series('build', gulp.parallel('watch', 'serve')));