import React, { useState } from 'react'
import { loadableP5 as P5Wrapper } from '../../sketches/lodable'
import image from '../../sketches/convolution/image'

const ConvolutionImage = ({ kernel, kernelSize }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <P5Wrapper sketch={image} kernel={kernel} kernelSize={kernelSize} />
    </div>
  )
}

export default ConvolutionImage
