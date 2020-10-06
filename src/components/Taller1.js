import PropTypes from 'prop-types'
import React from 'react'
import normal from '../images/rgb.jpeg'
import RGB from '../images/rgb11.jpeg'
import luma from '../images/luma.jpeg'


const Taller1 = props => (
    <header id="header" >
        <div className='content'>
            <br></br>
            <h2>Taller de análisis de imágenes por software</h2>
            <h3>Propósito</h3>
            <p>Introducir el análisis de imágenes/video al implementar las siguientes operaciones de análisis para imágenes/video tanto por software como por hardware (empleando shaders):</p>
            <h3>Tareas:</h3>
            <p>
                Implementar las siguientes operaciones de análisis para imágenes/video:
                    </p>
            <p>
                * Conversión a escala de grises: promedio rgb y luma.
                * Aplicación de algunas máscaras de convolución.
                * (solo para imágenes) Despliegue del histograma y segmentación a partir del mismo.
                * (solo para video) Medición de la eficiencia computacional para las operaciones realizadas.
                </p>
            <p>
                Emplear dos canvas, uno para desplegar la imagen/video original y el otro para el resultado del análisis.
                </p>
            <h3>Discusión</h3>
            <h4>Medición de la eficiencia computacional para las operaciones realizadas.</h4>
            <h4>Conversión a escala de grises</h4>
            <p>
                En fotografía, computación y colorimetría, una escala de grises es aquella en la que el valor de cada píxel es una sola muestra que representa solo una cantidad de luz, es decir, solo transporta información de intensidad. Las imágenes de este tipo, también conocidas como blanco y negro o monocromáticas, están compuestas exclusivamente por tonos de gris, que varían desde el negro en la intensidad más débil hasta el blanco en el más fuerte.
                </p>
            <p>
                Hoy las imágenes en escala de grises (como las fotografías) destinadas a la visualización (tanto en pantalla como impresas) se almacenan comúnmente con 8 bits por píxel muestreado. Esta profundidad de píxeles permite registrar 256 intensidades diferentes (es decir, tonos de gris) y también simplifica el cálculo ya que se puede acceder a cada muestra de píxeles individualmente como un byte completo.
                </p>
            <p>
                La conversión de una imagen de color arbitraria a escala de grises no es única en general, existen diversas tecnicas que abordan este problema de diferentes formas, para el caso de estudio actual se usara el metodo de conversion por promedio rgb y el metodo luma.
                </p>
            <p>
                Promedio RGB Este metodo consiste simplemente en asignar a cada pixel el valor correspondiente al promedio de sus canales RGB. Sin embargo ya que este metodo no toma ninguna otra consideracion fuera de la intensidad de color
                es comun que los resultados no sean muy precisos al representar las sombras o luminosidad de la imagen original.
                </p>
            <p>
                Luma Este metodo se basa en el hecho de que el ojo humano es mas sensible a unas frecuencias de luz que a otras, en particular el ojo humano es mas sensible a la luz verde, un poco menos a la luz roja y un poco menos a la azul. El metodo consiste en un promedio ponderarado de los canales RGB, el peso asignado a cada canal se da de acuerdo a la sensibilidad del ojo a ese canal, es decir el peso del canal verde sera mayor que el del canal rojo y azul. Concretamente los pesos son: 0.587 para el canal verde, 0.2999 para el canal rojo y 0.114 para el canal azul.
                </p>
            <h3>
                Comparativa promedio vs luma
                </h3>
            <h4>
                Fotografía
                </h4>
            <img src={normal} alt="Foto" />
            <h4>
                Aplicando promedio RGB
                </h4>
            <img src={RGB} alt="RGB" />
            <h4>
                Aplicando Luma
                </h4>
            <img src={luma} alt="Luma" />
            <br />
            </div>
            <div className='content'>
                <br />
            <h3>
                Convolución
                </h3>
            <p>

            </p>
            <p>
                También es importante resaltar que realizar la convolución de una imagen es una tarea potencialmente paralelizable, puesto que el cálculo del color de un pixel no depende del resultado de algún cálculo anterior, por lo tanto sería una gran idea abordar esta tarea mediante procesamiento paralelo usando una GPU. Para ésto, se usó la librería GLSL que permite crear shaders (programas que corren directamente en la GPU del dispositivo) de una manera muy sencilla.
                </p>
            <p>
                Habiendo implementado este programa se notó una notable mejoría en el rendimiento de la aplicación y renderizado de las imágenes. Sin embargo el cambio fue mucho más notorio al intentar realizar el procesamiento con un video. En el analisis que empezará a continuación se usó un video a color con dimensiones $640 \times 360$.
                </p>
            <p>
                El computador sobre el cual se realizó la prueba es un HP ZBOOK 15 con las siguientes especificaciones
                </p>
            <p>
                SO: Ubuntu 20.04
                </p>
            <p>
                Procesador: Intel Core i7-8850H (2.6 GHz - 12 núcleos)
                </p>
                <p>
                GPU: NVIDIA Corporation GP107GLM [Quadro P2000 Mobile]
                </p>
        </div>
        <nav>
            <ul>
                <li>
                    <button
                        onClick={() => {
                            props.onOpenArticle('convolution')
                        }}
                    >
                        Convolución
          </button>
                </li>

                <li>
                    <button
                        onClick={() => {
                            props.onOpenArticle('BlackAndWhite')
                        }}
                    >
                        B/N
          </button>
                </li>

                <li>
                    <button
                        onClick={() => {
                            props.onOpenArticle('histogram')
                        }}
                    >
                        Histograma
          </button>
                </li>
            </ul>
        </nav>
    </header>
)
Taller1.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool,
}

export default Taller1