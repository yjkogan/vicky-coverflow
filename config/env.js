var fs = require('fs');

function set(name, value) {
  if (!(name in process.env)) {
    process.env[name] = value;
  }
}

// ---------------------- //
// --  Server Settings -- //
// ---------------------- //

set('NODE_ENV', 'development');

// The port for the HTTP server to listen on
set('PORT', 8000);

if (fs.existsSync(__dirname + '/tumblr.js')) {
	var tumblr = require('./tumblr');
	set('TUMBLR_KEY', tumblr.TUMBLR_KEY);
	set('TUMBLR_SECRET', tumblr.TUMBLR_SECRET);
}