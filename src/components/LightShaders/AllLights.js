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
      {/* <div>
        <h5>Intensity: </h5>
        <Slider
          min={0}
          max={100}
          step={2}
          width={250}
          value={intensity}
          onChange={setIntensity}
        />
      </div> */}
      <div style={{ marginTop: 40 }}>
        <h5>Color: </h5>
        <CirclePicker
          width="100%"
          color={lightColor}
          onChangeComplete={color => setLightColor(color.rgb)}
          colors={[
            '#fff',
            '#f44336',
            '#9c27b0',
            '#673ab7',
            '#3f51b5',
            '#2196f3',
            '#03a9f4',
            '#00bcd4',
            '#009688',
            '#4caf50',
            '#8bc34a',
            '#cddc39',
            '#ffeb3b',
            '#ffc107',
            '#ff9800',
            '#ff5722',
            '#795548',
            '#607d8b',
          ]}
          circleSize={50}
        />
      </div>
    </>
  )
}
