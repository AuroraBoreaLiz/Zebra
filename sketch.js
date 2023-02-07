var n = 8;
function setup() {
  createCanvas(400,400);
}

function draw() {
  background(200);
  var size = 0.5 * (width/n);
  rectMode(CENTER);
  for(var i = 0; i < n; i++) {  // which column?
    for(var j = 0; j < n; j++) {  // which row?
      var x = (0.5 + i) * (2 * size);
      var y = (0.5 + j) * (2 * size);
      var thisSize = size * (0.2 + 2 * noise(x + 83.5, y + 0.5));
      var c = color(255, 255 * noise(x + 295, y), 0);
      var turnDir = (noise(x,y) > 0.5);
      drawShapes(x, y, thisSize, c, turnDir);
    }
  }
}

function drawShapes(x, y, size, color, turnDir) {
  push();
  translate(x,y);
  var r = frameCount * 0.05;
  if(turnDir) { rotate(r); }
  else { rotate( -r ); }
  zebra(); // make a square
  fill(color);
  ellipse(0, 0, size/2, size/2); // circle;
  pop();
}
