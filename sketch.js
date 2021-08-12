var bathAni, drinkAnieatAni,gym1Ani,gym2Ani,moveAni;
var brushImg,sleepImg;
var SpaceStationImg,SpaceStation
var astronaut;
var instructImg,instruction;

function preload(){

  bathAni = loadAnimation('images/bath1.png','images/bath2.png');
  brushImg = loadAnimation('images/brush.png');
  drinkAni = loadAnimation('images/drink1.png','images/drink2.png');
  eatAni = loadAnimation('images/eat1.png','images/eat1.png','images/eat1.png','images/eat2.png','images/eat2.png','images/eat2.png');
  gymAni = loadAnimation('images/gym1.png','images/gym2.png','images/gym1.png','images/gym2.png','images/gym11.png','images/gym12.png','images/gym11.png','images/gym12.png');
  SpaceStationImg = loadImage('images/iss.png');
  moveAni = loadAnimation('images/move.png','images/move1.png');
  sleepImg = loadAnimation('images/sleep.png');
  instructImg = loadImage('images/instruction.png')

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  SpaceStation = createSprite(width/2, height/2, 50, 50);
  SpaceStation.addImage('space_station',SpaceStationImg);
  SpaceStation.scale = 0.3

  astronaut = createSprite(width/2,height/2,50,50)
  astronaut.addAnimation('sleep',sleepImg)
  astronaut.addAnimation('brush',brushImg)
  astronaut.addAnimation('gym',gymAni)
  astronaut.addAnimation('eat',eatAni)
  astronaut.addAnimation('bath',bathAni)
  astronaut.addAnimation('move',moveAni)


  astronaut.scale = 0.2

instruction = createSprite(150,70)
instruction.addImage('instruction',instructImg)
instruction.scale = 0.7

}

function draw() {
  background(72); 
  drawSprites(); 

  if (keyDown('UP_ARROW')){
    astronaut.changeAnimation('brush')
  }
  
  if (keyDown('DOWN_ARROW')){
    astronaut.changeAnimation('gym')
  }

  if (keyDown('LEFT_ARROW')){
    astronaut.changeAnimation('eat')
  }

  if (keyDown('RIGHT_ARROW')){
    astronaut.changeAnimation('bath')
  }

  if (keyDown('m')){
    astronaut.changeAnimation('move')
    astronaut.velocityX = Math.round(random(-5,5))
    astronaut.velocityY = Math.round(random(-5,5))
  }

}

