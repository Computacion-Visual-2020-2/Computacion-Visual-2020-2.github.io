export default p5 => {
  let numCircles = 12;
  let hidden = numCircles;

  p5.setup = () => {
    p5.createCanvas(500, 500);
    p5.frameRate(6);
  }

  function drawCircles() {
    p5.noStroke();
    p5.fill(182, 102, 210, 70);
    let radius = 190;
    let angle = p5.TWO_PI/numCircles;
    for (let i = 0; i < numCircles; i++) {
      if (i !== hidden) {
        p5.ellipse(radius * p5.sin(angle * i), radius * p5.cos(angle * i), 40, 40);
      }
    }
    p5.filter(p5.BLUR, 5);
  }

  p5.draw = () => {
    p5.background(170, 170, 170);
    p5.translate(p5.width/2, p5.height/2);
    drawCircles();
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
}
