import React from 'react'
import ebbinghaus from '../../sketches/ebbinghaus'
import { loadableP5 as P5Wrapper } from '../../sketches/lodable'

export default () => {
  return (
    <>
      <div>
        <h3>Instrucciones: </h3>
        <ul>
          <li>Haga clic sobre la imagen</li>
        </ul>

        <p>
          Notará que la esfera naranja de lado derecho es más grande
          que la del lado izquierdo, pero son del mismo tamaño
        </p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <P5Wrapper sketch={ebbinghaus} />
      </div>
    </>
  )
}
