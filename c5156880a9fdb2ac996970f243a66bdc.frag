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
  
  vec4 px = texture2D(tex0, pxPosition);
  float avg = px.r + px.g + px.b;
  
  gl_FragColor=vec4(vec3(avg), 1);
}
