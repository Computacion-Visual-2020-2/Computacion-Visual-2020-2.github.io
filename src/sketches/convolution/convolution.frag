// These are necessary definitions that let you graphics card know how to render the shader
#ifdef GL_ES
precision mediump float;
#endif

uniform float kernel[9];
uniform sampler2D tex0;
uniform vec2 textureSize;

varying vec2 vTexCoord;

void main(){
  vec2 pxPosition=vTexCoord;
  pxPosition.y=1.-pxPosition.y;
  
  vec4 sum=vec4(0.);
  vec2 stepSize=1./(textureSize);
  
  sum+=texture2D(tex0,vec2(pxPosition.x-stepSize.x,pxPosition.y-stepSize.y))*kernel[0];
  sum+=texture2D(tex0,vec2(pxPosition.x,pxPosition.y-stepSize.y))*kernel[1];
  sum+=texture2D(tex0,vec2(pxPosition.x+stepSize.x,pxPosition.y-stepSize.y))*kernel[2];
  
  sum+=texture2D(tex0,vec2(pxPosition.x-stepSize.x,pxPosition.y))*kernel[3];
  sum+=texture2D(tex0,vec2(pxPosition.x,pxPosition.y))*kernel[4];
  sum+=texture2D(tex0,vec2(pxPosition.x+stepSize.x,pxPosition.y))*kernel[5];
  
  sum+=texture2D(tex0,vec2(pxPosition.x-stepSize.x,pxPosition.y+stepSize.y))*kernel[6];
  sum+=texture2D(tex0,vec2(pxPosition.x,pxPosition.y+stepSize.y))*kernel[7];
  sum+=texture2D(tex0,vec2(pxPosition.x+stepSize.x,pxPosition.y+stepSize.y))*kernel[8];
  
  sum.a=1.;
  
  gl_FragColor=sum;
}
