export default p5 => {
  let value = true;

  p5.setup = () => {
    p5.createCanvas(800,500);
    p5.background(255);
    p5.noStroke();
    p5.draw();
  }

  p5.mouseClicked = () => {
    if (value) {
      p5.fill(99,120,147);
      shapeEllipses(150,40);
    } else {
      p5.fill(255);
      shapeEllipses(155,45);
    }
    value = !value;
  }

  function shapeEllipses(size1, size2) {
    p5.ellipse(190,120,size1,size1);
    p5.ellipse(350,120,size1,size1);
    p5.ellipse(190,380,size1,size1);
    p5.ellipse(350,380,size1,size1);
    p5.ellipse(100,250,size1,size1);
    p5.ellipse(440,250,size1,size1);
    
    p5.ellipse(605,250,size2,size2);
    p5.ellipse(735,250,size2,size2);
    p5.ellipse(670,315,size2,size2);
    p5.ellipse(670,185,size2,size2);
    p5.ellipse(620,300,size2,size2);
    p5.ellipse(720,300,size2,size2);
    p5.ellipse(620,200,size2,size2);
    p5.ellipse(720,200,size2,size2);
  }

  p5.draw = () => {
    p5.fill(247,119,38);
    p5.ellipse(270,250, 70,70);
    p5.ellipse (670,250, 70,70);
  }
}
