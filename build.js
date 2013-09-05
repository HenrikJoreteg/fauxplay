var bundle = require('browserify')();
var fs = require('fs');


bundle.add('./fauxplay');
bundle.bundle({standalone: 'fauxplay'}).pipe(fs.createWriteStream('fauxplay.bundle.js'));
