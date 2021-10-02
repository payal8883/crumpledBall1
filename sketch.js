
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ground;
function preload()
{
	
}

function setup() {
	createCanvas(1700, 500);


	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		density:1.2,
		friction:0,
		restitution:0.3,
	}
	var ground_options={
		isStatic:true,
	}

	var wall_options={
		isStatic:true,
	}
	
	//Create the Bodies Here.
	 ball = Bodies.circle(500,470,30,ball_options);
	 World.add(world,ball);
	 console.log(ball.position);

	 ground=Bodies.rectangle(850,490,1700,20,ground_options);
	 World.add(world,ground);

	 wall1=Bodies.rectangle(1200,436,10,100,wall_options);
	 World.add(world,wall1);

	 wall2=Bodies.rectangle(1500,463,10,100,wall_options);
	 World.add(world,wall2);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,30,30);
  push();
  fill("red");
  rect(ground.position.x,ground.position.y,1700,10);
  rect(1200,436,10,100);
  rect(1500,436,10,100);  
  pop();
  
  drawSprites();
 
}

function keyPressed(){
  
	if(keyCode===DOWN_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:60,y:70});

	}


}

