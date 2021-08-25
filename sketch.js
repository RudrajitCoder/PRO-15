var PLAY = 1;
var gameState = PLAY;

var bow , arrow,  scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var arrowG, pinkBalloonG, greenBalloonG, redBalloonG, blueBalloonG;

var score=0;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(700, 500);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 4.0
  
  // creating bow to shoot arrow
  bow = createSprite(680,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0  
   
   //Group
   arrowG = new Group();
   redBalloonG = new Group();
   blueBalloonG = new Group();
   greenBalloonG = new Group();
   pinkBalloonG = new Group();
}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyWentDown("space")) {
    createArrow();
  }
   
  //creating continous enemies
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }  
    
  drawSprites();
  text("Score: "+ score, 300,50);

  if(arrowG.isTouching(redBalloonG)){
  redBalloonG.destoryEach(arrowG);
  arrowG.destoryEach(bow);
  score = score +10
  }

  if(arrowG.isTouching(blueBalloonG)){
  blueBalloonG.destoryEach(arrowG);
  arrowG.destoryEach(bow);
  score = score +7
  }
  
  if(arrowG.isTouching(greenBalloonG)){
  greenBalloonG.destoryEach(arrowG);
  arrowG.destoryEach(bow);
  score = score +5
  }
  
  if(arrowG.isTouching(pinkBalloonG)){
  pinkBalloonG.destoryEach(arrowG);
  arrowG.destoryEach(bow);
  score = score +3
  }
  
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 680;
  arrow.y = bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 160;
  arrow.scale = 0.3;

  arrowG.add(arrow);
}

function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 5;
  red.lifetime = 135;
  red.scale = 0.1;

  redBalloonG.add(red);
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 4;
  blue.lifetime = 165;
  blue.scale = 0.1;

  blueBalloonG.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 225;
  green.scale = 0.1;

  greenBalloonG.add(green);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 2;
  pink.lifetime = 335;
  pink.scale = 1.2;

  pinkBalloonG.add(pink);
}
