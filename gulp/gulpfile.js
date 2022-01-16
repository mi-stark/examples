const {src, dest, watch, series} = require('gulp');
const server = require('gulp-devserver')
const clean = require('gulp-clean');
const ejs = require('./plugin/ejs');
const sass = require('./plugin/sass');
const babel = require('./plugin/babel');
const uglify = require('./plugin/uglify');

function clearDist(){
    return src('dist', {allowEmpty: true}).pipe(clean());
}
function compile(){
    return src('src/**/*')
        .pipe(ejs())
        .pipe(sass())
        .pipe(babel())
        .pipe(dest('dist'));
}

function serve(){
    return src('dist').pipe(server({
        port: 8000,
        open: false,
        clientConsole: true,
        listdir: false
    }));
}
function watchSrc(){
    const watcher = watch('src/**/*');
    watcher.on('change', function (path){
        src(path)
            .pipe(ejs())
            .pipe(sass())
            .pipe(babel())
            .pipe(dest('dist'));
    });
    watch('template/**/*', compile);
}

exports.dev = series(clearDist, compile, serve, watchSrc);
exports.build = series(clearDist, function (){
    return src('src/**/*')
        .pipe(ejs())
        .pipe(sass())
        .pipe(babel())
        .pipe(uglify())
        .pipe(dest('dist'));
});