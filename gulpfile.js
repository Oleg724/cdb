const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const pump = require('pump');

function scssToCss (cb) {
    gulp.src('./src/scss/**/*.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(autoprefixer({
            browsers: ['> 0.1%'],
            cascade: false
        }))
        .pipe(gulp.dest('./dist/'))
        .pipe(browserSync.stream())
    cb();
}

function watchSass () {
    gulp.watch('./src/scss/**/*', scssToCss)
}

function watchFiles () {
    watchSass();
    gulp.watch('./**/*.html', reloadBrowser);
}

function server (cb) {
    browserSync.init({
        server: {
            baseDir: './dist'
        },
        port: 5000,
        open: true,
    });

    cb();
}

function reloadBrowser (cb) {
    browserSync.reload();

    cb();
}

gulp.task('html', function() {
    return gulp.src('dist/*.html')
        .pipe(gulp.dest('build/'));
});

gulp.task('js', function() {
    return gulp.src('dist/*.js')
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('build/'));
});

gulp.task('css', function() {
    return gulp.src('dist/*.css')
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('build/'));
});

gulp.task('compress', function() {
    return gulp.src('dist/images/*.{png,jpg,svg}')
        .pipe(imagemin())
        .pipe(gulp.dest('build/images/'));
});

gulp.task('build', gulp.parallel('html', 'css', 'js', 'compress'));

exports.default = gulp.parallel(server, watchFiles);