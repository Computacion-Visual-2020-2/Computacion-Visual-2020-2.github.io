import React, {  useState } from 'react'
import { loadableP5 as P5Wrapper } from '../../sketches/lodable'
import Slider from 'react-rangeslider'
import convolution from '../../sketches/convolution'

const ConvolutionImage = () => {
  const { kernels, image } = convolution

  const [tmp, setTmp] = useState(3)
  const [kernelSize, setKernelSize] = useState(3)
  const [kernel, setKernel] = useState(0)

  const handleClick = () => {
    setKernel((kernel + 1) % kernels.length)
    setTmp(3)
    setKernelSize(3)
  }

  const onChangeComplete = () => {
    setKernelSize(tmp)
  }

  return (
    <>
      <h1>{kernels[kernel].name}</h1>

      <div style={{ textAlign: 'center' }} onClick={handleClick}>
        <P5Wrapper
          sketch={image}
          kernel={kernels[kernel]}
          kernelSize={kernelSize}
        />
      </div>

      {kernels[kernel].id === 'gaussian' && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 15,
          }}
        >
          <div style={{ width: 400 }}>
            <h5>Kernel size: </h5>
            <Slider
              min={3}
              max={17}
              step={2}
              width={250}
              value={tmp}
              onChangeComplete={onChangeComplete}
              onChange={setTmp}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default ConvolutionImage
