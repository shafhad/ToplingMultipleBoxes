const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var abWorld, abEngine, abBody;

var ground;
var engine, world;
var box1, box2, box3;

var pig1;

var loft1;


function setup() {
var canvas =  createCanvas(1200,400);
//abEngine = Engine.create();
//  abWorld = abEngine.world;
engine = Engine.create();
    world = engine.world;
//  box1 = new Boxes(850,320,60,60);
//  box2 = new Boxes(1000, 320, 60,60);
  box1 = new Boxes(200,300,50,50);
    box2 = new Boxes(240,100,50,100);
  pig1 = new Pigs(260,50,50,70);
  loft1 = new Loft(280,200,30,70)
  console.log(loft1);
  ground = new Ground(600,height, 1210, 15);
}

function draw() {
  background("0");


  Engine.update(engine);


  console.log(ground.body.position.y);
 // box1.color = "yellow";
 // box2.color = "red";
  box1.display();
  box2.display();
  pig1.display();
  loft1.display();

  ground.display();

  //drawSprites();
}
