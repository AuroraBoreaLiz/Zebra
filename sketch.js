function setup() {
  createCanvas(400, 400);
}
  
function draw(){
  background(220);
  noStroke();
  rectMode(CENTER);
  let gridSize = 80;
  size = .5;
  for (let row = gridSize; row <= width - gridSize; row += gridSize) {
    size = random(0.3,.5);
    for (let col = gridSize; col <= height - gridSize; col += gridSize) {
      size = random(0.3,.5);
      blendIt(row,col,size);
      

      
    }
  }
}

function blendIt(row,col,size){
  zebra(row, col, size);
    push();
      blendMode(LIGHTEST);
      fill( random(0,225), random(0,225), random(0,225), 200);
      rect(row,col,50,50);
    pop();
}
