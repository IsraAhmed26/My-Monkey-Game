
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var ground ,groundImage;    
var survivalTime=0;
var score           

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  
  monkey = createSprite (80,315,20,20);
  monkey.addAnimation("running",monkey_running);
 monkey.scale=0.1;
  ground=createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x=ground.width/2;
  console.log(ground.x)
  BananaGroup= new Group();
  ObstacleGroup=new Group();
     

}


function draw() {
  background(180);
  
  
  stroke("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time:"+ survivalTime,100,50)

  
  Spawnobstacles();
  score = score + Math.round(getFrameRate()/60);
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  if(keyDown("space") ) {
      monkey.velocityY = -12;
    }
  
    monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground)
  
  Spawnbanana();
  drawSprites();
  
}
function Spawnbanana(){
if(frameCount%80===0){
  banana=createSprite(180,60,20,20);
  banana.y= Math.round(random(120,200));
   banana.addImage(bananaImage);
banana.lifetime= 110;
  banana.scale=0.1;
  banana.velocityX=-3;
  BananaGroup.add (banana)
}
  

}
function Spawnobstacles(){
  if(frameCount%300===0){
    obstacle=createSprite(400,320,30,30);
  var rand = Math.round(random(1,6));
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-3;
    ObstacleGroup.add(obstacle);
    obstacle.scale=0.2;
  }
  
}

     



