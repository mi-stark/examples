const path = require('path');
const resolve = p => path.resolve(__dirname, '../../', p);

module.exports = {
    BASE_URL: '/',
    HEADER: resolve('template/include-header.html'),
    FOOTER: resolve('template/include-footer.html'),
}