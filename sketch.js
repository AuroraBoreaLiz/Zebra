var slider;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB,255);
  slider = createSlider(0,225,127);
  // learned check box from this site https://compform.net/noise/
  createP("Some Hats?");
  hat_checkbox = createCheckbox("Hats", false);
  createP("Some Sunglasses?");
  sunglass_checkbox = createCheckbox("Sunglasses", false);
  

}
  
function draw(){
  background(220);
  noStroke();
  rectMode(CENTER);
  let gridSize = 100;
  size = .5;
   
  for (let row = gridSize; row <= width - gridSize; row += gridSize) {
    size = random(0.3,.5);
    for (let col = gridSize; col <= height - gridSize; col += gridSize) {
      size = random(0.3,.5);
      var thisSize = size * (0.2 + 2 * noise(row + 3, col + 0.5));
      var c = color(noise(row,col), 225 * noise(row + 2, col), 225,200);
      var turnDir = (noise(row,col) > 0.5);
      var maybeHat = (noise(row,col) > 0.5);
      var maybeShades = (noise(row,col) > 0.5);
      zebraTime(row,col,thisSize,turnDir);
      squareTime(row,col,thisSize,c,turnDir);
      hatTime(row,col,thisSize,c,turnDir,maybeHat);
      sunglassesTime(row,col,thisSize,c,turnDir,maybeShades);
      
    }
  }
}

function zebraTime(row,col,size,turnDir){
  push();
    translate(row,col);
    var r = frameCount * 0.05;
    if(turnDir) { 
      rotate(r); 
    }
    else { 
      rotate( -r ); 
    }
    zebra(size); 
  pop();


}

function squareTime(row,col,size,color,turnDir,n){
  push();
    translate(row,col);
    var r = frameCount * 0.05;
    if(turnDir) { 
      rotate(r); 
    }
    else { 
      rotate( -r ); 
    }
    blendMode(LIGHTEST);
    fill(slider.value(), 225,225,127);
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


function sunglassesTime(row,col,size,color,turnDir,maybeShade){
  if (sunglass_checkbox.checked()) {
    push();
      translate(row,col);
      var r = frameCount * 0.05;
      if(turnDir) { 
        rotate(r); 
      }
      else { 
        rotate( -r ); 
      }
      if(maybeShade) {
        sunglasses();
      }
      else { 
      }
    pop();

  }
  

}


