var box
function setup() {
  createCanvas(400,400);
  box=createSprite(200,150,10,9)
}

function draw() 
{
  background(30);
  if(keyIsDown(UP_ARROW)){
    box.y=box.y-2
  }

drawSprites()
}




