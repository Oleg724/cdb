const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const htmlmin = require('gulp-htmlmin');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');

function scssToCss (cb) {
    gulp.src('./src/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(autoprefixer({
            browsers: ['> 0.1%'],
            cascade: false
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/'))
        .pipe(browserSync.stream())
    cb();
}

function minifyJs(cb) {
    gulp.src('./src/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('script.js'))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/'))
        .pipe(browserSync.stream());
    cb();
}

function watchSass() {
    gulp.watch('./src/scss/**/*', scssToCss)
}

function watchJs() {
    gulp.watch('./src/js/**/*.js', minifyJs)
}

function watchFiles() {
    watchSass();
    watchJs();
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
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('build/'));
});

gulp.task('js', function() {
    return gulp.src('dist/*.js')
        .pipe(gulp.dest('build/'));
});

gulp.task('css', function() {
    return gulp.src('dist/*.min.css')
        .pipe(cssnano())
        .pipe(gulp.dest('build/'));
});

gulp.task('compress', function() {
    return gulp.src('dist/images/*.{png,jpg,svg}')
        .pipe(imagemin())
        .pipe(gulp.dest('build/images/'));
});

gulp.task('copylibs', function() {
    return gulp.src('dist/libs/**/*.*')
        .pipe(gulp.dest('build/libs/'));

});

gulp.task('build', gulp.parallel('html', 'css', 'js', 'compress', 'copylibs'));

exports.default = gulp.parallel(server, watchFiles);