function applyFilter(p5, img, img2, kernel, channels) {
    if (
      img !== undefined &&
      img2 !== undefined &&
      img.width > 1 &&
      img2.width > 1
    ) {
      for (let x = 0; x < img.width * channels; x += channels) {
        for (let y = 0; y < img.height * channels; y += channels) {
          let loc = x + y * img.height
          let col = convolution(p5, x, y, kernel, img, channels)
          for (let c = 0; c < channels; c++) img2.pixels[loc + c] = col[c]
        }
      }
      img2.updatePixels()
    }
}

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

export default {
  applyFilter
}
