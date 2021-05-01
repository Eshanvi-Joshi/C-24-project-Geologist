const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    //plane = new Plane(600,height,1200,20)
    plane1 = new Plane(600,500,1200,20);
    hammer = new Hammer(10,100);
    rubber1 = new Rubber(200,100,40);
    rubber2 = new Rubber(400,400,50)
    stone1 = new Stone(200,500,30,30)
    iron1 = new Iron(500.400,40,30);

    //console.log(rubber1)
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane1.display();
    hammer.display();
    rubber1.display();
    rubber2.display();
    stone1.display();
    iron1.display();
}