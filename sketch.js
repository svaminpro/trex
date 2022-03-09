
var trex ,trex_running;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
 groundimage=loadImage("ground2.png");
  cloudimage=loadImage("cloud.png");
  obstacle1=loadImage("obstacle1.png");
  obstacle2=loadImage("obstacle2.png");
  obstacle3=loadImage("obstacle3.png");
  obstacle4=loadImage("obstacle4.png");
  obstacle5=loadImage("obstacle5.png");
  obstacle6=loadImage("obstacle6.png");
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(50,160,50,50);
 trex.addAnimation("ad",trex_running);
 trex.scale=0.5;
 ground=createSprite(200,180,400,20);
 ground.addAnimation("sd",groundimage);
 ground.velocityX=-3;
 invisibleground=createSprite(200,190,400,20);
 invisibleground.visible=false

}

function draw(){
  background("orange");
  if(ground.x<0){
    ground.x=ground.width/2;

  }
  if(keyDown("space")&& trex.y>=150){
    trex.velocityY=-11
  }
  trex.velocityY=trex.velocityY+0.8
  trex.collide(invisibleground);
  spawnclouds()
  spawnobstacle()
  drawSprites();

}
function spawnclouds(){
  if(frameCount%60==0){
    cloud=createSprite(600,100,40,10);
    cloud.y=Math.round(random(10,60));
    cloud.addImage(cloudimage);
    cloud.scale=0.5;
    cloud.velocityX=-3;
    cloud.lifetime=200;
    cloud.depth=trex.depth;
    trex.depth=trex.depth+1;
  }
  
}
 
function spawnobstacle(){
  if(frameCount%60==0){
    obstacle=createSprite(600,165,10,40);
    obstacle.velocityX=-4;
    var rand=Math.round(random(1,6));
    switch(rand){
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
              break;
      case 5: obstacle.addImage(obstacle5);
              break;
      case 6: obstacle.addImage(obstacle6);
              break;
      default: break;                           
    }
      obstacle.scale=0.5;
      obstacle.lifetime=200;
  }

}