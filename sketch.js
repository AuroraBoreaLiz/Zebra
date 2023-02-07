var n = 8;
function setup() {
  createCanvas(400,400);
  background(200);
  var size = 0.5 * (width/n);
  rectMode(CENTER);
  for(var i = 0; i < n; i++) {
    for(var j = 0; j < n; j++) {
      var x = (0.5 + i) * (2 * size);
      var y = (0.5 + j) * (2 * size);
      zebra(x, y, size);
    }
  }
}

