const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Body = Matter.Body;

var particles =[];
var pinkos = [];
var divisions =[];

var ground2
var ground3
var divisionHeight = 300;
var division1, division2,division3,division4,division5,division6,division7;
function setup() {
  createCanvas(470,800);

  engine = Engine.create();
  world = engine.world;

 
  ground2= new Ground(0,400,10,800)
  ground3 = new Ground(465,400,10,800);

  for(var k = 0; k <=width; k = k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
  }
  
  

  for(var j = 40; j<=width; j=j+50)
  {

    pinkos.push(new Plinko(j,75));
  }
  for (var j=15; j <=width-10; j=j+50)
  {
    pinkos.push(new Plinko(j,175));
  }

  for(var j = 40; j<=width; j=j+50)
  {

    pinkos.push(new Plinko(j,280));
  }
  for (var j=15; j <=width-10; j=j+50)
  {
    pinkos.push(new Plinko(j,368));
  }
}








function draw() {
  background("black"); 

  Engine.update(engine);

  ground2.display();
  ground3.display();

  for (var j= 0; j< pinkos.length; j++){
  
    pinkos[j].display()
  }
  
  

if(frameCount % 60===0){
  particles.push(new Particle(random(width/2-30, width/2+30),10,10));
}

for (var i=0; i<particles.length; i++){
  particles[i].display();
}

  for (var k =0; k<divisions.length; k++){
    divisions[k].display();
  }
  
  
  
  
  
}