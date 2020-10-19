let value = true;

function setup() {
  p5.createCanvas(800,600);
  p5.background(255);
  p5.noStroke();
  p5.draw();
}

function draw() {
  p5.fill(247,119,38);
  p5.ellipse(270,300, 70,70);
  p5.ellipse (670,300, 70,70);
}

function shapeEllipses(size1, size2) {
  //cerchio sx
  p5.ellipse(190,170,size1,size1);
  p5.ellipse(350,170,size1,size1);
  p5.ellipse(190,430,size1,size1);
  p5.ellipse(350,430,size1,size1);
  p5.ellipse(100,300,size1,size1);
  p5.ellipse(440,300,size1,size1);
  
  //cerchio dx
  p5.ellipse(605,300,size2,size2);
  p5.ellipse(735,300,size2,size2);
  p5.ellipse(670,365,size2,size2);
  p5.ellipse(670,235,size2,size2);
  p5.ellipse(620,350,size2,size2);
  p5.ellipse(720,350,size2,size2);
  p5.ellipse(620,250,size2,size2);
  p5.ellipse(720,250,size2,size2);
}

function mouseClicked() {
  if (value) {
    p5.fill(99,120,147);
    shapeEllipses(150,40);
  } else {
    p5.fill(255);
    shapeEllipses(155,45);
  }
  value = !value;
}

//https://www.openprocessing.org/sketch/140477