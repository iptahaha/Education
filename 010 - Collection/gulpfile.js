const path = require('path');
const del = require('del');
const gulp = require('gulp');
const through = require('through2');
const fileInclude = require('gulp-file-include');
const browserSync = require('browser-sync').create();
const ts = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const { dest } = require("gulp");
const SRC = './src';
const BUILD = './build';

const paths = {
    build: {
        root: `${BUILD}/`,
        html: `${BUILD}/`,
        js: `${BUILD}/js`
    },
    src: {
        ts: `${SRC}/ts/index.ts`,
    },
    compileWatch: {
        ts: `${SRC}/ts/**/*.ts`,
        html: `${SRC}/html/*.html`,
    },
    reloadWatch: {
        js: `${BUILD}/**/*.js`,
        html: `${BUILD}/*.html`,
    },
};

function compileTypescript() {
    const tsProject = ts.createProject(path.resolve(process.cwd(), './tsconfig.json'));
    const project = tsProject();
    return tsProject
        .src()
        .pipe(sourcemaps.init())
        .pipe(project)
        .pipe(sourcemaps.write({
            sourceRoot: (file) => {
                const sourceFile = path.join(file.cwd, 'src', file.sourceMap.file)
                return path.relative(path.dirname(sourceFile), file.cwd)
            }
        }))
        .pipe(gulp.dest(paths.build.js))
}

gulp.task('clean', (cb) => {
    del.sync([paths.build.root]/*, { dot: true }*/)
    cb()
});

gulp.task('scripts', (cb) => {
    compileTypescript();
    cb();
});

gulp.task('fileInclude', (cb) => {
    gulp.src([SRC + '/html/index.html'])
        .pipe(fileInclude({ prefix: '@@', basepath: '@file' }))
        .pipe(gulp.dest(BUILD));
    cb();
});

gulp.task('build', gulp.series('clean', gulp.parallel('scripts', 'fileInclude')));

gulp.task('watch', () => {
    gulp.watch(paths.compileWatch.html, gulp.series('fileInclude'));
    gulp.watch(paths.compileWatch.ts, gulp.series('scripts'));
});

gulp.task('serve', () => {
    browserSync.init({ server: { baseDir: './build/' } });
    browserSync.watch(paths.reloadWatch.js).on('change', browserSync.reload);
    browserSync.watch(paths.reloadWatch.html).on('change', browserSync.reload);
});

gulp.task('default', gulp.series('build', gulp.parallel('watch', 'serve')));