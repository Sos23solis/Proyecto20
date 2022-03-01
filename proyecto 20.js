var astronaut, bg; 
var bgImg, sleep, brush, gym, eat, bath, move;

function preload() {
bgImg = loadImage("iss.png");
sleep = loadAnimation("sleep.png");
brush = loadAnimation("brush.png");
gym = loadAnimation("gym1.png", "gym2.png");
eat = loadAnimation("eat1.png", "eat2.png");
bath = loadAnimation("bath1.png", "bath2.png");
move = loadAnimation("move.png", "move1.png");
}


function setup() {
  createCanvas(800,400);
  bg = createSprite(width, height);
  bg.addImage(bgImg);


  astronaut = createSprite(300, 200);
  astronaut.addAnimation("slepping", sleep);
  astronaut.addAnimation("brushing", brush);
  astronaut.addAnimation("exercise", gym);
  astronaut.addAnimation("eat", eat);
  astronaut.addAnimation("bath", bath);
  astronaut.addAnimation("move", eat);
  astronaut.changeAnimation("sleep", sleep);
  
}


function draw() {
  background(0);  
textSize (20);
text("Actividades", 30, 50);
textSize  (15);
text("Flecha hacia arriba = Cepillarse", 30, 70);
text("Flecha hacia abajo = Ejercitarse", 30, 90);
text("Flecha hacia izquieda = Comer",30,  110);
text("Flecha hacia abajo = lavar", 30, 130);
text("Tecla m = Moverse", 30, 150);

  if (keyDown("UP_ARROW")) {
astronaut.changeAnimation("brushing", brush);
astronaut.y = 350;
astronaut.velocityX = 0;
astronaut.velocityY = 0;  
}

if (keyDown("DOWN_ARROW")) {
  astronaut.changeAnimation("exercise", gym);
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;   
}

if (keyDown("LEFT_ARROW")) {
astronaut.changeAnimation("eat", eat);
astronaut.y = 350;
astronaut.velocityX = 0;
astronaut.velocityY = 0; 
}

if (keyDown("RIGHT_ARROW")) {
  astronaut.changeAnimation("bath", bath);
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;   
}

if (keyDown("M")) {
astronaut.changeAnimation("move", move);
astronaut.y = 350;
astronaut.velocityX = 2;
astronaut.velocityY = 2; 
}
  drawSprites();
}