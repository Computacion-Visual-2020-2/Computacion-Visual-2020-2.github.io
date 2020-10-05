import pgImg from '../../images/pg.jpeg';

export default p5 => {
  let img, img2, histMax, pg;
  let hist = new Array(256).fill(0);

  p5.preload = () => {
    img = p5.loadImage(pgImg);
    img2 = p5.loadImage(pgImg);
  }

  p5.setup = () => {
    p5.createCanvas(1688, 750);
    p5.background(p5.color(80, 80, 80));
    p5.image(img, 0 , 0);
      // Calculate the histogram
    for (let i = 0; i < img.width; i++) {
      for (let j = 0; j < img.height; j++) {
        let r = p5.int(p5.red(img.get(i,j))); 
        hist[r]++;
      } 
    }
        
    // Find the largest value in the histogram
    histMax = p5.max(hist);
    p5.line(600, 725, 1112, 725);
    let ini=600;
    
    //draw histogram
    for (let i = 0; i < 256; i ++) {
      let which = p5.int(p5.map(hist[i], 0, histMax, 0, 700));
      p5.line(ini+1, 725, ini+1, 725-which);
      ini+=2;
    }

    //calcular clusters segun histrograma
    let old_r,new_r, sumcolor,clustersize,numclusters, inicio,fin, cluster_index;
    let cluster_positions = new Array(130);
    let subiendo;
    old_r=new_r=hist[0]; 
    cluster_index=sumcolor=clustersize=numclusters=0;
    if(old_r<=hist[1]){
      subiendo=true;
    }else{
      subiendo=false;
    }

    inicio=0;
    clustersize=new_r;
    for (let i = 1; i < 256; i++) {
        old_r = new_r;
        new_r = hist[i];
        if(old_r<=new_r && subiendo === true){
          sumcolor+=(i*new_r);
          clustersize+=new_r;
        }else{
          if(old_r<=new_r && subiendo === false){
            subiendo=true;
            fin=i-1;
            let myclus = new Cluster(inicio,fin,sumcolor/clustersize);
            cluster_positions[cluster_index]= myclus;
            cluster_index++;
            numclusters++;
            // console.log("inicio: "+inicio+" fin: "+fin+"size: "+clustersize);
            inicio=i;
            clustersize=new_r;
            sumcolor=(i*new_r);
          }else{
            if(old_r>=new_r && subiendo === true){
              subiendo=false;
              sumcolor+=(i*new_r);
              clustersize+=new_r;
            }else{
              if(old_r>=new_r && subiendo === false){
                sumcolor+=(i*new_r);
                clustersize+=new_r;
              }
            }
          }
        }
    }
    fin=255;
    let myclus = new Cluster(inicio,fin,sumcolor/clustersize);
    cluster_positions[cluster_index]=myclus;
    numclusters++;
    
    let myvar=5;
    let clusterSize2 = Math.trunc(numclusters/myvar);
    let newCluster = new Array(myvar);
    let colores=0;
    let init,end,counter;
    let ncindex=0;
    let termina=false;
    counter=0;

    init=cluster_positions[0].inicio;

    // console.log(cluster_positions);
    // console.log(init);

    for(let j=0; j<numclusters; j++){
      counter++;
      // console.log(j%clusterSize2 === clusterSize2-1, j%clusterSize2 ,clusterSize2-1);
      if(j%clusterSize2 === clusterSize2-1){
        end = cluster_positions[j].fin;
        colores += cluster_positions[j].mycolor;
        let nclus = new Cluster(init,end,colores/counter);
        counter=0;
        newCluster[ncindex]=nclus;
        ncindex++;
        if(j !== numclusters-1){
          init = cluster_positions[j+1].inicio;
          termina=true;
        }
        colores = 0;
      }else{
        termina=false;
        colores += cluster_positions[j].mycolor;
      }
    }
    if(termina === false){
      let nclus = new Cluster(newCluster[ncindex-1]?.inicio ,255,(newCluster[ncindex-1]?.mycolor+(colores/counter))/2);
      newCluster[ncindex-1]=nclus;
    }
    // console.log(newCluster);
    // pg = p5.createCanvas(558, 750);
    // pg.beginDraw();
    img2.loadPixels();
    for (let i = 0; i < 558*750; i++) {
      let p = img2.pixels[i];
      let r = p5.red(p);
      for(let j=0; j < myvar; j++){
        let clus = newCluster[j];
        // console.log(clus);
        if(r >= clus?.inicio && r <= clus?.fin){
          // console.log(clus?.mycolor);
          img2.pixels[i] = p5.color(clus?.mycolor);
          j=130;
        }
      }
    }
    // console.log('done');
    img2.updatePixels();
    p5.image(img2, 1130, 0);
    // p5.image(img2, 0, 0);
    // pg.endDraw();
  }

  p5.draw = () => {
    p5.fill(0,0,0);
    p5.rect(1040, 5, 80, 50);
    let info;
    let x,y;
    if (p5.mouseX < 600 || p5.mouseX > 1111) {
      info = "- - - - - - - -";
    } else {
      if (p5.mouseX % 2  === 0) {
        x = (p5.mouseX-600)/2;
      } else {
        x = (p5.mouseX-601)/2;
        
      }
      y = hist[Math.trunc(x)];
      info = Math.trunc(x) + " , " + Math.trunc(y);
    }
    p5.fill(255,255,255);
    p5.text(info, 1050, 24, 100, 50);
  }
}

class Cluster{
  constructor(ini, fini, colour){
    this.inicio=ini;
    this.fin=fini;
    this.mycolor=colour;
  }
}