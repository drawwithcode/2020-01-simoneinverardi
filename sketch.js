function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  // put setup code here
  background("white");
  angleMode(DEGREES);
}

function draw() {
  // put drawing code here

  fill(lerpColor(color("white"), color("black"), frameCount / 180))

  push()

  stroke(lerpColor(color("black"), color("white"), frameCount / 180))

  strokeWeight(frameCount / 20)


  translate(width / 2, height / 2);

  line(width / 2, 0, cos(frameCount) * 400, sin(frameCount) * 400);
  line(- width / 2, 0, - cos(frameCount) * 400, - sin(frameCount) * 400);

  pop()


  //1
  push();
  noStroke()

  translate(width / 2, height / 2);

  rotate(frameCount);

  translate(200, 0);

  ellipse(120, 0, frameCount/ 1.5);
  pop();

  //2
  push();
  noStroke()

  translate(width / 2, height / 2);

  rotate(frameCount);

  translate(-200, 0);

  ellipse(20, 0, frameCount/2);
  pop();

  //3
  push();
  noStroke()

  translate(width / 2, height / 2);

  rotate(frameCount);

  translate(200, 0);

  ellipse(-120, 0, frameCount/3);
  pop();

  //1.1
  push();
  noStroke()

  translate(width / 2, height / 2);

  rotate(frameCount);

  translate(-200, 0);

  ellipse(-120, 0, frameCount / 1.5);
  pop();

  //2.1
  push();
  noStroke()

  translate(width / 2, height / 2);

  rotate(frameCount);

  translate(200, 0);

  ellipse(-20, 0, frameCount/2);
  pop();

  //3.1
  push();
  noStroke()

  translate(width / 2, height / 2);

  rotate(frameCount);

  translate(-200, 0);

  ellipse(120, 0, frameCount/3);
  pop();




  if (frameCount == 180) {
    noLoop();

  }

}
