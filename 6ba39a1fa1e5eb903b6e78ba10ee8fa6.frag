#ifdef GL_ES
precision mediump float;
#endif

uniform float contrast;
uniform sampler2D tex0;

varying vec2 vTexCoord;

void main(){
  vec2 pxPosition=vTexCoord;
  pxPosition.y=1.-pxPosition.y;
  
  vec4 sum=vec4(0.);

  float factor = (259. * (contrast + 255.)) / (255. * (259. - contrast));


  sum = texture2D(tex0, vec2(pxPosition)) * factor;
  sum.a=1.;
  
  gl_FragColor=sum;
}
