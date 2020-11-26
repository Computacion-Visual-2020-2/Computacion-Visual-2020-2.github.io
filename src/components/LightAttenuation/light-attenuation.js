import React, { useState } from 'react'
import { loadableP5 as P5Wrapper } from '../../sketches/lodable'
import lightAttenuation from '../../sketches/light-attenuation'

export default () => {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <P5Wrapper
          sketch={lightAttenuation}
        />
      </div>
    </>
  )
}
