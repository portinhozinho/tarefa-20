
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var chao
var bola
var retangle
var quadrado

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
var chaozinho={isStatic:true}
chao=Bodies.rectangle(200,700,800,5,chaozinho)
World.add(world,chao)
	Engine.run(engine);
  
	var bolinha={restitution:0.3, friction:0.01, frictionAir:0.2}
	bola=Bodies.circle(200,8,200,bolinha)
	World.add(world,bola)

	var rectangle={restitution:0.8, friction:0.01, frictionAir:0.2}
	retangle=Bodies.rectangle(400,8,100,200,rectangle)
	World.add(world,retangle)

	var quadradinho={restitution:0.4, friction:0.03, frictionAir:0.4}
	quadrado=Bodies.rectangle(300,6,200,200,quadradinho)
	World.add(world,quadrado)

}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(bola.position.x, bola.position.y,200)
  rect(retangle.position.x, retangle.position.y,100,200)
  rect(quadrado.position.x, quadrado.position.y,200,200)
  drawSprites();
 
}



