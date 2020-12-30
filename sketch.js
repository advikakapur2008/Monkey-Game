var monkey, monkey_running;
var banana, bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground, invisibleGround;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(600, 200);
  monkey = createSprite(100, 160, 20, 20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(100, 200, 1200, 20);
  ground.velocityX = -4;
  ground.x = ground.width / 2;

  invisibleGround = createSprite(100, 199, 5, 20);
  invisibleGround.visible = false;

  FoodGroup = new Group();
  obstaclesGroup = new Group();
  
  score = 0
}


function draw() {
  background(214);
  
  stroke("white");
  textSize(18);
  fill("black");
  text("Survival Time: "+ score, 470,20);
  score = Math.round(frameCount/getFrameRate());
  
  if (ground.x < 0) {
    ground.x = ground.width / 2
  }
  monkey.collide(invisibleGround);
  if (keyDown("space") && monkey.y >= 120) {
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  bananas();
  obstacles();
  drawSprites();
}

function bananas() {
  if (frameCount % 80 === 0) {
    banana = createSprite(500, Math.round(random(10,70)), 20, 20);
    banana.addImage(bananaImage);
    banana.scale = 0.08;
    banana.velocityX = -5;
    banana.lifetime = 100;
    FoodGroup.add(banana);
  }
}

function obstacles(){
  if(frameCount%300===0){
    obstacle = createSprite(400,177,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -4;
    obstacle.lifetime = 120;
  }
}