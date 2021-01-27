var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1 = createSprite(300,100,50,80);
  rect2 = createSprite(300,750,80,30);
  rect1.velocityY=+1;
  rect2.velocityY=-1;
  rect1.shapeColor = "yellow";
  rect2.shapeColor = "blue";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(rectangle(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
 bounceOff(rect1,rect2);
  drawSprites();
}
function rectangle(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    &&object1.y - object2.y < object1.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
 return true;
}
else {
  return false;
}
}
function bounceOff(object1,object2){
  if(object1.x - object2.x < object1.width/2 + object1.width/2 && object2.x - object1.x < object1.width/2 + object1.width/2){
   object1.velocityX=object1.velocityX*(-1);
   object2.velocityX=object2.velocityX*(-1);
  }
  if(object1.y - object2.y < object1.height/2 + object1.height/2 && object2.y - object1.y < object1.height/2 + object1.height/2){
object1.velocityY=object1.velocityY*(-1);
object2.velocityY=object2.velocityY*(-1);
  }
}