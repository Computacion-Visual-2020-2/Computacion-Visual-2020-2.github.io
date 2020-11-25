#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 resolution;
uniform float time;
uniform vec2 mouse;

uniform sampler2D tex0;
uniform vec2 textureSize;
uniform float intensity;
uniform vec3 lightColor;

varying vec2 vTexCoord;
varying vec4 vColor;

void main(void){
  vec2 pxPosition=vTexCoord;
  pxPosition.y=1.-pxPosition.y;
  gl_FragColor = vColor;
}