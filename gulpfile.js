'use strict';
/*jslint node: true */
const   gulp = require("gulp"),
        browsersync = require('browser-sync').create(),
        g_babel = require('gulp-babel'),
        uglify = require('gulp-uglify'),
        concat = require('gulp-concat'),
        jshint = require('gulp-jshint'),
        watch = require('gulp-watch'),
        livereload = require('gulp-livereload'),
        connect = require('gulp-connect');

gulp.task('transpile_app', () =>{
    let app_src = 'js/**/*.js', app_dest = 'js_build1';

    gulp.src(app_src)
        .pipe(g_babel({
            presets: ['env']
        }))
        .pipe(uglify())
        // .pipe(concat('one.js'))
        .pipe(gulp.dest(app_dest))
});

gulp.task('lint', () => {
    return gulp.src('js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('watch', () => {
    return watch('js/**/*.js', {ignoreInitial: false})
        .pipe(gulp.dest('build'));
});

gulp.task('livereload', () => {
    gulp.src('js/*.js')
        .pipe(g_babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('js_build3'))
        .pipe(livereload());
});





