import bomba from 'file-loader!../../videos/bomba.mov'
import { applyFilter } from './utils'

const CHANNELS = 4

export default p5 => {
  let playing = true,
    fingers,
    button,
    kernel,
    canvas,
    preloaded = false

  p5.preload = () => {
    fingers = p5.createVideo(bomba, () => {
      preloaded = true
      fingers.loop()
    })
  }

  p5.setup = () => {
  }

  p5.draw = function() {
    if (fingers !== undefined && fingers.width > 1 && canvas && kernel) {
      p5.image(fingers, 0, 0)
      p5.loadPixels()
      p5.pixels = applyFilter(p5.pixels, fingers.width, fingers.height, kernel, CHANNELS)
      p5.updatePixels()
    } else if(!canvas && preloaded) {
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
