var gulp = require('gulp');
    imagemin = require ('gulp-imagemin');
   
// image compression

gulp.task('image', function() {
    gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('compressed'));
});

