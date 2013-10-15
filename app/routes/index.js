var app  = require(APP_ROOT + '/app')
  , tumblr = require('tumblr.js');

// Base Route
app.get('/', function(req, res, next) {

  var MAX_PHOTOS = 20;

  var client = new tumblr.Client({
    consumer_key: process.env['TUMBLR_KEY'],
    consumer_secret: process.env['TUMBLR_SECRET']
  });


  client.posts('vickymakesstuff', {type: 'photo'}, function(err, data) {
    if (err) {
      return next(err);
    }

    var posts = data.posts;
    var photosArray = [];
    for (var i = 0; i < posts.length; i++) {
      // No more than MAX_PHOTOS photos for now
      if (photosArray.length > MAX_PHOTOS) {
        break;
      }
      var photos = posts[i].photos;
      for (var j = 0; j < photos.length; j++) {
        var url = photos[j].alt_sizes[0].url;
        var big_url = photos[j].original_size.url;
        photosArray.push({url: url, big_url: big_url, number: photosArray.length + 1})
      }
    }
    return res.render('index', {photos: photosArray});
  });


});