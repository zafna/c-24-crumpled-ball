
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var trash;
var box1,box2,box3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,780,1200,20)
    trash= new Paper(100,600,40)
    box1=new Dustbin(710,680,20,150);
    box2=new Dustbin(800,760,200,20);
    box3=new Dustbin(890,680,20,150);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  trash.display();
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
 
}

function keyPressed(){

if(keyCode===UP_ARROW){

Matter.Body.applyForce(trash.body,trash.body.position,{x:50,y:-85});
}
}



