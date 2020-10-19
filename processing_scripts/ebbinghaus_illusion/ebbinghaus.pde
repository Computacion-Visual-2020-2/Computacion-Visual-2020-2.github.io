boolean value = true;

void setup() {
  size(800,600);
  background(255);
  noStroke();
  draw();
}

void draw() {
  fill(247,119,38);
  ellipse(270,300, 70,70);
  ellipse (670,300, 70,70);
}

void shapeEllipses(int size1, int size2) {
  ellipse(190,170,size1,size1);
  ellipse(350,170,size1,size1);
  ellipse(190,430,size1,size1);
  ellipse(350,430,size1,size1);
  ellipse(100,300,size1,size1);
  ellipse(440,300,size1,size1);

  ellipse(605,300,size2,size2);
  ellipse(735,300,size2,size2);
  ellipse(670,365,size2,size2);
  ellipse(670,235,size2,size2);
  ellipse(620,350,size2,size2);
  ellipse(720,350,size2,size2);
  ellipse(620,250,size2,size2);
  ellipse(720,250,size2,size2);
}

void mouseClicked() {
  if (value) {
    fill(99,120,147);
    shapeEllipses(150,40);
  } else {
    fill(255);
    shapeEllipses(155,45);
  }
  value = !value;
}
