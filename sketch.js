var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine=Engine.create();
	world=engine.world;
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	leftSprite=createSprite(300,650,20,100);
	leftSprite.shapeColor="red";

	rightSprite=createSprite(500,650,20,100);
	rightSprite.shapeColor="red";

	
	bottomSprite=createSprite(400,670,200,20);
	bottomSprite.shapeColor="red";

	groundSprite=createSprite(width/2, 690, width,20);
	groundSprite.shapeColor=color("brown")


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);

	leftBody = Bodies.rectangle(width/2,650,20,100,{isStatic:true});
	World.add(world,leftBody);

	rightBody = Bodies.rectangle(425,650,20,100,{isStatic:true});
	World.add(world,rightBody);


    bottomBody = Bodies.rectangle(425,670,20,200,{isStatic:true});
	World.add(world,bottomBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 690, width, 50 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  groundSprite.x=ground.position.x
  groundSprite.y=ground.position.y

  drawSprites();

  
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody,false)
	

	

  }
}



