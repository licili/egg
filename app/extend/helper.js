const moment = require('moment');
moment.locale('zh-cn');

exports.relative = time => moment(new Date(time)).fromNow()