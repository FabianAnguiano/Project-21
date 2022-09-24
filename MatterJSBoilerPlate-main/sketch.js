var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var leftSide;
var rightSide;

var button1;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);

	rectMode(CENTER);
	ellipseMode(RADIUS);

	
	
	var ball_options={
		isStatic: false,
		restitution:0.3,
		friction:0,
		density:1.2,
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground = new Ground(200,390,400,20);
	leftSide = new Ground(300,360,4,40);
	rightSide = new Ground(380,360,4,40)
	Engine.run(engine);
	ball = Matter.Bodies.circle(200,350,20,ball_options);
    World.add(world,ball);
	button1 = createImg('button-1.png');
	button1.position(220,30);
  	button1.size(50,50);
  	button1.mouseClicked(HForce);

  
}


function draw() {
  background(0);
  Engine.update(engine);
  ground.show();
  leftSide.show();
  rightSide.show();

  ellipse(ball.position.x,ball.position.y,20);
  
  drawSprites();
 
}

function HForce() {
	Matter.Body.applyForce(ball,{x:0,y:0},{x:30,y:0});
  }
  



