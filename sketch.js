const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var iron ;
var stone ; 

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);
    hammer = new Hammer(10,100);

    rubber = new Rubber(200 , 200 , 50);
    stone = new Stone(100,100 , 30,30 , stone);
    iron = new Iron(300,300,60,60 , iron);

}

function preload(){
    iron = loadImage('iron.png');
    stone = loadImage('stone.png');
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    rubber.display();
    stone.display();
    iron.display();
    hammer.display();
}