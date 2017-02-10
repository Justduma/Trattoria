var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    cssmin = require('gulp-cssmin');

var path = {
    src: {
        html: 'dev/*.html',
        js: 'dev/js/main.js',
        style: 'dev/scss/style.scss',
        img: 'dev/img/**/*.*',
        fonts: 'dev/fonts/**/*.*'
    },
    build: {
        html: 'build',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts/'
    },
    watch: {
        html: 'dev/**/*.html',
        js: 'dev/js/**/*.js',
        style: 'dev/scss/**/*.scss',
        img: 'dev/img/**/*.*',
        fonts: 'dev/fonts/**/*.*'
    }
};
gulp.task('html', function() {
    gulp.src(path.src.html)
        .pipe(gulp.dest(path.build.html))
        .pipe(browserSync.reload({
            stream: true
        }))
});


gulp.task('sass', function() {
    return gulp.src(path.src.style)
        .pipe(sass())
        .pipe(gulp.dest(path.build.css))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('jscript', function() {
    gulp.src(path.src.js)
        .pipe(gulp.dest(path.build.js))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('watch', ['browserSync', 'sass', 'html', 'jscript'], function() {
    gulp.watch(path.watch.html, ['html']);
    gulp.watch(path.watch.style, ['sass']);
    gulp.watch(path.watch.js, ['jscript']);
})

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: 'build'
        },
    })
});
