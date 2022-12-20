const {join} = require('path');

/**
 * @type {import("puppeteer").Configuration}
 */
module.exports = {
    cacheDirectory: join(__dirname, '.cache', 'puppeteer'),
};

puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
});