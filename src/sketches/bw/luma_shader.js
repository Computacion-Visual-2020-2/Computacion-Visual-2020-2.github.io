import lumaFrag from 'file-loader!./luma.frag'
import lumaVert from 'file-loader!./luma.vert'
import bomba from 'file-loader!../../videos/bomba.mov'
import { writeToFile } from '../util'

export default p5 => {
  let shader,
    fingers,
    canvas

  p5.preload = () => {
    shader = p5.loadShader(lumaVert, lumaFrag)
    fingers = p5.createVideo(bomba, function() {
      canvas = p5.createCanvas(fingers.width, fingers.height, p5.WEBGL)
      fingers.loop()
    })
  }

  p5.setup = () => {
    p5.noStroke()
  }

  let start = -1,
    txt = '',
    saved = false

  p5.draw = () => {
    if (canvas) {
      if (start < 0) start = Date.now()

      const before = Date.now()
      p5.shader(shader)
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
}
