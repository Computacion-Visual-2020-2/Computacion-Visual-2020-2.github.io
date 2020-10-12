import { createArray } from '../util'

function generateGaussianKernel(size = 3, sigma = 3) {
  let two_sigma_sq = 2.0 * sigma * sigma
  let sum = 0,
    mid_size = Math.floor(size / 2),
    kernel = createArray(size, size)

  for (let x = -mid_size; x <= mid_size; x++)
    for (let y = -mid_size; y <= mid_size; y++) {
      kernel[x + mid_size][y + mid_size] =
        Math.exp(-(x * x + y * y) / two_sigma_sq) / (two_sigma_sq * Math.PI)
      sum += kernel[x + mid_size][y + mid_size]
    }

  for (let x = 0; x < size; x++)
    for (let y = 0; y < size; y++) kernel[x][y] /= sum

  return kernel
}

export default [
  {
    id: 'identity',
    name: 'Identity',
    kernel: () => [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ],
  },
  { id: 'gaussian', name: 'Gaussian', kernel: generateGaussianKernel },
  {
    id: 'sharpen',
    name: 'Sharpen',
    kernel: () => [
      [0, -1, 0],
      [-1, 5, -1],
      [0, -1, 0],
    ],
  },
  // {
  //   id: 'unsharp-masking',
  //   name: 'Unsharp Masking',
  //   kernel: () => [
  //     [-1 / 256, -4 / 256, -6 / 256, -4 / 256, -1 / 256],
  //     [-4 / 256, -16 / 256, -24 / 256, -16 / 256, -4 / 256],
  //     [-6 / 256, -24 / 256, -476 / 256, -24 / 256, -6 / 256],
  //     [-4 / 256, -16 / 256, -24 / 256, -16 / 256, -4 / 256],
  //     [-1 / 256, -4 / 256, -6 / 256, -4 / 256, -1 / 256],
  //   ],
  // },
  // {
  //   id: 'bottom-sobel',
  //   name: 'Bottom Sobel',
  //   kernel: () => [
  //     [-1, -2, -1],
  //     [0, 0, 0],
  //     [1, 2, 1],
  //   ],
  // },
  {
    id: 'outline',
    name: 'Outline',
    kernel: () => [
      [-1, -1, -1],
      [-1, 8, -1],
      [-1, -1, -1],
    ],
  },
  // {
  //   id: 'horizontal',
  //   name: 'Horizonal lines',
  //   kernel: () => [
  //     [-1, -1, -1],
  //     [2, 2, 2],
  //     [-1, -1, -1],
  //   ],
  // },
]

 

