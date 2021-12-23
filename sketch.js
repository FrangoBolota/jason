var player
var animacaoP
var solo
var imagenSolo
var direita
var esquerda

function preload(){
  //imagens pré-carregadas
  animacaoP=loadAnimation("Runner-1.png","Runner-2.png")
  imagenSolo=loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  solo=createSprite(200,200)
  solo.velocityY=4
  solo.addImage(imagenSolo)
  player=createSprite(200,350)
  player.addAnimation("correndo",animacaoP)
  player.scale=0.1
  direita=createSprite(400,0,100,100000)
  direita.shapeColor="black"
  esquerda=createSprite(0,0,100,100000)
  esquerda.shapeColor="black"
}

function draw() {
  background(0);
  drawSprites()
  if(solo.y>400){
    solo.y=height/6

  }
  player.x=mouseX
  player.collide(esquerda)
  player.collide(direita)
}
