
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage,
    backgound, background_Image, player, player_running;
var FoodGroup, obstacleGroup;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
   background_Image = loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png",);
 
}



function setup() {
  
monkey = createSprite(80,315,900,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
}


function draw() {
  background(255);
  
  if(ground.x<0){
     ground.x = ground.width/2;
     }
  
  if(keyDown("space")){
     monkey.velocityY = -12;
     }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  spawnBanana();
  
  drawSprites();

  
}

function spawnBanana(){
  if(frameCount%60===0){
     banana = createSprite(600,100,40,10);
    banana.y = Math.round(random(10,60));
    banana.velocityX = -4;
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    var rand = Math.round(random(1,6));
    switch(score) {
      case 10: player.scale = 0.12;
              break;
      case 20: player.scale = 0.14;
              break;
      case 30: player.scale = 0.16;
              break;
      case 40: player.scale = 0.18;
              break;
      default: break;
      }  
    }
  }






