var gulp = require('gulp');
    imagemin = require ('gulp-imagemin');
   
// image compression

gulp.task('image', function() {
    gulp.src('build/original/*')
        .pipe(imagemin())
        .pipe(gulp.dest('root/images'));
});

