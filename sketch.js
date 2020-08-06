const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var gameState = "onSling";
var bg = "bg/morning.jpeg"
var score = 0;

function preload(){
  getBackgroundImg();
}
function setup() {
   var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

  ground1 = new Ground(400,175,200,10);
  box1 = new Box(480,165,30,40);
  box2 = new Box(440,165,30,40);
  box3 = new Box(400,165,30,40);
  box4 = new Box(360,165,30,40);
  box5 = new Box(320,165,30,40);
  box6 = new Box(460,95,30,40);
  box7 = new Box(420,95,30,40);
  box8 = new Box(380,95,30,40);
  box9 = new Box(340,95,30,40);

  ground2 = new Ground(650,350,200,10);
  box10 = new Box(725,340,30,40);
  box11 = new Box(690,340,30,40);
  box12 = new Box(650,340,30,40);
  box13= new Box(610,340,30,40);
  box14= new Box(570,340,30,40);
  box15= new Box(710,275,30,40);
  box16= new Box(670,275,30,40);
  box17= new Box(630,275,30,40);
  box18 = new Box(590,275,30,40);

  hex = new Hexagon(150,200,20);
  sling = new Slingshot(hex.body,{x: 150, y: 200});
}

function draw() {
  if(backgroundImg)
  background(backgroundImg);  

  textSize(15);
  text("SCORE: " + score , 650,40);

  Engine.update(engine);


  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();

  drawSprites();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  hex.display();
  ground1.display();
  ground2.display();

}



function mouseDragged(){
  Matter.Body.setPosition(hex.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode === 32){
     sling.attach(hex.body);
     Matter.Body.setPosition(hex.body,{x: 150, y: 200});
     gameState = "onSling";
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  console.log(hour);

  if(hour>=0600 && hour<=1800){
    bg = "bg/morning.jpeg";
}
else{
    bg = "bg/night.jpeg";
}

backgroundImg = loadImage(bg);
console.log(backgroundImg);
}