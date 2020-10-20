import React, { useState } from 'react'
import { loadableP5 as P5Wrapper } from '../../sketches/lodable'
import Slider from 'react-rangeslider'
import convolution from '../../sketches/convolution'

const ConvolutionVideo = () => {
  const [tmp, setTmp] = useState(3)
  const [kernel, setKernel] = useState(3)
  const { video } = convolution

  const onChangeComplete = () => {
    setKernel(tmp)
  }

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <P5Wrapper sketch={video} kernel={kernel} />
      </div>

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
            max={7}
            step={2}
            width={250}
            value={tmp}
            onChangeComplete={onChangeComplete}
            onChange={setTmp}
          />
        </div>
      </div>
    </>
  )
}

export default ConvolutionVideo
