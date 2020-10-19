let numCircles = 12;
let hidden = numCircles;

function setup() { 
  p5.createCanvas(500, 500);
  p5.frameRate(6);
}

function draw() {
  p5.background(170, 170, 170);
  p5.translate(width/2, height/2);
  p5.drawCircles();
  p5.fill(0);
  p5.ellipse(0,0,2,2);
  hidden--;
  if (hidden > numCircles) {
    hidden = 0;
  }
  if (hidden < 0) {
    hidden = numCircles;
  }
}

function drawCircles() {
  p5.noStroke();
  p5.fill(182, 102, 210, 70);
  let radius = 190;
  let angle = TWO_PI/numCircles;
  for (let i = 0; i < numCircles; i++) {
    if (i !== hidden) {
      p5.ellipse(radius * p5.sin(angle * i), radius * p5.cos(angle * i), 40, 40);
    }
  }
  p5.filter(BLUR, 5);
}

// https://forum.processing.org/one/topic/lilac-chaser.html