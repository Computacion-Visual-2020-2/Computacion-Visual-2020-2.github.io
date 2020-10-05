import unal from '../../images/fabiotovar.png'

const CHANNELS = 4


export default p5 => {
  let img, img2, matrix, lastKernel

  p5.preload = () => {
    img = p5.loadImage(unal)
  }

  p5.setup = () => {
    // p5.createCanvas(img.width * 2, img.height, p5.WEBGL)
    // img.loadPixels()

    // img2 = p5.createImage(img.width, img.height, p5.ARGB)
    // img2.loadPixels()

    // applyFilter(matrix)
  }

  p5.myCustomRedrawAccordingToNewPropsHandler = function(props) {
    // if (props.kernel) {
    //   if (props.kernel.id === 'gaussian' && props.kernelSize !== lastKernel) {
    //     matrix = props.kernel.kernel(props.kernelSize)
    //     lastKernel = props.kernelSize
    //   } else matrix = props.kernel.kernel()

    //   applyFilter(matrix)
    // }
  }

  p5.draw = () => {
    // p5.image(img, -1000 + img.width, -Math.floor(img.height / 2))
    // p5.image(img2, -1000 + img.width * 2, -Math.floor(img.height / 2))
  }
}
