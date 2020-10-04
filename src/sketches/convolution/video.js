import bomba from 'file-loader!../../videos/bomba.mov'
import kernels from './kernels'
import { applyFilter } from './utils'

const CHANNELS = 4

export default p5 => {
  let playing = false,
    fingers,
    button,
    kernel = 3,
    canvas,
    preloaded = false

  p5.preload = () => {
    fingers = p5.createVideo(bomba, () => {
      preloaded = true
    })
  }

  p5.setup = () => {
    button = p5.createButton('play')
    button.mousePressed(toggleVid)
  }

  p5.draw = function() {
    if (fingers !== undefined && fingers.width > 1 && canvas) {
      p5.image(fingers, 0, 0)
      p5.loadPixels()
      const pixels = p5.pixels
      p5.pixels = applyFilter(pixels, fingers.width, fingers.height, kernels[0].kernel(), CHANNELS)
      p5.updatePixels()
    } else if(!canvas && preloaded) {
      canvas = p5.createCanvas(fingers.width, fingers.height)
    }
  }

  p5.myCustomRedrawAccordingToNewPropsHandler = function(props) {
    if (props.kernel && props.kernel != kernel) kernel = props.kernel
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
