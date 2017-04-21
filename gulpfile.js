'use strict';

const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

gulp.task('concatScripts', function(){
   gulp.src([
       'js/main.js'
   ]) 
   .pipe(concat('app.js'))
   .pipe(gulp.dest('js'));    
});


gulp.task('minifyScripts', function() {
   gulp.src('js/app.js') 
   .pipe(uglify().on('error', function(e){
       console.log(e);
     }))
    .pipe(rename('app.min.js'))
   .pipe(gulp.dest('js'));    
});


gulp.task("default", ['hello'], function(){
    console.log('this is the default task');
});