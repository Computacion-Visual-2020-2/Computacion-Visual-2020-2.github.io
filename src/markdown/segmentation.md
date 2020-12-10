# Introducción

La segmentación de imágenes es el proceso de particionar una imagen en objetos constituyentes o regiones. Esta división en partes se basa a menudo en las características de los píxeles de la imagen. Por ejemplo, una forma de encontrar regiones en una imagen es buscar discontinuidades abruptas en los valores de píxel, que normalmente indican bordes. Estas aristas pueden definir regiones. Otros métodos dividen la imagen en regiones en función de los valores de color o la textura.

La mayoría de los algoritmos de segmentación están basados en dos propiedades básicas de intensidad de la imagen: la discontinuidad y la similitud. En la categoría de segmentación mediante discontinuidad, el proceso se realiza dividiendo la imagen por cambios abruptos en intensidad, como es el caso de la detección de bordes en una imagen. Con respecto a la segmentación con base en la similitud, ésta se logra mediante la partición de una imagen en regiones que son similares de acuerdo a un conjunto de criterios predefinidos.

El proceso de segmentación se encarga de evaluar cada píxel de la imagen y decidir si contiene o no las características de interés. Como resultado, este método genera una imagen binaria, donde los píxeles que pertenecen al objeto se representan con un '1' (objeto en primer plano), mientras que los que no pertenecen al mismo se representan con un '0' (fondo). La decisión de pertenencia de un píxel a uno u otro segmento se basa en el análisis de alguna característica de la imagen, como por ejemplo los niveles de intensidad o la textura. 


# Tipos

Existen diferentes tipos de segmentación, listados a continuación: 

1. **Segmentación basada en características de píxel.** En este tipo de técnica se pueden encontrar subtipos como: Segmentación por niveles de gris, segmentación de imágenes en color y segmentación por texturas.
1. **Segmentación basada en transiciones.** En esta segmentación en sí se realiza una técnica basada en la detección de bordes.
1. **Segmentación basada en modelos.** Transformada de Hough 
1. **Métodos basados en cuencas**
1. **Segmentación basada en morfología matemática.** En sí esta técnica se basa en ecuaciones diferenciales parciales y redes neuronales.


**Segmentación basada en características de píxel.** Se evalúa cada píxel en función de las características locales de la imagen en el píxel (y usualmente también sus vecinos), y se decide a qué región (también conocido como segmento) pertenece. Este tipo de segmentación se usa comúnmente cuando se requiere separar objetos con similares características de color o intensidad de un fondo heterogéneo. El caso ideal es aquel en el cual los objetos poseen un rango de colores o intensidad de gris muy estrecho, siendo el fondo uniforme. En tal caso se puede definir un umbral de segmentación para separar objetos del fondo. A esta técnica de asignación de un umbral se la conoce como thresholding (literalmente "umbralización"). 

<img src="https://github.com/Computacion-Visual-2020-2/Computacion-Visual-2020-2.github.io/blob/develop/src/images/Segmentación.001.png?raw=true" width="450" /> 

**Figura 1.** Segmentación basada en umbral de intensidad de gris.

<img src="https://github.com/Computacion-Visual-2020-2/Computacion-Visual-2020-2.github.io/blob/develop/src/images/Segmentación.002.png?raw=true" width="450" /> 

**Figura 2.** Segmentación basada en umbral de intensidad de gris.

En el thresholding se define un valor umbral y se toman los píxeles en este rango según pertenezcan o no al fondo: se toman los que no pertenecen al fondo y se rechazan todos los demás. Una imagen de este tipo se muestra como una imagen binaria (de dos niveles) utilizando blanco y negro u otros colores para distinguir las regiones (no hay una convención estándar sobre cuáles son los rasgos de interés, si los blancos o los negros, así que la elección varía en cada caso).

Suponiendo que el histograma de nivel de gris de la **Figura 1** y **2** corresponde a una imagen f(x,y), compuesta por objetos oscuros sobre un fondo brillante de tal forma que los píxeles de objetos y fondo son modos de selección, una forma obvia de extraer los objetos del fondo es seleccionar un umbral T que separe estos modos; después, cualquier punto (x,y) para el que f(x,y) > T se denomina un punto del objeto; cualquier otro punto, se denomina punto del fondo. 

Algunas ventajas de la segmentación basada en píxel son: 

- El uso de la segmentación por color elimina los colores indeseados, y por ende el número de bordes de la imagen se decrementa, lo cual resulta útil como etapa previa a una detección de bordes. En tal caso, la complejidad computacional de un detector de bordes disminuye. 
- Con la ayuda de la segmentación por color, el número de detecciones fallidas se decrementa en una posterior etapa de detección de formas. Esto resulta útil para la detección de objetos que tienen colores y formas muy definidas, como las señales de tráfico. 

**Segmentación basada  en transiciones.** Este método de segmentación se basa en el cambio rápido del calor de intensidad en una imagen porque un solo valor de intensidad no proporciona buena información sobre los bordes. Las técnicas de detección de bordes localizan los bordes y luego se conectan entre sí para formar los límites del objeto. Para realizar la segmentación de regiones se requieren dos métodos básicos de segmentación basados en bordes:

1) Histograma en gris y métodos basados en gradientes. Para detectar los bordes se puede utilizar una de las técnicas básicas de detección de aristas como el operador Sobel, Astuto y Robert, el resultado de estos métodos es básicamente una imagen binaria. Estas son las técnicas estructurales basadas en detección de discontinuidad.
1) Método de segmentación basado en región. Este método segmenta la imagen en varias regiones que tienen características similares, existen 2 técnicas basadas en este método
- Región métodos de cultivo: Basado en en el crecimiento de semillas (píxeles iniciales). Estas semillas pueden seleccionarse manualmente (basadas en conocimientos previos) o automáticamente (basadas en una aplicación particular).
- Métodos de división y fusión de regiones: Utilizan dos técnicas básicas la división y la fusión para segmentar la imagen en varias regiones.

Este tipo de segmentación posee ventajas como que es bueno para las imágenes que tienen mejor contraste entre los objetos, sin embargo no es adecuado para errores detectados o cuando la imagen contiene demasiados bordes**.**

**Segmentación basada en modelos.** **Transformada de Hough.** La transformada de Hough es una herramienta que permite detectar curvas en una imagen. Se basa en la búsqueda de características geométricas de los objetos: rectas, triángulos, objetos circulares, etc. La transformada de Hough es una de las técnicas de segmentación basada en modelos más utilizadas, debido a su robustez frente al ruido y a su comportamiento ante la existencia de huecos en la frontera del objeto. A la hora de aplicar la transformada de Hough a una imagen es necesario obtener primero una imagen binaria de los píxeles que forman parte de la frontera del objeto usando, por ejemplo, segmentación basada en umbral. El objetivo de la transformada de Hough es encontrar puntos en la imagen que estén alineados. Esto se reduce a hallar los píxeles de una imagen que satisfagan la siguiente ecuación de la recta en coordenadas polares, para distintos valores de ρ y θ:

ρ=x\*cos θ +y\*sen θ

Por lo tanto, la transformada de Hough requiere una transformación del espacio de coordenadas (x,y) en el espacio polar de parámetros (ρ, θ). En esta transformación, una recta en el espacio (x, y) que esté a distancia ρj del origen y posea pendiente θi, se representa como un sólo punto (ρj, θi) en el espacio transformado (Figura 3).

<img src="https://github.com/Computacion-Visual-2020-2/Computacion-Visual-2020-2.github.io/blob/develop/src/images/Segmentación.003.png?raw=true" width="450" /> 

**Figura 3.** Transformada de Hough de una recta

Así mismo, la transformada de un punto en el plano (x,y) corresponde a una curva sinusoidal en el plano (ρ, θ)(Figura 4). Es importante destacar que los puntos de cruce de todas las curvas en el espacio de Hough, definen la recta a la que pertenecen dichos puntos en el espacio imagen. 

<img src="https://github.com/Computacion-Visual-2020-2/Computacion-Visual-2020-2.github.io/blob/develop/src/images/Segmentación.004.png?raw=true" width="450" /> 

**Figura 4.** Transformada de Hough de tres puntos A, B, C.

A partir de la Transformada de Hough, es posible seleccionar píxeles que pertenecen a rectas de interés. Para ello, se toma como característica discriminatoria los valores de (ρj, θi) deseados, y para cada píxel de la imagen original, se calcula el ρ y el θ correspondiente, manteniendo el píxel en uno y otro segmento según cumpla con los valores discriminatorios. 

La Transformada de Hough inicialmente se aplicó para la detección de rectas sobre imágenes, aunque más tarde se extendió para ser usada con cualquier tipo de curva que pudiera describirse de forma paramétrica (triángulos, círculos, elipses, rectángulos, etc..), conociéndose el método como Transformada de Hough Generalizada. 

<img src="https://github.com/Computacion-Visual-2020-2/Computacion-Visual-2020-2.github.io/blob/develop/src/images/Segmentación.005.png?raw=true" width="450" /> 

**Figura 5.** Aplicación de la Transformada de Hough Generalizada.

Finalmente, a modo de conclusión se exponen las ventajas e inconvenientes de la aplicación de esta técnica. Como ventajas se pueden señalar: 

- Cada píxel de la imagen se procesa de modo independiente, lo que facilita su implementación en paralelo. 
- La transformada general de Hough es útil para la detección de formas complejas. 
- Es capaz de reconocer patrones ligeramente deformados, ocultos o discontinuos. 
- Robusta frente al ruido. 
- Permite buscar simultáneamente todas las ocurrencias de un patrón. 

En cuanto a los inconvenientes, los más importantes son: 

- El tiempo de computación y memoria usados es alto. La aplicación de la Transformada de Hough consume muchos recursos. 
- No ofrece respuesta absoluta, sino un índice de probabilidad de que cada una de las formas posibles sea la buscada. 

**Métodos basados en cuencas**

Usan el concepto de interpretación topológica en esto la intensidad representa las cuencas que tiene agujeros en sus mínimos donde el agua se derrama. Cuando el agua alcanza el borde de la cuenca, las cuencas adyacentes se fusionan.

Para mantener la separación entre cuencas se requieren represas y son los bordes de la región de segmentación de estas represas se construyen usando dilatación, este método considera el gradiente de la imagen como una superficie topográfica.

Los pixeles que tienen más gradientes se representan como límites contenidos. 

## Segmentación basada en morfología matemática

**Segmentación basada en la ecuación diferencial parcial.** 

Este tipo de segmentación es un método rápido de segmentación apropiados para aplicaciones de tiempo crítico, para este método existen dos métodos básicos de PDE.

- Filtro de difusión isotrópico no lineal (utilizado para mejorar bordes)
- Restauración convexa de variación no cuadrática (utilizada para eliminar el ruido).

Los resultados del PDE son los bordes borrosos y límites que se pueden cambiar utilizando operaciones cercanas. El método PDE de cuarto orden se utiliza para reducir el ruido de imagen y el método de PDE de segundo orden se utiliza para mejorar los bordes y límites.

Este método es más rápido y mejor para aplicaciones críticas en el tiempo, sin embargo presenta mayor complejidad computacional.

**Método de segmentación basado en redes neuronales artificiales.**

Simulan las estrategias de aprendizaje del cerebro humano con el propósito de tomar decisiones, hoy en día este método se utiliza principalmente para la segmentación de imágenes médicas y se utiliza para reparar la imagen requerida del fondo, una red neuronal se compone de un gran número de nodos conectados.

Este método es independiente del PDE teniendo como pasos básicos extracción de características y la segmentación  por la red neuronal.

