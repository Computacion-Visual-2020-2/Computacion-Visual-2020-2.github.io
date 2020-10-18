PImage img, img2;
float r,g,b;
float[][] matrix = {
  {-1, -1, -1},
  {-1, 8, -1},
  {-1, -1, -1},
};

void setup() {
  size(1000, 1000);
  
  img = loadImage("fabio.png");
  img2 = createImage(img.width, img.height, ARGB);
  
  img.loadPixels();
  
  // generateGaussianKernel(13, 13);
  
  for (int x = 0; x < matrix.length; x++) {
    for (int y = 0; y < matrix.length; y++) {
        print(matrix[x][y], " ");
      }
      println();
  }
}

void draw() {
  for (int x = 0; x < img.width; x++) {
    for (int y = 0; y < img.height; y++) {
      int pos = x + y * img.width;
      r = red(img.pixels [pos]);
      g = green(img.pixels[pos]);
      b = blue(img.pixels[pos]); 
      
      img2.pixels[pos] = convolution(x, y, matrix, matrix.length, img);
    }
  }

  img.updatePixels();
  img2.updatePixels();
  
  image(img, 0, 0);
  image(img2, img.width, 0);
}

float[][] generateGaussianKernel(int size, double sigma) {
    // double sigma = (size - 1) / 6.0;    
    // double sigma = SIGMA;
    double two_sigma_sq = 2.0 * sigma * sigma;

    double sum = 0.0;
    int mid_size = size / 2;
    
    float kernel[][] = new float[size][size];

    for (int x = -mid_size; x <= mid_size; x++) 
        for (int y = -mid_size; y <= mid_size; y++) {
            kernel[x + mid_size][y + mid_size] = (float)(exp((float) (-(x * x + y * y) / two_sigma_sq)) / (two_sigma_sq * PI));
            sum += kernel[x + mid_size][y + mid_size];
        }
        
    for (int x = 0; x < size; x++)
        for (int y = 0; y < size; y++)
            kernel[x][y] /= sum;
            
    return kernel;
}

color convolution(int x, int y, float[][] matrix, int matrixsize, PImage img) {
  float rtotal = 0.0;
  float gtotal = 0.0;
  float btotal = 0.0;
  int offset = matrixsize / 2;
  
  for (int i = 0; i < matrixsize; i++ ) {
    for (int j = 0; j < matrixsize; j++ ) {
      
      int xloc = x + i-offset;
      int yloc = y + j-offset;
      int loc = xloc + img.width*yloc;
      
      loc = constrain(loc,0,img.pixels.length-1);

      rtotal += (red(img.pixels[loc]) * matrix[i][j]);
      gtotal += (green(img.pixels[loc]) * matrix[i][j]);
      btotal += (blue(img.pixels[loc]) * matrix[i][j]);
    }
  }
  
  rtotal = constrain(rtotal,0,255);
  gtotal = constrain(gtotal,0,255);
  btotal = constrain(btotal,0,255);
  
  return color(rtotal,gtotal,btotal); 
}
