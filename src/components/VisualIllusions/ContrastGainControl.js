import React, { useState } from 'react'
import { loadableP5 as P5Wrapper } from '../../sketches/lodable'
import contrastGainControl from '../../sketches/contrast-gain-control'
import contrast from '../../sketches/contrast-gain-control/contrast'

export default () => {
  const [enabled, setEnabled] = useState(false)

  return (
    <>
      <div>
        <h3>Instrucciones: </h3>
        <ul>
          <li>
            Pase el mouse sobre la imagen, al retirarlo, se aplicarán dos
            efectos a cada una de las imágenes.
          </li>
          <li>
            Centre su vista en la equis (<strong>x</strong>) que está en el
            centro durante 10 segundos.
          </li>
          <li>
            Coloque el mouse nuevamente sobre las imágenes sin retirar su vista
            de la equis.
          </li>
        </ul>

        <p>
          Podrá ver cómo una de las imágenes se ve más oscura que la otra, y que
          con el transcurrir del tiempo, los colores se balancearán hasta quedar
          iguales
        </p>
      </div>
      <div
        style={{ textAlign: 'center', display: 'flex' }}
        onMouseEnter={() => setEnabled(false)}
        onMouseLeave={() => setEnabled(true)}
      >
        <P5Wrapper sketch={contrastGainControl} enabled={enabled} />
        <div style={{ alignSelf: 'center', margin: '0px 15px' }}>
          <strong>x</strong>
        </div>
        <P5Wrapper sketch={contrast} enabled={enabled} />
      </div>
    </>
  )
}
