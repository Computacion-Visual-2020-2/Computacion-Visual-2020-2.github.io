import React, { useState } from 'react'
import { loadableP5 as P5Wrapper } from '../../sketches/lodable'
import allLights from '../../sketches/all-lights'
import Slider from 'react-rangeslider'

import { CirclePicker } from 'react-color'

export default () => {
  const [intensity, setIntensity] = useState(100)
  const [lightColor, setLightColor] = useState({ r: 255, g: 255, b: 255 })

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <P5Wrapper
          sketch={allLights}
          intensity={intensity}
          lightColor={lightColor}
        />
      </div>
    </>
  )
}
