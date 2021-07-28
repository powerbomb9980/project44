var player;
var playerImg;
var plrAnimation;
var ground;
var ground2;
var ground3;
var ground4;
var groundImg;
var back;
var backgroundImg;
var topBorder, rightBorder, leftBorder, bottomBorder;
var obstacle;
var obsImgUp, obsImgDown;





function preload() {
  playerImg = loadImage("Images/Player.png");
  plrAnimation = loadAnimation("Images/Player Walk/sprite_0.png", "Images/Player Walk/sprite_1.png")
  groundImg = loadImage("Images/Ground.Png");
  backgroundImg = loadImage("Images/Background.png");


}

function setup() {
  createCanvas(1400, 700);
  ground = new Ground(600, 165, 1200, 20, "Images/Ground.png");
  ground2 = new Ground(800, 350, 1200, 20, "Images/Ground.png");
  ground3 = new Ground(600, 535, 1200, 20, "Images/Ground.png");
  ground4 = new Ground(800, 695, 1200, 20, "Images/Ground.png");

  player = new Player(40, 50, 25, 25);

  topBorder = createSprite(700, -50, 1400, 10);
  rightBorder = createSprite(1400, 350, 10, 1400);
  leftBorder = createSprite(0, 350, 10, 1400);
  bottomBorder = createSprite(700, 700, 1400, 10);

  for (var i = 150; i < 1200; i = i + 300) {
    obstacle = new Obstacles(i, 132, 25, 25, "Images/Ice Spike Up.png");
  }

  for (var i = 300; i < 1200; i = i + 300) {
    obstacle = new Obstacles(i, 25, 25, 25, "Images/Ice Spike Down.png");
  }
}

function draw() {
  background(backgroundImg);



  if (keyDown(RIGHT_ARROW)) {
    player.sprite.x = player.sprite.x + 10;
  }

  if (keyWentDown(UP_ARROW)) {
    player.sprite.y = player.sprite.y - 75;
    player.sprite.x = player.sprite.x + 15;
  }

  if (keyDown(LEFT_ARROW)) {
    player.sprite.x = player.sprite.x - 10;
  }
  player.sprite.y += 5;

  ground.display();
  ground2.display();
  ground3.display();
  ground4.display();

  //topBorder.visible = false;
  bottomBorder.visible = false;
  rightBorder.visible = false;
  leftBorder.visible = false;

  player.sprite.collide(ground.sprite);
  player.sprite.collide(ground2.sprite);
  player.sprite.collide(ground3.sprite);
  player.sprite.collide(ground4.sprite);
  player.sprite.collide(bottomBorder);
  player.sprite.collide(rightBorder);
  player.sprite.collide(leftBorder);
  player.sprite.collide(topBorder);

  drawSprites();
}
