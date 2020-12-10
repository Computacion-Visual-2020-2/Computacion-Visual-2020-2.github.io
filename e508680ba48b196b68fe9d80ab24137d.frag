#ifdef GL_ES
precision mediump float;
precision mediump int;
#endif

uniform sampler2D tex0;

varying vec2 vTexCoord;
varying vec3 vEcNormal;
varying vec3 vLightDir;

void main(void){
  vec3 direction=normalize(vLightDir);
  vec3 normal=normalize(vEcNormal);
  
  // float factor=max(dot(direction,normal),0.);
  float factor=1.;

  vec2 pxPosition=vTexCoord;
  pxPosition.y=1.-pxPosition.y;
  
  vec4 color=texture2D(tex0,pxPosition);
  
  gl_FragColor=vec4(factor, factor, factor,1.)*color;
}