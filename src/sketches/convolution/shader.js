import convolutionFrag from 'file-loader!./convolution.frag'
import convolutionVert from 'file-loader!./convolution.vert'
import bomba from 'file-loader!../../videos/bomba.mov'

export default p5 => {
  let shader, fingers, canvas

  p5.preload = () => {
    shader = p5.loadShader(convolutionVert, convolutionFrag)
    fingers = p5.createVideo(bomba, function() {
      canvas = p5.createCanvas(fingers.width, fingers.height, p5.WEBGL)
      fingers.loop()
    })
  }

  p5.setup = () => {
    p5.noStroke()
  }

  p5.draw = () => {
    if (canvas) {
      p5.shader(shader)
      shader.setUniform('kernel', [0, -1, 0, -1, 5, -1, 0, -1, 0])
      shader.setUniform('textureSize', [p5.width, p5.height])
      shader.setUniform('tex0', fingers)
      p5.rect(0, 0, p5.width, p5.height)
    }
  }
}
