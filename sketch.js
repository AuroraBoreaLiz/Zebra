function setup() {
  createCanvas(400, 400);
  colorMode(HSB,255);
  
  // learned slider from https://codepen.io/newtonstreet/pen/BzGjYR
  createP("Stripe Color")
  slider = createSlider(0,225,127);
  
  // learned check box from this site https://compform.net/noise/
  createP("Some Hats?");
  hat_checkbox = createCheckbox("Hats", false);
  
  createP("Some Sunglasses?");
  sunglass_checkbox = createCheckbox("Sunglasses", false);
  
  // You spin me right 'round, baby, right 'round 
  createP("Rotation Speed")
  slider2 = createSlider(0,1.5,0.05,0);
  
  var sizeA = 0.5;
  

}
  
function draw(){
  background(220);
  noStroke();
  rectMode(CENTER);
  let gridSize = 100;
  let sizeA = 0.5;
  
  
   
  //Grids from https://p5js.org/examples/control-embedded-iteration.html
  for (let row = gridSize; row <= width - gridSize; row += gridSize) {
    
    for (let col = gridSize; col <= height - gridSize; col += gridSize) {
      sizeA = noise(row+33, col);
      
      var thisSize = sizeA * (0.2 + 2 * noise(row + 3, col + 5));
      
      //color is HSB
      var c = noise(row+15,col+50)*360;
      
      //From class example
      var turnDir = (noise(row,col) > 0.5);
      
      //used the class turnDir to split the hats and shades
      var maybeHat1 = (noise(row+277,col) < 0.5);
      var maybeHat2 = (noise(row,col+23) < 0.5);
      var maybeShades = (noise(row+27,col) > 0.5);
      
      //creating different functions for each layer to prevent transform issues
      zebraTime(row,col,thisSize,turnDir);
      squareTime(row,col,thisSize,c,turnDir);
      hatTime1(row,col,thisSize,c,turnDir,maybeHat1);
      hatTime2(row,col,thisSize,c,turnDir,maybeHat2);
      sunglassesTime(row,col,thisSize,c,turnDir,maybeShades);
      
    }
  }
}

//draw our rotating zebras. Can control rotation speed. 
function zebraTime(row,col,thisSize,turnDir){
  push();
    translate(row,col);
    scale(thisSize);
    var r = frameCount * slider2.value();
    if(turnDir) { 
      rotate(r); 
    }
    else { 
      rotate( -r ); 
    }
    zebra(thisSize); 
  pop();


}

//draw squares that sit on top of zebra. Use blend modes to change dark color of stripes. Can control stripe color and rotation speed. 
function squareTime(row,col,thisSize,c,turnDir,n){
  push();
    translate(row,col);
    var r = frameCount * slider2.value();
    if(turnDir) { 
      rotate(r); 
    }
    else { 
      rotate( -r ); 
    }
    blendMode(LIGHTEST);
    fill(slider.value(), 225,c-60,127);
    mySquare(); 
  pop();

}

//draw some red hats for the zebras. Can control with rotation slider. 
function hatTime1(row,col,thisSize,c,turnDir,maybeHat1){
  if (hat_checkbox.checked()) {
    push();
      translate(row,col);
      scale(thisSize);
      var r = frameCount* slider2.value();
      if(turnDir) { 
        rotate(r); 
      }
      else { 
        rotate( -r ); 
      }
      if(maybeHat1) {

      }
      else {
        hat(); 
      }
    pop();

  }
  

}

//draw some red hats for the zebras. Can control with rotation slider. 
function hatTime2(row,col,thisSize,c,turnDir,maybeHat2){
  if (hat_checkbox.checked()) {
    push();
      translate(row,col);
      scale(thisSize);
      var r = frameCount* slider2.value();
      if(turnDir) { 
        rotate(r); 
      }
      else { 
        rotate( -r ); 
      }
      if(maybeHat2) {

      }
      else {
        hat2(); 
      }
    pop();

  }
  

}

//draw some sunglasses on the zebras. Can control with rotation slider. 
function sunglassesTime(row,col,thisSize,c,turnDir,maybeShade){
  if (sunglass_checkbox.checked()) {
    push();
      translate(row,col);
      scale(thisSize);
      var r = frameCount * slider2.value();
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
