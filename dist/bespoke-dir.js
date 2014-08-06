/*!
 * bespoke-dir v0.0.0
 *
 * Copyright 2014, Ryan Seddon
 * This content is released under the MIT license
 * 
 */

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self);var o=n;o=o.bespoke||(o.bespoke={}),o=o.plugins||(o.plugins={}),o.dir=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
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

},{}]},{},[1])
(1)
});