$(function () {
  var maxHash = $('.card').length;
  $('body').keydown(function(e) {
    if (e.keyCode != 39 && e.keyCode != 37) {
      return;
    }
    var nextHash = 1;
    var currentImage = parseInt(location.hash.split('#')[1],10);
    if (e.keyCode == 37) { // left
      if (currentImage > 1) {
        nextHash = currentImage - 1;
      } else {
        nextHash = 1;
      }
    }
    if (e.keyCode == 39) { // right
      if (currentImage < maxHash) {
        nextHash = currentImage + 1;
      } else {
        nextHash = maxHash;
      }
    }
    location.hash = nextHash;
  });

  // Initialize
  $(function() {
    location.hash = Math.floor(maxHash/2);
  })
});