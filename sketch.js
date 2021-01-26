var paperObj,groundObject;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	dustbin1 = new Dustbin(450, 630, 20, 120);


paperObj = new paper(100,550,40)
groundObject=new ground(600,height,1200,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  paperObj.display();
  groundObject.display();
  dustbin1.display();

  drawSprites();
 



  
}
function keyPressed(){

if(keyCode === UP_ARROW)
{
	Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:51,y:-51})
}

}


