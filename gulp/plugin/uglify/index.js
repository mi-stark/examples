const uglify = require('gulp-uglify');
const gulpIf = require("gulp-if");

function isJs(file){
    return /^\.jsx?$/i.test(file.extname);
}

module.exports = function (){
    return gulpIf(isJs, uglify());
};