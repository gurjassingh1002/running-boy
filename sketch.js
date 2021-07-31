var path,boy,pathimg,boyimg
function preload(){
pathimg=loadImage("path.png")
boyimg=loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
path=createSprite(200,200)
path.addImage(pathimg)
path.velocityY=4
path.scale=1.2
boy=createSprite(180,340,30,30)
boy.scale=0.08
boy.addAnimation("boy",boyimg)
}

function draw() {
  background(0);
  path.velocityY=4
if(path.y>400){
path.y=height/2

}
boy.x=mouseX


drawSprites()
}



























