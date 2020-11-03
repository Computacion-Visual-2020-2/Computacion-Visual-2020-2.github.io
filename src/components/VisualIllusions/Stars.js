import React from 'react'
import { loadableP5 as P5Wrapper } from '../../sketches/lodable'
import stars from '../../sketches/stars'

export default () => {
  return (
    <>
      <div>
        <h3>Instrucciones: </h3>
        <ul>
          <li>Ubique el mouse en el centro de la imagen.
               Luego, cubra el centro de la imagen con la mano, los puntos aparecerán acelerando. 
               Por otro lado , si cubre los bordes, parecerá que los puntos se han ralentizado.</li>
        </ul>

        <p>
          Notará que cambios de velocidades.
        </p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <P5Wrapper sketch={stars} />
      </div>
    </>
  )
}