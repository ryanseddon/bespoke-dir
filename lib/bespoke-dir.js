module.exports = function() {

  return function(deck) {
    var parent = deck.parent,
        lastSlide = 0;

    parent.classList.add('bespoke-dir-next');

    function direction(dir) {
      var dirClassPrefix = 'bespoke-dir-',
          dirClass = dirClassPrefix+dir,
          oppDirClass = dirClassPrefix+(dir === 'next' ? 'prev' : 'next');

      if(!parent.classList.contains(dirClass)) {
        parent.classList.add(dirClass);
      }

      parent.classList.remove(oppDirClass);
    }

    deck.on('activate', function(e) {
      if(lastSlide > e.index) {
        direction('prev');
      } else {
        direction('next');
      }

      lastSlide = e.index;
    });
  };

};
