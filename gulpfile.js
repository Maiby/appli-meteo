const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const webp = require('gulp-webp');



//compile scss into css
async function style() {
    return gulp.src('scss/*.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream());
}

async function image() {
    return gulp.src('img/*.{png, gif,jpg}')
        .pipe(webp())
        .pipe(gulp.dest('/dist'));
}

function watch() {
    browserSync.init({
        server: {
           baseDir: "./",
           index: "/index.html"
        }
    });
    gulp.watch('scss/*.scss', style)
    gulp.watch('js/script.js').on('change',browserSync.reload);
    gulp.watch('/*.html').on('change',browserSync.reload);
    // gulp.watch('./js/*.js').on('change', browserSync.reload);
}



exports.style = style;
exports.default = watch;
exports.image = image;