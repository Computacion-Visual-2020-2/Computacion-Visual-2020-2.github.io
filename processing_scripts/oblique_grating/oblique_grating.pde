LinedRect[] rects;
boolean illusionDisabled = false;
boolean startsWithBlack = true;

void setup() {
  size(600, 600);
  
  rects = new LinedRect[6];
  
  int counter = 0;
  for(int i = 0; i < 9 ; i++) {
    if((i + 2) % 3 != 0) {
      rects[counter++] = new LinedRect(0, 50*i, 600, 50, counter % 2 == 0 ? "top" : "bottom", startsWithBlack);
    }
  }
}

void mouseClicked() {
  illusionDisabled = !illusionDisabled;
}

void draw() {
  background(color(149, 179, 231));
  
  int counter = 1;
  startsWithBlack = true;
  
  for (LinedRect lr : rects) {
    lr.display();
    lr.setStartsWithBlack(startsWithBlack);
    
    if(!illusionDisabled) {
      lr.disableIllusion();
      startsWithBlack = !startsWithBlack;
      if(counter % 2 == 0) {
        startsWithBlack = !startsWithBlack;
      }
    } else {
      lr.enableIllusion();
    }
    
    counter++;
  }
}

class LinedRect {
  float wid, hei, xpos, ypos;
  color[] colors;
  String rhombusPos;
  Rhombus[] rhombuses;
  boolean inBlack;
  boolean disabledIllusion = false;
  
  LinedRect(float x, float y, float w, float h, String rhombus, boolean startsWithBlack) {
    xpos = x;
    ypos = y;
    wid = w;
    hei = h;
    rhombusPos = rhombus;
    inBlack = startsWithBlack;
    
    colors = new color[2];
    colors[0] = color(127, 127, 127);
    colors[1] = color(221, 235, 252);
    
    if(!rhombusPos.equals("none")) {
      rhombuses = new Rhombus[int(wid / hei) + 1];
      
      float ycen = ypos;      
      if(rhombusPos.equals("bottom")) {
        ycen = ypos + hei;
      }
      
      for(int i = 0; i < int(wid / hei) + 1; i++) {
        rhombuses[i] = new Rhombus(xpos + hei * i, ycen, 16, i % 2 == (inBlack ? 1 : 0));
      }
    }
  }
  
  void display() {
    for(int i = 0; i < int(wid / hei) + 1; i++) {
      fill(colors[i % 2]);
      noStroke();
      rect(xpos + hei * i, ypos, wid, hei);
    }
    
    int i = 0;
    for(Rhombus r : rhombuses) {
      r.display();
      r.setStartsWithBlack(disabledIllusion && i++ % 2 == (inBlack ? 1 : 0));
    }
  }
  
  void disableIllusion() {
    disabledIllusion = true; 
  }
  
  void enableIllusion() {
    disabledIllusion = false; 
  }
  
  void setStartsWithBlack(boolean startsWithBlack) {
    inBlack = startsWithBlack;
  }
}

class Rhombus {
  float wid, xpos, ypos;
  color[] colors;
  boolean inBlack = false;
  
  Rhombus(float xcen, float ycen, float w, boolean startsWithBlack) {
    xpos = xcen - w / 2;
    ypos = ycen - w / 2;
    wid = w;
    inBlack = startsWithBlack;
    
    colors = new color[2];
    colors[0] = color(0, 0, 0);
    colors[1] = color(255, 255, 255);
  }
  
  void display() {
    pushMatrix();
    translate(xpos + wid / 2, ypos - wid / 4);
    rotate(radians(45));
    
    for(int i = 0; i < 2; i++) {
      for(int j = 0; j < 2; j++) {
        fill(colors[(i + j + (inBlack ? 0 : 1)) % 2]);
        noStroke();
        rect(wid / 2 * i, wid / 2 * j, wid / 2, wid / 2);
      }
    }
    
    popMatrix();
  }
  
  void setStartsWithBlack(boolean startsWithBlack) {
    inBlack = startsWithBlack;
  }
}
