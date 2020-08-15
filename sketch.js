
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1, box2, box3, trashImg
var ground
var paperObject, paperImg

function preload(){
    paperImg = loadImage("sprites/paper.png");
    trashImg = loadImage("sprites/trash.png");
}
	
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

    //Create the Bodies Here.

    paperObject = createSprite(50,640,50,50);
    paperObject.scale = 0.5

    box1 = createSprite(600,600,20,30)
    box1.scale = 0.5

    box2 = createSprite(500,610,30,100)
    box2.visible = false
    box3 = createSprite(700,610,30,100)
    box3.visible = false

	//Create a Ground
	ground = createSprite(0,670,2000,10)
    ground.shapeColor = "grey"

    packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
 
  paperObject.addImage("paper",paperImg)
  box1.addImage("box1", trashImg)
  
  paperObject.collide(ground);

  keyPressed()
 
  drawSprites();

  stroke("white")
  textSize(20)
  fill("black")
  text("For the Paper to go in the Trash Can Press the Up Arrow and Down Arrow key" ,10,100 )

}

function keyPressed(){

    if (keyCode === UP_ARROW){
        //Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
        paperObject.velocityX = 10
        paperObject.velocityY = -3
	}
    if (keyCode === DOWN_ARROW){
        paperObject.velocityX = 0
        paperObject.velocityY = 10
    }
}


