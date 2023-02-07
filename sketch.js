
function setup() {
  createCanvas(400, 400);
  background(220);
  let gridSize = 80;
  size = .5;
  

  for (let x = gridSize; x <= width - gridSize; x += gridSize) {
    size = random(0.3,.5);
    for (let y = gridSize; y <= height - gridSize; y += gridSize) {
      size = random(0.3,.5);
      zebra(x, y, size);
      
    }
  }
}
