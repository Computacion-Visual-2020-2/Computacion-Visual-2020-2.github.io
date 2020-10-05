export const applyFilter = (pixels, width, height, kernel, channels, f) => {
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      let idx = (j * width + i) * channels
      const colors = f(i, j, kernel, pixels, width, height, channels)
      for (let c = 0; c < channels; c++) pixels[idx + c] = colors[c]
    }
  }
  return pixels
}

export const convolution = (x, y, matrix, pixels, width, height, channels) => {
  let matrixsize = matrix.length,
    color = Array(channels).fill(0.0),
    offset = Math.floor(matrixsize / 2),
    xloc,
    yloc,
    loc

  for (let i = 0; i < matrixsize; i++) {
    for (let j = 0; j < matrixsize; j++) {
      xloc = x + (i - offset)
      yloc = y + (j - offset)
      if (xloc >= 0 && yloc >= 0) {
        loc = (yloc * width + xloc) * channels

        for (let c = 0; c < channels; c++) {
          color[c] += pixels[loc + c] * matrix[i][j]
          color[c] = color[c] < 0 ? 0 : color[c]
          color[c] = color[c] > 255 ? 255 : color[c]
        }
      } else {
        for (let c = 0; c < channels - 1; c++) color[c] = 0
      }
    }
  }

  if (channels === 4) color[3] = 255

  return color
}

export const rgb = (x, y, matrix, pixels, width, height, channels) => {
  const color = Array(channels).fill(0.0)
  const idx = y * width + x

  let acc = 0
  for (let i = 0; i < 3; i++) acc += matrix[idx] + i
  
  for (let i = 0; i < 3; i++) color[i] = acc / 3

  return color
}

export function createArray(h, w) {
  return Array(h)
    .fill()
    .map(() => Array(w).fill())
}

export const writeToFile = function(text) {
  let data = new Blob([text], { type: 'text/plain' }),
    textFile

  // If we are replacing a previously generated file we need to
  // manually revoke the object URL to avoid memory leaks.
  if (textFile !== null) {
    window.URL.revokeObjectURL(textFile)
  }

  textFile = window.URL.createObjectURL(data)

  // returns a URL you can use as a href
  return textFile
}
