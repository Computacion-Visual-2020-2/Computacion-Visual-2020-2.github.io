import rocas from '../../images/rocas.jpg';

export default p5 => {
    let lim = 1000, rect_size = 100, rotate = 0, x, y,m;
    let img;

    p5.setup = () => {
      p5.createCanvas(500,500);
      p5.background(255);
      p5.frameRate(256);
      x = 500/2;
      y = 500/2;  
    }
   let step = 0, radius =100;

    function inwards (x, y ,m){
        return (x % m + y % m)% m;
    }
  
    function outwards( x,  y,  m) {
        return (x % m + m - y % m) % m;
    } 
    
  
    p5.draw = () => {
        p5.rectMode(p5.CENTER);
        p5.noFill();
        
        let w = 30;
        p5.stroke(0);
        p5.translate(x, y);
        p5.rotate(p5.PI / 4.0);
        for (let i = 0; i < lim; ++i) {
          if (outwards(i, step, w) < w / 2) {
            p5.stroke(0); 
          } else {
            p5.stroke(255); 
          }
          p5.rect(0, 0, i, i);
        }
        for (let i = 90; i >= 0; --i) {
          if (inwards(i, step, w) < w / 2) {
            p5.stroke(255); 
          } else {
            p5.stroke(0); 
          }
          p5.rect(0, 0, i, i);
        }
        p5.stroke(255);
        step += 5; // controls speed of movement
  }
}