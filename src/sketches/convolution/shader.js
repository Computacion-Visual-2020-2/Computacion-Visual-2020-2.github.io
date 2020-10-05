import convolutionFrag from 'file-loader!./convolution.frag'
import convolutionVert from 'file-loader!./convolution.vert'
import bomba from 'file-loader!../../videos/bomba.mov'
import { writeToFile } from '../util'

export default p5 => {
  let shader,
    fingers,
    canvas,
    button,
    playing = true,
    kernel

  p5.preload = () => {
    shader = p5.loadShader(convolutionVert, convolutionFrag)
    fingers = p5.createVideo(bomba, function() {
      canvas = p5.createCanvas(fingers.width, fingers.height, p5.WEBGL)
      fingers.loop()
    })
  }

  p5.myCustomRedrawAccordingToNewPropsHandler = function(props) {
    if (props.kernel) {
      kernel = props.kernel.flat()
      console.log(kernel)
      fingers.time(0)
      fingers.loop()
    }
  }

  p5.setup = () => {
    p5.noStroke()
  }

  let start = -1,
    txt = '',
    saved = false

  p5.draw = () => {
    if (canvas && kernel) {
      if (start < 0) start = Date.now()

      const before = Date.now()
      p5.shader(shader)
      shader.setUniform('kernel', kernel)
      shader.setUniform('textureSize', [p5.width, p5.height])
      shader.setUniform('tex0', fingers)
      p5.rect(0, 0, p5.width, p5.height)
      const after = Date.now()

      if (after - start < 5000)
        txt = txt.concat(`${after - start}, ${after - before}\n`)

      if (Date.now() - start > 5000 && !saved) {
        const file = writeToFile(txt)
        console.log(file)
        // alert(file)
        saved = true
      }
    }
  }

  function toggleVid() {
    if (playing) {
      fingers.pause()
      button.html('play')
    } else {
      fingers.loop()
      button.html('pause')
    }
    playing = !playing
  }
}
