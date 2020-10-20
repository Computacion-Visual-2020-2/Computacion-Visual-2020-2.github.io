import convolutionFrag from 'file-loader!./convolution.frag'
import convolutionVert from 'file-loader!./convolution.vert'
import tsunami2 from '../../images/tsunami.jpg'
import kernels from '../convolution/kernels'

export default p5 => {
  let shader,
    canvas,
    img,
    kernel = [],
    enabled = true

  p5.preload = () => {
    shader = p5.loadShader(convolutionVert, convolutionFrag)

    img = p5.loadImage(
      tsunami2,
      img => {},
      err => console.log(err)
    )
  }

  p5.setup = () => {
    p5.noStroke()
    canvas = p5.createCanvas(img.width, img.height, p5.WEBGL)
    kernel = kernels[1].kernel(3, 10).flat()
  }

  p5.draw = () => {
    if (canvas) {
      p5.shader(shader)
      shader.setUniform('kernel', kernel)
      shader.setUniform('textureSize', [img.width, img.height])
      shader.setUniform('tex0', img)
      p5.rect(-img.width, -img.height, img.width, img.height)
    }
  }

  p5.myCustomRedrawAccordingToNewPropsHandler = function(props) {
    if (props.enabled !== undefined) {
      enabled = props.enabled
      kernel = kernels[enabled ? 1 : 0].kernel(3, 10).flat()
    }
  }
}
