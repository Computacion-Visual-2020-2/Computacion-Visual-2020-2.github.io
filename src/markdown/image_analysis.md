# Taller de análisis de imágenes por software

## Propósito
Introducir el análisis de imágenes/video al implementar las siguientes operaciones de análisis para imágenes/video tanto por software como por hardware (empleando shaders):

## Tareas
Implementar las siguientes operaciones de análisis para imágenes/video:

* Conversión a escala de grises: promedio rgb y luma.
* Aplicación de algunas máscaras de convolución.
* (solo para imágenes) Despliegue del histograma y segmentación a partir del mismo.
* (solo para video) Medición de la eficiencia computacional para las operaciones realizadas.

Emplear dos canvas, uno para desplegar la imagen/video original y el otro para el resultado del análisis.

## Discusión

### Medición de la eficiencia computacional para las operaciones realizadas.

#### Conversión a escala de grises



#### Convolución

La complejidad del algoritmo que realiza la convolución de una imagen de $M \times N$ píxeles y $C$ canales, con un kernel representado por una matriz de tamaño $K \times K$ es de $\mathcal{O}(M \times N \times K^2 \times C)$, lo que implica que computacionalmente es una tarea que demanda muchos recursos.

También es importante resaltar que realizar la convolución de una imagen es una tarea potencialmente paralelizable, puesto que el cálculo del color de un pixel no depende del resultado de algún cálculo anterior, por lo tanto sería una gran idea abordar esta tarea mediante procesamiento paralelo usando una GPU. Para ésto, se usó la librería GLSL que permite crear shaders (programas que corren directamente en la GPU del dispositivo) de una manera muy sencilla.

Habiendo implementado este programa se notó una notable mejoría en el rendimiento de la aplicación y renderizado de las imágenes. Sin embargo el cambio fue mucho más notorio al intentar realizar el procesamiento con un video. En el analisis que empezará a continuación se usó un video a color con dimensiones $640 \times 360$.

El computador sobre el cual se realizó la prueba es un HP ZBOOK 15 con las siguientes especificaciones

> **SO:** Ubuntu 20.04
> 
> **Procesador:** Intel Core i7-8850H (2.6 GHz - 12 núcleos)
> 
> **GPU:** NVIDIA Corporation GP107GLM [Quadro P2000 Mobile]


Este es el video procesado con el kernel identidad directamente con p5.js, implicando que el procesamiento se realiza sobre la CPU de la máquina:

![p5.js](https://media.giphy.com/media/WcGVHOeuuJpPZSzGaS/giphy.gif)

Ahora, viendo el mismo video e implementando el mismo algoritmo pero modificado de manera tal que pueda ejecutarse como un shader sobre el video, es decir, haciendo los cálculos sobre la GPU, obtenemos lo siguiente:

![Shader](https://media.giphy.com/media/PFIEJC7KVdlcilM5aL/giphy.gif)

Es evidente en la primer grabación de la reproducción del video cómo el video de la derecha tiene un ligero retraso, quizás no es muy evidente desde una máquina potente como en la cual se está realizando esta comparación, pero seguramente en otra máquina con un procesador más modesto esta diferencia se marcaría mucho más. Por otro lado, tenemos el gran contraste del excelente rendimiento del shader, donde los videos de la izquierda y la derecha se ejecutan con sincronía total para el ojo humano.

Por último, se realizó esta gráfica en la cual se ve la comparación del tiempo que se toma el programa en p5.js ejecutando la función `draw()`, la cual se encarga del renderizado del video. Se puede corroborar cómo usando GLSL (OpenGL Shading Language) el renderizado es (casi) instantáneo, mientras que haciendo la convolución directamente en p5.js toma más de 100 veces más de tiempo.

![Comparación de tiempos ejecutando la función de renderizado](https://github.com/Computacion-Visual-2020-2/Computacion-Visual-2020-2.github.io/blob/0bf40b82d9d9ea96ccbc12bd3777dfa45178b888/src/sketches/convolution/results/plot.png?raw=true)