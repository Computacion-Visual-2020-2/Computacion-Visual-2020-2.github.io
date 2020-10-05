import perro from '../../images/perro.jpg';

export default p5 => {
  let img, img2, img3, img4;

  const applyFilter = function(value = 0) {
    for (let y = 0; y < img4.height; y++) {
      for (let x = 0; x < img4.width; x++) {
        let index = (x + y * img4.width)*4;
        let r = img4.pixels[index+0];
        let g = img4.pixels[index+1];
        let b = img4.pixels[index+2];   
        
        let luma = r *.299 + g *.587 + b *.114;
        luma = p5.constrain(luma + value, 0, 255);

        img4.pixels[index+0] = luma;
        img4.pixels[index+1] = luma;
        img4.pixels[index+2] = luma;
      }
    }
    img4.updatePixels();
  }

  p5.preload = () => {
    img = p5.loadImage(perro);
    img2 = p5.loadImage(perro);
    img3 = p5.loadImage(perro);
    img4 = p5.loadImage(perro);
  }

  p5.setup = () => {
    p5.createCanvas(img.width*2, img.height*2);
    img.loadPixels();
    img2.loadPixels();
    img3.loadPixels();
    img4.loadPixels();
    applyFilter();
  }

  p5.myCustomRedrawAccordingToNewPropsHandler = function(props) {
    if (props.value) {
      if(props.add) applyFilter(props.value);
      else applyFilter(-props.value-1);
    }
  }

  p5.draw = () => {
    for (let y = 0; y < img2.height; y++) {
      for (let x = 0; x < img2.width; x++) {
        let index = (x + y * img2.width)*4;
        let r = img2.pixels[index+0];
        let g = img2.pixels[index+1];
        let b = img2.pixels[index+2];
        
        let bw = (r + g + b)/3;
        
        img2.pixels[index+0] = bw;
        img2.pixels[index+1] = bw;
        img2.pixels[index+2] = bw;
      }
    }
    img2.updatePixels();
    
    for (let y = 0; y < img3.height; y++) {
      for (let x = 0; x < img3.width; x++) {
        let index = (x + y * img3.width)*4;
        let r = img3.pixels[index+0];
        let g = img3.pixels[index+1];
        let b = img3.pixels[index+2];   
        
        let luma = r *.299 + g *.587 + b *.114;
        
        img3.pixels[index+0] = luma;
        img3.pixels[index+1] = luma;
        img3.pixels[index+2] = luma;
      }
    }
    img3.updatePixels();

    p5.image(img, 0 , 0);
    p5.image(img2, img.width, 0);
    p5.image(img3, 0, img.height);
    p5.image(img4, img.width, img.height);
  }
}