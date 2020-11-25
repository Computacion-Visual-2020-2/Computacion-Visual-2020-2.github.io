#ifdef GL_ES
precision mediump float;
precision mediump int;
#endif

uniform mat4 uModelViewMatrix;
uniform mat3 uNormalMatrix;
uniform vec4 uPointLightLocation;
uniform vec4 uTransform;
uniform vec3 uMouse;
uniform sampler2D tex0;

attribute vec3 aPosition;
attribute vec4 aColor;
attribute vec3 aNormal;
attribute vec2 aTexCoord;

varying vec2 vTexCoord;
varying vec3 vEcNormal;
varying vec3 vLightDir;

void main(){
  vTexCoord=aTexCoord;
  
  vec4 positionVec4=vec4(aPosition,1.);
  positionVec4.xy=positionVec4.xy*2.-1.;
  gl_Position=positionVec4;

  vec3 ecPosition=vec3(uModelViewMatrix*vec4(aPosition,1.));
  vec3 ecNormal=normalize(uNormalMatrix*aNormal);

  vEcNormal = normalize(uNormalMatrix * aNormal);
  vLightDir = normalize(uMouse.xyz - ecPosition);
}