import bomba from 'file-loader!../../videos/bomba.mov'
import { rgb, writeToFile, applyFilter } from '../util'

const CHANNELS = 4

export default p5 => {
  let fingers,
    kernel,
    canvas,
    preloaded = false

  p5.preload = () => {
    fingers = p5.createVideo(bomba, () => {
      preloaded = true
      fingers.loop()
    })
  }

  p5.setup = () => {}

  let start = -1,
    txt = '',
    saved = false

  p5.draw = function() {
    if (fingers !== undefined && fingers.width > 1 && canvas && kernel) {
      if (start < 0) start = Date.now()

      const before = Date.now()
      p5.image(fingers, 0, 0)
      p5.loadPixels()
      p5.pixels = applyFilter(
        p5.pixels,
        fingers.width,
        fingers.height,
        kernel,
        CHANNELS,
        rgb
      )
      p5.updatePixels()
      const after = Date.now()

      if (Date.now() - start < 5000)
        txt = txt.concat(`${after - start}, ${after - before}\n`)

      if (Date.now() - start > 5000 && !saved) {
        const file = writeToFile(txt)
        console.log(file)
        alert(file)
        saved = true
      }
    } else if (!canvas && preloaded) {
      canvas = p5.createCanvas(fingers.width, fingers.height)
    }
  }

  p5.myCustomRedrawAccordingToNewPropsHandler = function(props) {
    if (props.kernel) {
      kernel = props.kernel
      console.log(kernel)
      fingers.time(0)
      fingers.loop()
    }
  }
}
