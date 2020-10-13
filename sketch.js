const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;


function setup() {
  createCanvas(1300,700);
  engine = Engine.create();
  world = engine.world;
 
  //creating the polygon
  polygon1 = new Polygon(100,400,50);

  //creating bases  
  platform1 = new Platform(270,290,500,20);
  
  //creating boxes level 2   
  box1 = new Box2(330,235,30,40)
  box2 = new Box2(360,235,30,40)
  box3 = new Box2(390,235,30,40)
  box4 = new Box2(420,235,30,40)
  box5 = new Box2(450,235,30,40)
 
//creeting boxes level 3
   box6 = new Box2(360,195,30,40)
   box7 = new Box2(390,195,30,40)
   box8 = new Box2(420,195,30,40)

//top
   box9 = new Box2(390,155,30,40)

//sling 
 sling1 = new SlingShot(polygon1.body,{x:200,y:100})




  }

function draw() {
  background(0);  
  Engine.update(engine);
  drawSprites();
  
  //polygon has been displayed 
 polygon1.display();
 
 //box have been displayed 
 platform1.display();

 //displaying Boxes 
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 box8.display();
 box9.display();

//display sling 
sling1.display();


}

function keyPressed(){
  if (keyCode === 32){
    Matter.Body.setPosition(polygon1.body,{x:155,y:550})
    sling1.attach(polygon1.body) 
  
  }
  
  
  
   }
  
  function mouseDragged(){
    Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY});
    
    
    
    }
    
    function mouseReleased(){
    
    //sling1.fly()
    
    
    
    }