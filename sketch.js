function setup(){
  createCanvas(400,400);
  background(220);
  scale(0.5);
  var size = 0.5 * (width/n);
  for(var i = 0; i < n; i++) {
    for(var j = 0; j < n; j++) {
      var x = (0.5 + i) * (2 * size);
      var y = (0.5 + j) * (2 * size);
      drawZebra(x, y, size);
    }
  }
}

function drawZebra(x,y,size){
  zebra();
}

