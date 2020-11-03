import React from 'react'
import { loadableP5 as P5Wrapper } from '../../sketches/lodable'
import oblique_grating from '../../sketches/oblique_grating'

export default () => {
  return (
    <>
      <div>
        <h3>Instrucciones: </h3>
        <ul>
          <li>Haga clic sobre la imagen</li>
        </ul>

        <p>
          Notará que las lineas azules horizonales, que parecieran no ser
          paralelas entre ellas, realmente sí lo son
        </p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <P5Wrapper sketch={oblique_grating} />
      </div>
    </>
  )
}