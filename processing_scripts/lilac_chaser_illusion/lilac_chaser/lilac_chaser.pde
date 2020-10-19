int numCircles = 12;
int hidden = numCircles;

void setup() { 
  size(500, 500);
  frameRate(6);
}

void draw() {
  background(170, 170, 170);
  translate(width/2, height/2);
  drawCircles();
  fill(0);
  ellipse(0,0,2,2);
  hidden--;
  if (hidden > numCircles) {
    hidden = 0;
  }
  if (hidden < 0) {
    hidden = numCircles;
  }
}

void drawCircles() {
  noStroke();
  fill(182, 102, 210, 70);
  float radius = 190;
  float angle = TWO_PI/numCircles;
  int discolor = 11;
  for (int i = 0; i < numCircles; i++) {
    if (i!=hidden)
      ellipse(radius * sin(angle * i), radius * cos(angle * i), 40, 40);
  }
  filter(BLUR, 5);
}

// https://forum.processing.org/one/topic/lilac-chaser.html