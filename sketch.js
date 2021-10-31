const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
	world = engine.world;

  ground = Bodies.rectangle(400,380,800,20,{isStatic:true})
  World.add(world,ground)

  B1 = new Box(500,350,50,50)
  B2 = new Box(500,350,50,50)
  B3 = new Box(500,350,50,50)
  B4 = new Box(500,350,50,50)
  B5 = new Box(500,350,50,50)

  B6 = new Box(400,350,50,50)
  B7 = new Box(400,350,50,50)
  B8 = new Box(400,350,50,50)
  B9 = new Box(400,350,50,50)
  B10 = new Box(400,350,50,50)

  ball = Bodies.circle(260,120,30,{density:1,frictionAir:0.0005})
  World.add(world,ball)

  rope = new Attachment(this.ball,{x:260,y:100})

}

function draw() {
  background("cyan"); 
  Engine.update(engine) 
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,20)
  B1.display();
  B2.display();
  B3.display();
  B4.display();
  B5.display();

  B6.display();
  B7.display();
  B8.display();
  B9.display();
  B10.display();

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,30,30)

  rope.display();

}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
}
