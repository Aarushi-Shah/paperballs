
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);
	//rectMode(CENTER);
	//var s = createSprite(x, y, width, height);
	
	groundB = createSprite(width/2, height-35, width,10);
	engine = Engine.create();
	//Bodies.circle = function(x, y, radius, options, maxSides)
	ball1 = Bodies.circle(150,600,25, {isStatic:true, density:1.2});
	//ball1.shapeColor = color(251,0,0)
	World.add(engine.world,ball1);
	//Engine.run(engine);
	console.log("message")
	
	box = Bodies.rectangle(650,660,200,20)
	boxS = Bodies.rectangle(550,610,20,100)
	boxs2 = Bodies.rectangle(750,610,20,100)
	
	ground = Bodies.rectangle(400, 675, 800, 50 , {isStatic:true} );
	World.add(engine.world, ground);
}


function draw() {
	//rectMode(CENTER);
   Engine.update(engine);
	background(0,255,255);
	//drawSprites();
   rectMode(CENTER)
ellipseMode(RADIUS)
   ellipse(ball1.position.x,ball1.position.y,25,25)
rect(ground.position.x,ground.position.y,800,50)
rect(box.position.x,box.position.y,200,20)
rect(boxS.position.x,boxS.position.y,20,100)
rect(boxs2.position.x,boxs2.position.y,20,100)
}

// function keyPressed(){
 //	if (keyCode === UP_ARROW){
//		Matter.Body.setStatic(ball1,false);
//		Body.applyForce( ball1, {x: ball1.position.x, y: ball1.position.y}, {x: 0.5, y: 0});
 //	}
 //}

 function keyPressed(){
 	if (keyCode === UP_ARROW){
 	Body.setStatic(ball1,false)
 		Body.applyForce(ball1,ball1.position,{x:85,y:-85});
 	}
 }
 function applyForce (body, position, force) {
	body.force.x += force.x;
	body.force.y += force.y;
	var offset = { x: position.x - body.position.x, y: position.y - body.position.y };
	body.torque += offset.x * force.y - offset.y * force.x;
 };

