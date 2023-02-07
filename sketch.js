var n=8;

function setup(){
  createCanvas(windowWidth,windowHeight);
  background(220);
  for (var i=0; i < 5; i++) {
  push();
    translate(windowWidth/2, i*300);
    drawZebra();
  pop();
  }
}

function drawZebra(){
  zebra();
}

