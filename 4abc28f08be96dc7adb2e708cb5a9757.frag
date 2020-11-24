#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265358979323846

uniform vec2 resolution;
uniform float time;
uniform vec2 mouse;

uniform sampler2D tex0;
uniform vec2 textureSize;
uniform float intensity;
uniform vec3 lightColor;

varying vec2 vTexCoord;

void main(void){
  vec3 vLightColor=lightColor/255.0;
  vec2 pxPosition=vTexCoord;
  
  pxPosition.y=1.-pxPosition.y;
  
  vec4 px=texture2D(tex0,pxPosition);
  vec3 ambient=vec3(intensity)*vLightColor;
  vec4 ambientLight=px*vec4(ambient,1.);
  
  gl_FragColor=ambientLight;
}