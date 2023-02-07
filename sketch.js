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
  

}
  
function draw(){
  background(220);
  noStroke();
  rectMode(CENTER);
  let gridSize = 100;
  size = 0.5;
   
  //Grids from https://p5js.org/examples/control-embedded-iteration.html
  for (let row = gridSize; row <= width - gridSize; row += gridSize) {
    size = random(0.3,0.5);
    
    for (let col = gridSize; col <= height - gridSize; col += gridSize) {
      size = random(0.3,0.5);
      
      var thisSize = size * (0.2 + 2 * noise(row + 3, col + 0.5));
      
      //color noise from in class code. Ended up not using once slider. Would like to integrate with slider somehow...
      var c = color(noise(row,col), 225 * noise(row + 2, col), 225,200);
      
      var turnDir = (noise(row,col) > 0.5);
      //used the class turnDir to split the hats and shades
      var maybeHat = (noise(row,col) > 0.5);
      var maybeShades = (noise(row,col) > 0.5);
      
      //creating different functions for each layer to prevent transform issues
      zebraTime(row,col,thisSize,turnDir);
      squareTime(row,col,thisSize,c,turnDir);
      hatTime(row,col,thisSize,c,turnDir,maybeHat);
      sunglassesTime(row,col,thisSize,c,turnDir,maybeShades);
      
    }
  }
}

//draw our rotating zebras. Can control rotation speed. 
function zebraTime(row,col,thisSize,turnDir){
  push();
    translate(row,col);
    var r = frameCount * slider2.value();
    if(turnDir) { 
      rotate(r); 
    }
    else { 
      rotate( -r ); 
    }
    zebra(size); 
  pop();


}

//draw squares that sit on top of zebra. Use blend modes to change dark color of stripes. Can control stripe color and rotation speed. 
function squareTime(row,col,size,color,turnDir,n){
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
    fill(slider.value(), 225,225,127);
    mySquare(); 
  pop();

}

//draw some red hats for the zebras rotating counter clock-wise. Can control with rotation slider. 
function hatTime(row,col,size,color,turnDir,maybeHat){
  if (hat_checkbox.checked()) {
    push();
      translate(row,col);
      var r = frameCount* slider2.value();
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

//draw some sunglasses ont he zebras rotating clockwise. Can control with rotation slider. 
function sunglassesTime(row,col,size,color,turnDir,maybeShade){
  if (sunglass_checkbox.checked()) {
    push();
      translate(row,col);
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
