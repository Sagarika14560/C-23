const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    
    World.add(world,ground);
    box1=new box(200,200,20,20)
   ground1=new ground(200,400,400,20)

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    
box1.display();
 ground1.display();   
}