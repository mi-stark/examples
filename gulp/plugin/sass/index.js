const through2 = require('through2')
const sass = require('sass')
const gulpIf = require("gulp-if");

function isSass(file){
    if(/^\.scss$/i.test(file.extname)){
        file.extname = '.css';
        return true;
    }
    return false;
}

module.exports = function (){
    return gulpIf(isSass, through2.obj(function(file, encoding, callback) {
        let err = null;
        try {
            if (file.isBuffer()) {
                const code = sass.compileString(file.contents.toString()).css || '';
                file.contents = Buffer.from(code)
            }
        }catch (e){
            err = e;
        }
        callback(err, file);
    }));
};