import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import imageAnalysis from 'file-loader!../markdown/image_analysis.md'
import Markdown from './Markdown'

const Taller1 = props => {
  const [markdown, setMarkdown] = useState()
    useEffect(() => {
      fetch(imageAnalysis)
        .then(txt => txt.text())
        .then(txt => setMarkdown(txt))
    })

//   setMarkdown(test)

  return (
    <>
      <header id="header">
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

      <Markdown source={markdown} />
    </>

    // <header id="header" >
    //     <h2>Taller de análisis de imágenes por software</h2>
    //     <div className='content'>
    //         <br></br>
    //         <h3>Propósito</h3>
    //         <p>Introducir el análisis de imágenes/video al implementar las siguientes operaciones de análisis para imágenes/video tanto por software como por hardware (empleando shaders):</p>
    //         <h3>Tareas:</h3>
    //         <p>
    //             Implementar las siguientes operaciones de análisis para imágenes/video:
    //                 </p>
    //         <p>
    //             * Conversión a escala de grises: promedio rgb y luma.
    //             * Aplicación de algunas máscaras de convolución.
    //             * (solo para imágenes) Despliegue del histograma y segmentación a partir del mismo.
    //             * (solo para video) Medición de la eficiencia computacional para las operaciones realizadas.
    //             </p>
    //         <p>
    //             Emplear dos canvas, uno para desplegar la imagen/video original y el otro para el resultado del análisis.
    //             </p>
    //         <h3>Discusión</h3>
    //         <h4>Medición de la eficiencia computacional para las operaciones realizadas.</h4>
    //     </div>
    //     <div className='content'>
    //         <br />
    //         <h3>
    //             Convolución
    //             </h3>
    //         <p>

    //         </p>
    //         <p>
    //             También es importante resaltar que realizar la convolución de una imagen es una tarea potencialmente paralelizable, puesto que el cálculo del color de un pixel no depende del resultado de algún cálculo anterior, por lo tanto sería una gran idea abordar esta tarea mediante procesamiento paralelo usando una GPU. Para ésto, se usó la librería GLSL que permite crear shaders (programas que corren directamente en la GPU del dispositivo) de una manera muy sencilla.
    //             </p>
    //         <p>
    //             Habiendo implementado este programa se notó una notable mejoría en el rendimiento de la aplicación y renderizado de las imágenes. Sin embargo el cambio fue mucho más notorio al intentar realizar el procesamiento con un video. En el analisis que empezará a continuación se usó un video a color con dimensiones $640 \times 360$.
    //             </p>
    //         <p>
    //             El computador sobre el cual se realizó la prueba es un HP ZBOOK 15 con las siguientes especificaciones
    //             </p>
    //         <p>
    //             SO: Ubuntu 20.04
    //             </p>
    //         <p>
    //             Procesador: Intel Core i7-8850H (2.6 GHz - 12 núcleos)
    //             </p>
    //         <p>
    //             GPU: NVIDIA Corporation GP107GLM [Quadro P2000 Mobile]
    //             </p>
    //         <p>
    //             Este es el video procesado con el kernel identidad directamente con p5.js, implicando que el procesamiento se realiza sobre la CPU de la máquina:
    //         </p>
    //         <img src={'https://media.giphy.com/media/WcGVHOeuuJpPZSzGaS/giphy.gif'} alt="p5..." />
    //         <p>
    //         Ahora, viendo el mismo video e implementando el mismo algoritmo pero modificado de manera tal que pueda ejecutarse como un shader sobre el video, es decir, haciendo los cálculos sobre la GPU, obtenemos lo siguiente:
    //         </p>
    //         <img src={'https://media.giphy.com/media/PFIEJC7KVdlcilM5aL/giphy.gif'} alt="shader..." />
    //         <p>
    //         Es evidente en la primer grabación de la reproducción del video cómo el video de la derecha tiene un ligero retraso, quizás no es muy evidente desde una máquina potente como en la cual se está realizando esta comparación, pero seguramente en otra máquina con un procesador más modesto esta diferencia se marcaría mucho más. Por otro lado, tenemos el gran contraste del excelente rendimiento del shader, donde los videos de la izquierda y la derecha se ejecutan con sincronía total para el ojo humano.
    //         </p>
    //         <p>
    //         Por último, se realizó esta gráfica en la cual se ve la comparación del tiempo que se toma el programa en p5.js ejecutando la función draw(), la cual se encarga del renderizado del video. Se puede corroborar cómo usando GLSL (OpenGL Shading Language) el renderizado es (casi) instantáneo, mientras que haciendo la convolución directamente en p5.js toma más de 100 veces más de tiempo.
    //         </p>
    //         <img src={'https://github.com/Computacion-Visual-2020-2/Computacion-Visual-2020-2.github.io/blob/0bf40b82d9d9ea96ccbc12bd3777dfa45178b888/src/sketches/convolution/results/plot.png?raw=true'} />
    //     </div>
    // </header>
  )
}
Taller1.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Taller1
