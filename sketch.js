var hr,mn,sc,scAngle,mnAngle,hrAngle;

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background("black");  

  var angle=-90;
  translate(400,200);
  rotate (angle);

  hr=hour();
  mn=minute();
  sc=second();

  scAngle=map(sc,0,60,0,360);
  mnAngle=map(mn,0,60,0,360);
  hrAngle=map(hr%12,0,12,0,360);

  push ();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop ();

  push ();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,90,0);
  pop ();

  push ();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,40,0);
  pop ();

  stroke(0,0,255);
  strokeWeight(7);
  noFill();
  arc(10,10,250,250,0,hrAngle);

  stroke(0,255,0);
  strokeWeight(7);
  noFill();
  arc(10,10,280,280,0,mnAngle);

  stroke(255,0,0);
  strokeWeight(7);
  noFill();
  arc(10,10,310,310,0,scAngle);


}