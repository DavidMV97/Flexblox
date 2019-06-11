//importacion de las dependenciasque estan en el archivo .json


let gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

sass.compiler = require('node-sass');

/*creamos una tarea 

gulp.task('sass', () => {
    //pipe = indica la tarea que se va a ejecutar
        src('scss/app.scss')
        .pipe(autoprefixer({

        }))

        .pipe(sass({
            includePaths: ['scss']
        }))
         
        //dest : carpeta de destino 
        .pipe(dest('css')) ; 
}); 

//se ejecutara prmero la tarea de sass , pasandola como parametro 

gulp.task('watch', ['sass'], () => {
    watch(["scss/*.scss"], ['sass']);
});
*/

gulp.task('sass', () => {
    gulp.src('scss/app.scss')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sass({
            includePaths: ['scss']
        }))
        .pipe(gulp.dest('css'));
});



gulp.task('watch', ['sass'], () => {
    gulp.watch(["scss/*.scss"], ['sass']);
});