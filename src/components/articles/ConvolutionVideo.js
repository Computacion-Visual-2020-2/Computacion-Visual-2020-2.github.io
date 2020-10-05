import React, { useEffect, useState } from 'react'
import { loadableP5 as P5Wrapper } from '../../sketches/lodable'
import convolution from '../../sketches/convolution'
const { video, shader } = convolution

const ConvolutionVideo = ({ kernel, kernelSize }) => {
  const [sketch, setSketch] = useState('shader')
  const [kernelMatrix, setKernelMatrix] = useState([])

  useEffect(() => {
    if (kernel) {
      let matrix
      if (kernel.id === 'gaussian') matrix = kernel.kernel(3, kernelSize)
      else matrix = kernel.kernel()

      setKernelMatrix(matrix)
    }
  }, [kernel, kernelSize, sketch])

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <button onClick={() => setSketch('shader')}>Shader</button>
        <button onClick={() => setSketch('video')}>P5.js</button>
      </div>

      <div style={{ textAlign: 'center' }}>
        <P5Wrapper
          sketch={sketch === 'shader' ? shader : video}
          kernel={kernelMatrix}
        />
      </div>
    </>
  )
}

export default ConvolutionVideo
