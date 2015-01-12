// Generated by CoffeeScript 1.6.3
(function() {
  var onReady, use;

  if (typeof isNodeJs === "undefined" || typeof runTest === "undefined") {
    (function() {
      var root;
      root = typeof global === "undefined" ? window : global;
      if (typeof isNodeJs === "undefined") {
        root.isNodeJs = typeof window === "undefined";
      }
      if (typeof runTest === "undefined") {
        return root.runTest = true;
      }
    })();
  }

  use = isNodeJs ? (function(module) {
    return require(module);
  }) : (function(module) {
    return window[module];
  });

  onReady = function(fn) {
    if (isNodeJs) {
      return process.nextTick(fn);
    } else {
      if (document.readystate !== "complete") {
        return fn();
      } else {
        return setTimeout((function() {
          return onReady(fn);
        }), 17);
      }
    }
  };

  onReady(function() {
    var frame, scale;
    frame = document.getElementById("ifr");
    scale = Math.min(window.innerWidth / 800, window.innerHeight / 480);
    frame.style.msTransform = frame.style.webkitTransform = frame.style.transform = "scale(" + scale + ")";
    return frame.focus();
  });

}).call(this);
