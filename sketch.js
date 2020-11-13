var box1,box2,box3;
var ground,paper;
dustbinIMG,paperIMG;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbinIMG=loadImage("paper.png")
	paperIMG=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var options ={
		isStatic: true
	}
	box1 = createSprite(650,680,200,20,options);
	box1.shapeColor="red";
	box1.addImage(dustbinIMG);
	box2 = createSprite(750,630,20,100,options);
	box2.shapeColor="red";
	box3 = createSprite(550,630,20,100,options);
	box3.shapeColor="red";
	ground = createSprite(600,height,1200,20,options);
    ground.shapeColor="yellow";
	var options2 = {
		isStatic: false,
		restitution: 0.3,
		friction: 0.5,
		density: 1.2
	}
	paper = createSprite(100,650,20,20,options2);
	paper.shapeColor="pink";
	paper.addImage(paperIMG);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
   
  keyPressed();

  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	  
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	   
	 }

   }


