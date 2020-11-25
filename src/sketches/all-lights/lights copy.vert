uniform mat4 uModelViewMatrix;
uniform mat3 uNormalMatrix;
uniform vec4 uPointLightLocation;
uniform vec4 uTransform;
uniform vec2 uMouse;
uniform sampler2D tex0;

attribute vec3 aPosition;
attribute vec4 aColor;
attribute vec3 aNormal;
attribute vec2 aTexCoord;

varying vec2 vTexCoord;
varying vec4 vColor;

void main(){
  vTexCoord=aTexCoord;
  
  vec4 positionVec4=vec4(aPosition,1.);
  positionVec4.xy=positionVec4.xy*2.-1.;
  gl_Position=positionVec4;

  vec3 ecPosition=vec3(uModelViewMatrix*positionVec4);
  vec3 ecNormal=normalize(uNormalMatrix*aNormal);

  vec3 lightDirection=normalize(vec3(uMouse.xy, 1.0) - ecPosition);

  float factor = max(dot(lightDirection, ecNormal), 0.);

  vec2 pxPosition=vTexCoord;
  pxPosition.y=1.-pxPosition.y;

  vec4 color=vec4(factor,factor,factor,1.) * vec4(.5,.5,.5,.5);
  
  vColor=vec4(color.xyz, 1.);
}