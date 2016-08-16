var moment = require('moment');

console.log(moment().format());

// unix timestamp
var now  = moment();

console.log('current timestamp', now.unix());

var timestamp = 1471339412;
var currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format('MMM D, YY @ h:mm a'));

// January 3rd, 2016 @ 12:13 AM
console.log('current moment', currentMoment.format('MMMM Do, YYYY @ h:mm A'));
