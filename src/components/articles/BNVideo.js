import React, { useEffect, useState } from 'react'
import { loadableP5 as P5Wrapper } from '../../sketches/lodable'
import rgb_shader from '../../sketches/bw/rgb_shader'
import luma_shader from '../../sketches/bw/luma_shader'

const BNVideo = ({}) => {
  const [sketch, setSketch] = useState('rgb')

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <button onClick={() => setSketch('rgb')}>RGB</button>
        <button onClick={() => setSketch('luma')}>LUMA</button>
      </div>

      <div style={{ textAlign: 'center' }}>
        <P5Wrapper sketch={sketch === 'rgb' ? rgb_shader : luma_shader} />
      </div>
    </>
  )
}

export default BNVideo
