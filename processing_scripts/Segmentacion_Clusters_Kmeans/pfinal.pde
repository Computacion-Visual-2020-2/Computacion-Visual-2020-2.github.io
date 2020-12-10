PGraphics pg;
PImage img,imgseg;
int[] hist = new int[256];
int histMax;

void setup() {
  size(1688, 750);
  img = loadImage("pg.jpg");
  image(img, 0, 0);

  // Calculate the histogram
  for (int i = 0; i < img.width; i++) {
    for (int j = 0; j < img.height; j++) {
      int r = int(red(get(i,j))); 
      hist[r]++;
    }
  }
  
  // Find the largest value in the histogram
  histMax = max(hist);
  line(600, 725, 1112, 725);
  int ini=600;
  
  //draw histogram
  for (int i = 0; i < 256; i ++) {
    int which = int(map(hist[i], 0, histMax, 0, 700));
    line(ini+1, 725, ini+1, 725-which);
    ini+=2;
  }
  
  //calcular clusters segun histrograma
  int old_r,new_r, sumcolor,clustersize,numclusters, inicio,fin, cluster_index;
  Cluster[] cluster_positions = new Cluster[130];
  boolean subiendo;
  old_r=new_r=hist[0]; 
  cluster_index=sumcolor=clustersize=numclusters=0;
  if(old_r<=hist[1]){
    subiendo=true;
  }else{
    subiendo=false;
  }
  inicio=0;
  clustersize=new_r;
  for (int i = 1; i < 256; i++) {
      old_r = new_r;
      new_r = hist[i];
      if(old_r<=new_r && subiendo==true){
        sumcolor+=(i*new_r);
        clustersize+=new_r;
      }else{
        if(old_r<=new_r && subiendo==false){
          subiendo=true;
          fin=i-1;
          Cluster myclus = new Cluster(inicio,fin,sumcolor/clustersize);
          cluster_positions[cluster_index]=myclus;
          cluster_index++;
          numclusters++;
          //println("inicio: "+inicio+" fin: "+fin+"size: "+clustersize);
          inicio=i;
          clustersize=new_r;
          sumcolor=(i*new_r);
        }else{
          if(old_r>=new_r && subiendo==true){
            subiendo=false;
            sumcolor+=(i*new_r);
            clustersize+=new_r;
          }else{
            if(old_r>=new_r && subiendo==false){
              sumcolor+=(i*new_r);
              clustersize+=new_r;
            }
          }
        }
      }
  }
  fin=255;
  Cluster myclus = new Cluster(inicio,fin,sumcolor/clustersize);
  cluster_positions[cluster_index]=myclus;
  numclusters++;
  
  int myvar=2;
  int clusterSize2 = numclusters/myvar;
  Cluster[] newCluster = new Cluster[myvar];
  float colores=0;
  int init,end,counter;
  int ncindex=0;
  boolean termina=false;
  counter=0;
  init=cluster_positions[0].inicio;
  for(int j=0; j<numclusters; j++){
    counter++;
    if(j%clusterSize2==clusterSize2-1){
      println("csize: "+numclusters);
      println(ncindex);
      println("j: "+j);
      end = cluster_positions[j].fin;
      colores += cluster_positions[j].mycolor;
      Cluster nclus = new Cluster(init,end,colores/counter);
      counter=0;
      newCluster[ncindex]=nclus;
      ncindex++;
      if(j!=numclusters-1){
        init = cluster_positions[j+1].inicio;
        termina=true;
      }
      colores = 0;
    }else{
      termina=false;
      colores += cluster_positions[j].mycolor;
    }
  }
  if(termina==false){
    Cluster nclus = new Cluster(newCluster[ncindex-1].inicio,255,(newCluster[ncindex-1].mycolor+(colores/counter))/2);
    newCluster[ncindex-1]=nclus;
  }
  
  pg = createGraphics(558, 750);
  imgseg = loadImage("pg.jpg");
  pg.beginDraw();
  imgseg.loadPixels();
  for (int i = 0; i < 558*750; i++) {
    color p = imgseg.pixels[i];
    float r = red(p);
    for(int j=0; j<myvar; j++){
      Cluster clus = newCluster[j];
      if(r>=clus.inicio && r<=clus.fin){
        imgseg.pixels[i] = color(clus.mycolor);
        j=130;
      }
    }
  }
  pg.updatePixels();
  pg.image(imgseg, 0, 0);
  pg.endDraw();
}

void draw() {
  fill(0,0,0);
  rect(1050, 5, 70, 30);
  String info;
  int x,y;
  if(mouseX<600 || mouseX>1111){
    info="- - - - - - - -";
  }else{
    if(mouseX%2==0){
      x = (mouseX-600)/2;
    }else{
      x = (mouseX-601)/2;
      
    }
    y = hist[x];
    info=String.valueOf(x)+" , "+String.valueOf(y);
  }
  fill(255,255,255);
  text(info, 1060, 24);
  image(pg, 1130, 0);
}

class Cluster{
  int inicio, fin;
  float mycolor;
  Cluster(int ini, int fini, float colour){
    inicio=ini;
    fin=fini;
    mycolor=colour;
  }
}
