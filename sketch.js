
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 ground=new Ground(800,680,1600,20)
 paper=new Paper(100,300,10,10)
 dustbin1=new Dustbin(1200,650,200,20)
 dustbin2=new Dustbin(1100,590,20,100)
 dustbin3=new Dustbin(1300,590,20,100)
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine)
  rectMode(CENTER);
  background("orange");
  
  
  ground.display()
  paper.display()
  dustbin1.display()
  dustbin2.display()
  dustbin3.display()
  
}
function keyPressed(){

  if(keyCode===UP_ARROW){
     Matter.Body.applyForce(paper.body,paper.body.position,{x:20,y:-20})

     }
}



