function setup() {
  createCanvas(400, 400);
  createP("Some Hats?");
  hat_checkbox = createCheckbox("Hats", false);

}
  
function draw(){
  background(220);
  noStroke();
  rectMode(CENTER);
  let gridSize = 80;
  let xoff = 0.0;
  size = .5;
   
  for (let row = gridSize; row <= width - gridSize; row += gridSize) {
    size = random(0.3,.5);
    for (let col = gridSize; col <= height - gridSize; col += gridSize) {
      size = random(0.3,.5);
      xoff = xoff + 0.01;
      let n = noise(xoff)*width
      var thisSize = size * (0.2 + 2 * noise(row + 3, col + 0.5));
      var c = color(noise(row,col), 225 * noise(row + 2, col), 225,200);
      var turnDir = (noise(row,col) > 0.5);
      var maybeHat = (noise(row,col) > 0.5);
      zebraTime(row,col,thisSize,c,turnDir);
      squareTime(row,col,thisSize,c,turnDir,n);
      hatTime(row,col,thisSize,c,turnDir,maybeHat);
      
    }
  }
}

function zebraTime(row,col,size,color,turnDir){
  push();
    translate(row,col);
    var r = frameCount * 0.05;
    if(turnDir) { rotate(r); }
    else { rotate( -r ); }
    zebra(size); 
  pop();


}

function squareTime(row,col,size,color,turnDir,n){
  push();
    translate(row,col);
    var r = frameCount * 0.05;
    if(turnDir) { rotate(r); }
    else { rotate( -r ); }
    blendMode(LIGHTEST);
    fill(color);
    mySquare(); 
  pop();

}


function hatTime(row,col,size,color,turnDir,maybeHat){
  if (hat_checkbox.checked()) {
      push();
    translate(row,col);
    var r = frameCount * 0.05;
    if(turnDir) { 
      rotate(r); 
    }
    else { 
      rotate( -r ); 
    }
    if(maybeHat) {
      
    }
    else {
      hat(); 
    }
  pop();

  }
  

}
