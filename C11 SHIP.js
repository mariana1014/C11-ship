var sea;
var ship;
function preload(){
ship_driving = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
sea_calm = loadAnimation("sea.png");
}

function setup(){
  //crear la plantilla de pixeles
  createCanvas(600,400);
  
  //crear sprites
  sea = createSprite (400,200,800,400);
  sea.addAnimation("calm", sea_calm);

  ship = createSprite(100,200,70,70);
  ship.scale=0.5;
  ship.x=50;
  ship.addAnimation("driving", ship_driving);
  edges=createEdgeSprites();
}

function draw() {
  background("blue");
 drawSprites()
}