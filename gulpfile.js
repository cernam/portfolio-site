var gulp = require('gulp');
var shell = require('gulp-shell');
var browserSync = require('browser-sync').create();

gulp.task('build', shell.task(['jekyll build --watch']));

gulp.task('serve', function(){
    var options = {
        server: {baseDir: '_site/'},
        port: process.env.PORT,
        ui: { port: 8081 }
    };
    browserSync.init(options);
    gulp.watch('_site/**/*.*').on('change', browserSync.reload);
});

gulp.task('default', ['build', 'serve']);