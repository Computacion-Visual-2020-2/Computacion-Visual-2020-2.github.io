import fabio from '../../images/fabiotovar.png'

function convolution(p5, x, y, matrix, img, channels) {
  let matrixsize = matrix.length,
    color = Array(4).fill(0.0),
    offset = Math.floor(matrixsize / 2),
    xloc,
    yloc,
    loc

  for (let i = 0; i < matrixsize; i++) {
    for (let j = 0; j < matrixsize; j++) {
      xloc = x + (i - offset) * channels
      yloc = y + (j - offset) * channels
      loc = xloc + img.width * yloc

      loc = p5.constrain(loc, 0, img.pixels.length - 1)

      for (let c = 0; c < channels; c++)
        color[c] += img.pixels[loc + c] * matrix[i][j]
    }
  }

  for (let c = 0; c < channels; c++) color[c] = p5.constrain(color[c], 0, 255)

  return color
}

const CHANNELS = 4

export default p5 => {
  let img, img2, matrix, lastKernel

  const applyFilter = function(kernel) {
    if (
      img !== undefined &&
      img2 !== undefined &&
      img.width > 1 &&
      img2.width > 1
    ) {
      for (let x = 0; x < img.width * CHANNELS; x += CHANNELS) {
        for (let y = 0; y < img.height * CHANNELS; y += CHANNELS) {
          let loc = x + y * img.height
          let col = convolution(p5, x, y, kernel, img, CHANNELS)
          for (let c = 0; c < CHANNELS; c++) img2.pixels[loc + c] = col[c]
        }
      }

      img2.updatePixels()
    }
  }

  p5.preload = () => {
    img = p5.loadImage(fabio)
  }

  p5.setup = () => {
    p5.createCanvas(img.width * 2, img.height, p5.WEBGL)
    img.loadPixels()

    img2 = p5.createImage(img.width, img.height, p5.ARGB)
    img2.loadPixels()

    applyFilter(matrix)
  }

  p5.myCustomRedrawAccordingToNewPropsHandler = function(props) {
    if (props.kernel) {
      if (props.kernel.id === 'gaussian' && props.kernelSize !== lastKernel) {
        matrix = props.kernel.kernel(props.kernelSize)
        lastKernel = props.kernelSize
      } else matrix = props.kernel.kernel()

      applyFilter(matrix)
    }
  }

  p5.draw = () => {
    p5.image(img, -1000 + img.width, -Math.floor(img.height / 2))
    p5.image(img2, -1000 + img.width * 2, -Math.floor(img.height / 2))
  }
}
