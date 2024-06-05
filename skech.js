function setup() {
    createCanvas(600, 600);
    background("rgb(202,250,246)")
  }
  
  function draw() {
    stroke("green");
    fill("black");
    
    
    if (mouseIsPressed){
      rect(mouseX, mouseY, 20, 35);
    }
    
  }