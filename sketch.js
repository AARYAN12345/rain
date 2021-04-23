const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var drops
var engine, world;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
   drops = new Drops(200,200)
    
    
}

function draw(){
    Engine.update(engine);
    drops.display()

}   

