// var n=5;

function setup(){
  createCanvas(600,600);
  background(220);
  
  // var d = 80
  var size = .5
  // var startX = 50
  // var startY = 50
  
  var marginX = 80
  var marginY = 80
  
  for(var col = marginX; col <= width - marginX; col+= marginX) {
    size = random(0.3,.5);
    for(var row = marginY; row <= height - marginY; row+=marginY) {
      size = random(0.3,.5);
      var x = col
      var y = row
      zebra(x, y, size)
    }
  }
