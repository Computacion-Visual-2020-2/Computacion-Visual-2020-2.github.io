import React from 'react'
import ooo from '../../sketches/motion_arteffact'
import { loadableP5 as P5Wrapper } from '../../sketches/lodable'
import rocas from '../../images/rocas.jpg'

export default () => {
  return (
    <>
      <div>
        <h3>Instrucciones: </h3>
        <ul>
          <li>Observe la imagen unos segundos, luego observe una imagen sólida</li>
        </ul>

        <p>
          Notará que el estímulo en la imagen sólida. Se cree que el efecto secundario del movimiento es el resultado de 
          la adaptación del movimiento, ya que las neuronas que codifican un movimiento particular reducen sus respuestas
          con el tiempo de exposición a un estímulo en constante movimiento.
        </p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <P5Wrapper sketch={ooo} />
        <img src={rocas} alt=""  width="600px" />
      </div>
    </>
  )
}
