const ejs = require('gulp-ejs');
const ejsData = require('./ejs-data');

module.exports = function (){
    return ejs(ejsData)
}