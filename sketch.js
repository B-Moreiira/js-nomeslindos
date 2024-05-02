function setup() {
    createCanvas(300, 300);
     background("gray");
  }
  
  
  function draw() {
    
    stroke ("black");
    fill ("brown");
   
    
    // console.log(mouseIsPressed);
    
    if (mouseIsPressed){
      rect(mouseX, mouseY, 15, 15);
    }
  }