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
      var thisSize = size * (0.2 + 2 * noise(row + 3, col + 0.5));
      var c = color(noise(row,col), 225 * noise(row + 2, col), 225,200);
      var turnDir = (noise(row,col) > 0.5);
      zebraTime(row,col,thisSize,c,turnDir);
      hatTime(row,col,thisSize,c,turnDir);

      

      
    }
  }
}

function zebraTime(row,col,size,color,turnDir){
  push();
    translate(row,col);
    var r = frameCount * 0.05;
    if(turnDir) { rotate(r); }
    else { rotate( -r ); }
    zebra(); 
  pop();


}

function zebraTime(row,col,size,color,turnDir){
  push();
    translate(row,col);
    var r = frameCount * 0.05;
    if(turnDir) { rotate(r); }
    else { rotate( -r ); }
    //blendMode(LIGHTEST);
    fill(color);
    zebra(); 
  pop();

}


function hatTime(row,col,size,color,turnDir){
  push();
    translate(row,col);
    var r = frameCount * 0.05;
    if(turnDir) { rotate(r); }
    else { rotate( -r ); }
    hat(); 
  pop();


}
