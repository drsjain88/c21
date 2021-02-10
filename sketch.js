var fixedRect, movingRect;
var car,wall;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  
  car=createSprite(600,100,50,50)
  car.shapeColor="pink"
  car.velocityY=3
  wall=createSprite(600,600,50,50)
 wall.shapeColor="pink"
}

function draw() {
  background(0,0,0);  
 // movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

/*if(isTouching(car,wall)){
 car.shapeColor = "pink";
wall.shapeColor = "pink";
}
else {
  car.shapeColor="green"
  wall.shapeColor = "green";

  }*/
  bounceOff(car,wall)
  drawSprites();
}


