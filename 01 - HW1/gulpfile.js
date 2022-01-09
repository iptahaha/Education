const gulp = require('gulp');
const del = require('del');


gulp.task('clean', function(cb) {
    del(['dist/*']);
    cb();
})

gulp.task('copy:js', function (cb) {
    gulp.src('./src/**/*.js')
        .pipe(gulp.dest('./dist'))
    cb()
});

gulp.task('watch', function () {
    gulp.watch(['./src/**/*.js'], gulp.series(['clean', 'copy:js']));
})

gulp.task('default', gulp.series(['clean', 'copy:js']))