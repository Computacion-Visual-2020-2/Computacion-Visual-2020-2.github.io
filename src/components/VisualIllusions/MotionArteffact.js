import React from 'react'
import ooo from '../../sketches/motion_arteffact'
import { loadableP5 as P5Wrapper } from '../../sketches/lodable'

export default () => {
  return (
    <>
      <div>
        <h3>Instrucciones: </h3>
        <ul>
          <li>Observe la imagen unos segundos, luego observe un objeto solido y vuelva a mirar la imagen</li>
        </ul>

        <p>
          Notará que el estímulo estacionario parece moverse en la dirección opuesta al estímulo original 
          (que se mueve físicamente). Se cree que el efecto secundario del movimiento es el resultado de 
          la adaptación del movimiento .
        </p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <P5Wrapper sketch={ooo} />
      </div>
    </>
  )
}
