export const applyFilter = (pixels, width, height, kernel, channels) => {
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      let idx = (j * width + i) * channels
      const colors = convolution(i, j, kernel, pixels, width, height, channels)
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
