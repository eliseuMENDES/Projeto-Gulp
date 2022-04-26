const gulp = require('gulp')
const webserver = require('gulp-webserver')
//const watch = require('gulp-watch')
const {watch} = require('gulp')

function servidor(cb){
    return gulp.src('build')
    .pipe(webserver({
        port:7070,
        open:true,
        livereload: true,
    }))
}

//function monitorarArquivos(cb){
//    watch('src/**/.html', () => gulp.series('appHTML')())
//    watch('src/**/.scss', () => gulp.series('appCSS')())
//    watch('src/**/.js', () => gulp.series('appJS')())
//    watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG')())

//    return cb()
//}

//Arrow function nao funciona corretamente no babel por causa do typescript

function monitorarArquivos(cb){
    watch('src/**/*.html', gulp.series('appHTML'))
    return cb()
}



module.exports = {
    monitorarArquivos,
    servidor
}