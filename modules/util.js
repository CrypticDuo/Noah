var Util = {
  getRandomInt: function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },
  getRandomArbitrary: function(min, max) {
    return Math.random() * (max - min) + min;
  },
  rgbToString: function(r, g, b) {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
}
