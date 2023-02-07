function setup() {
  createCanvas(400, 400);
  background(220);
  let gridSize = 80;
  size = .5;
  

  for (let row = gridSize; row <= width - gridSize; row += gridSize) {
    size = random(0.3,.5);
    for (let col = gridSize; col <= height - gridSize; col += gridSize) {
      size = random(0.3,.5);
      zebra(row, col, size);
      
    }
  }
}

