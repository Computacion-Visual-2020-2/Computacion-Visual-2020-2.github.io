import React, { useState } from 'react'
import { loadableP5 as P5Wrapper } from '../../sketches/lodable'
import contrastGainControl from '../../sketches/contrast-gain-control'
import contrast from '../../sketches/contrast-gain-control/contrast'
import tsunami from '../../images/tsunami.jpg'
import picasso from '../../images/picasso.jpg'
import botticelli from '../../images/botticelli.jpg'
import vermeer from '../../images/vermeer.jpg'

export default () => {
  const images = [tsunami, picasso, botticelli, vermeer]

  const [enabled, setEnabled] = useState(false)
  const [image, setImage] = useState(Math.floor(Math.random() * images.length))

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
        style={{
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onMouseEnter={() => setEnabled(false)}
        onMouseLeave={() => setEnabled(true)}
      >
        <P5Wrapper
          sketch={contrastGainControl}
          enabled={enabled}
          image={images[image]}
        />
        <div style={{ alignSelf: 'center', margin: '0px 15px' }}>
          <strong>x</strong>
        </div>
        <P5Wrapper sketch={contrast} enabled={enabled} image={images[image]} />
      </div>

      <div style={{ textAlign: 'center' }}>
        <button
          style={{ marginRight: 10 }}
          onClick={() => setImage(prev => (prev - 1) % images.length)}
        >
          Previous
        </button>
        <button
          style={{ marginLeft: 10 }}
          onClick={() => setImage(prev => (prev + 1) % images.length)}
        >
          Next
        </button>
      </div>
    </>
  )
}
