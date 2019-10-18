const dateformat = require('dateformat');

let now = new Date();
const postDate = dateformat(now, 'longDate');

module.exports = postDate;