/**
 * Created by qiyubu on 2016/6/7.
 */
var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    // jshint = require('glup-jshint'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    postcss = require('gulp-postcss'),
    px2rem = require('postcss-px2rem'),
    del = require('del'),
    autoprefixer = require('gulp-autoprefixer');

//css添加前缀、压缩、重命名
gulp.task('style', function () {
    //noinspection JSUnresolvedFunction
    return gulp.src('src/css/1.css')
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('dist/assets/css'))
        .pipe(postcss([px2rem({remUnit: 75})]))/*px转成rem*/
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('dist/assets/css'))
        .pipe(notify({message: 'Style task complete'}))

});
/*CSS中PX转变为rem*/
gulp.task('px2rem', function() {
    
    return gulp.src('src/css/*.css')
        .pipe(postcss([px2rem({remUnit: 75})]))
        .pipe(gulp.dest('dist/assets/css'));
});
//js合并和压缩
gulp.task('script', function () {
    return gulp.src('src/scripts/**/*.js')
        // .pipe(jshint())
        // .pipe(jshint.reporter('default'))
        .pipe(concat(main.js))
        .pipe(gulp.dest('dist/assets/js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('dist/assets/js'))
        .pipe(notify({message: 'Scripts task complete'}))
});
//压缩图片
gulp.task('image', function () {
    return gulp.src('src/images/**/*')
        .pipe(cache(imagemin({optimizationLevel: 3, progressive: true, interlaced: true})))
        .pipe(gulp.dest('dist/assets/img'))
        .pipe(notify({message: 'Image task complete'}))
});
//清除文件
gulp.task('clean', function (cb) {
    del(['dist/assets/css', 'dist/assets/js', 'dist/assets/img'], cb)
});


// Default task
gulp.task('default', function () {
    gulp.start('style', 'script', 'image');
});
