import React from 'react'
import lilacChaser from '../../sketches/lilac-chaser'
import { loadableP5 as P5Wrapper } from '../../sketches/lodable'

export default () => {
  return (
    <>
      <div>
        <h3>Instrucciones: </h3>
        <ul>
          Centre su vista en el punto (<strong>•</strong>) que está en el
          centro.
        </ul>
        <p>
          Notará tres cosas diferentes:
        </p>
        <ol type="1">
          <li>Un hueco que rodea el círculo de discos lilas</li>
          <li>Un disco verde que recorre el círculo de discos lilas en lugar del espacio</li>
          <li>El disco verde girando sobre el fondo gris, habiendo desaparecido en secuencia los discos lilas.</li>
        </ol>
      </div>
      <div style={{ textAlign: 'center' }}>
        <P5Wrapper sketch={lilacChaser} />
      </div>
    </>
  )
}
