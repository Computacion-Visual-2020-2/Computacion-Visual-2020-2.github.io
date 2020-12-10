## Introducción

La segmentación de imágenes es el proceso de particionar una imagen en objetos constituyentes o regiones. Esta división en partes se basa a menudo en las características de los píxeles de la imagen. Por ejemplo, una forma de encontrar regiones en una imagen es buscar discontinuidades abruptas en los valores de píxel, que normalmente indican bordes. Estas aristas pueden definir regiones. Otros métodos dividen la imagen en regiones en función de los valores de color o la textura.

La mayoría de los algoritmos de segmentación están basados en dos propiedades básicas de intensidad de la imagen: la discontinuidad y la similitud. En la categoría de segmentación mediante discontinuidad, el proceso se realiza dividiendo la imagen por cambios abruptos en intensidad, como es el caso de la detección de bordes en una imagen. Con respecto a la segmentación con base en la similitud, ésta se logra mediante la partición de una imagen en regiones que son similares de acuerdo a un conjunto de criterios predefinidos.

El proceso de segmentación se encarga de evaluar cada píxel de la imagen y decidir si contiene o no las características de interés. Como resultado, este método genera una imagen binaria, donde los píxeles que pertenecen al objeto se representan con un '1' (objeto en primer plano), mientras que los que no pertenecen al mismo se representan con un '0' (fondo). La decisión de pertenencia de un píxel a uno u otro segmento se basa en el análisis de alguna característica de la imagen, como por ejemplo los niveles de intensidad o la textura. 


## Tipos

Existen diferentes tipos de segmentación, listados a continuación: 

1. **Segmentación basada en características de píxel.** En este tipo de técnica se pueden encontrar subtipos como: Segmentación por niveles de gris, segmentación de imágenes en color y segmentación por texturas.
1. **Segmentación basada en transiciones.** En esta segmentación en sí se realiza una técnica basada en la detección de bordes.
1. **Segmentación basada en modelos.** Transformada de Hough 
1. **Métodos basados en cuencas**
1. **Segmentación basada en morfología matemática.** En sí esta técnica se basa en ecuaciones diferenciales parciales y redes neuronales.


### Segmentación basada en características de píxel.
Se evalúa cada píxel en función de las características locales de la imagen en el píxel (y usualmente también sus vecinos), y se decide a qué región (también conocido como segmento) pertenece. Este tipo de segmentación se usa comúnmente cuando se requiere separar objetos con similares características de color o intensidad de un fondo heterogéneo. El caso ideal es aquel en el cual los objetos poseen un rango de colores o intensidad de gris muy estrecho, siendo el fondo uniforme. En tal caso se puede definir un umbral de segmentación para separar objetos del fondo. A esta técnica de asignación de un umbral se la conoce como thresholding (literalmente "umbralización"). 

<img src="https://github.com/Computacion-Visual-2020-2/Computacion-Visual-2020-2.github.io/blob/develop/src/images/Segmentación.001.png?raw=true" width="450" /> 

**Figura 1.** Segmentación basada en umbral de intensidad de gris.

<img src="https://github.com/Computacion-Visual-2020-2/Computacion-Visual-2020-2.github.io/blob/develop/src/images/Segmentación.002.png?raw=true" width="450" /> 

**Figura 2.** Segmentación basada en umbral de intensidad de gris.

En el thresholding se define un valor umbral y se toman los píxeles en este rango según pertenezcan o no al fondo: se toman los que no pertenecen al fondo y se rechazan todos los demás. Una imagen de este tipo se muestra como una imagen binaria (de dos niveles) utilizando blanco y negro u otros colores para distinguir las regiones (no hay una convención estándar sobre cuáles son los rasgos de interés, si los blancos o los negros, así que la elección varía en cada caso).

Suponiendo que el histograma de nivel de gris de la **Figura 1 y 2** corresponde a una imagen $f(x,y)$, compuesta por objetos oscuros sobre un fondo brillante de tal forma que los píxeles de objetos y fondo son modos de selección, una forma obvia de extraer los objetos del fondo es seleccionar un umbral T que separe estos modos; después, cualquier punto $(x,y)$ para el que $f(x,y) > T$ se denomina un punto del objeto; cualquier otro punto, se denomina punto del fondo. 

Algunas ventajas de la segmentación basada en píxel son: 

- El uso de la segmentación por color elimina los colores indeseados, y por ende el número de bordes de la imagen se decrementa, lo cual resulta útil como etapa previa a una detección de bordes. En tal caso, la complejidad computacional de un detector de bordes disminuye. 
- Con la ayuda de la segmentación por color, el número de detecciones fallidas se decrementa en una posterior etapa de detección de formas. Esto resulta útil para la detección de objetos que tienen colores y formas muy definidas, como las señales de tráfico. 

### Segmentación basada  en transiciones.
Este método de segmentación se basa en el cambio rápido del calor de intensidad en una imagen porque un solo valor de intensidad no proporciona buena información sobre los bordes. Las técnicas de detección de bordes localizan los bordes y luego se conectan entre sí para formar los límites del objeto. Para realizar la segmentación de regiones se requieren dos métodos básicos de segmentación basados en bordes:

1) Histograma en gris y métodos basados en gradientes. Para detectar los bordes se puede utilizar una de las técnicas básicas de detección de aristas como el operador Sobel, Astuto y Robert, el resultado de estos métodos es básicamente una imagen binaria. Estas son las técnicas estructurales basadas en detección de discontinuidad.
1) Método de segmentación basado en región. Este método segmenta la imagen en varias regiones que tienen características similares, existen 2 técnicas basadas en este método
- Región métodos de cultivo: Basado en en el crecimiento de semillas (píxeles iniciales). Estas semillas pueden seleccionarse manualmente (basadas en conocimientos previos) o automáticamente (basadas en una aplicación particular).
- Métodos de división y fusión de regiones: Utilizan dos técnicas básicas la división y la fusión para segmentar la imagen en varias regiones.

Este tipo de segmentación posee ventajas como que es bueno para las imágenes que tienen mejor contraste entre los objetos, sin embargo no es adecuado para errores detectados o cuando la imagen contiene demasiados bordes**.**

### Segmentación basada en modelos.
**Transformada de Hough.** La transformada de Hough es una herramienta que permite detectar curvas en una imagen. Se basa en la búsqueda de características geométricas de los objetos: rectas, triángulos, objetos circulares, etc. La transformada de Hough es una de las técnicas de segmentación basada en modelos más utilizadas, debido a su robustez frente al ruido y a su comportamiento ante la existencia de huecos en la frontera del objeto. A la hora de aplicar la transformada de Hough a una imagen es necesario obtener primero una imagen binaria de los píxeles que forman parte de la frontera del objeto usando, por ejemplo, segmentación basada en umbral. El objetivo de la transformada de Hough es encontrar puntos en la imagen que estén alineados. Esto se reduce a hallar los píxeles de una imagen que satisfagan la siguiente ecuación de la recta en coordenadas polares, para distintos valores de $\rho$ y $\theta$:

$\rho = x cos \theta + y sen \theta$

Por lo tanto, la transformada de Hough requiere una transformación del espacio de coordenadas $(x,y)$ en el espacio polar de parámetros $(\rho, θ)$. En esta transformación, una recta en el espacio $(x, y)$ que esté a distancia $\rho j$ del origen y posea pendiente $\theta i$, se representa como un sólo punto $(\rho j, \theta i)$ en el espacio transformado (Figura 3).

<img src="https://github.com/Computacion-Visual-2020-2/Computacion-Visual-2020-2.github.io/blob/develop/src/images/Segmentación.003.png?raw=true" width="450" /> 

**Figura 3.** Transformada de Hough de una recta

Así mismo, la transformada de un punto en el plano $(x,y)$ corresponde a una curva sinusoidal en el plano $(\rho, θ)$ (Figura 4). Es importante destacar que los puntos de cruce de todas las curvas en el espacio de Hough, definen la recta a la que pertenecen dichos puntos en el espacio imagen. 

<img src="https://github.com/Computacion-Visual-2020-2/Computacion-Visual-2020-2.github.io/blob/develop/src/images/Segmentación.004.png?raw=true" width="450" /> 

**Figura 4.** Transformada de Hough de tres puntos A, B, C.

A partir de la Transformada de Hough, es posible seleccionar píxeles que pertenecen a rectas de interés. Para ello, se toma como característica discriminatoria los valores de $(\rho j, \theta i)$ deseados, y para cada píxel de la imagen original, se calcula el $\rho$ y el $\theta$ correspondiente, manteniendo el píxel en uno y otro segmento según cumpla con los valores discriminatorios. 

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

### Métodos basados en cuencas

Usan el concepto de interpretación topológica en esto la intensidad representa las cuencas que tiene agujeros en sus mínimos donde el agua se derrama. Cuando el agua alcanza el borde de la cuenca, las cuencas adyacentes se fusionan.

Para mantener la separación entre cuencas se requieren represas y son los bordes de la región de segmentación de estas represas se construyen usando dilatación, este método considera el gradiente de la imagen como una superficie topográfica.

Los pixeles que tienen más gradientes se representan como límites contenidos. 

### Segmentación basada en morfología matemática

**Segmentación basada en la ecuación diferencial parcial.** 

Este tipo de segmentación es un método rápido de segmentación apropiados para aplicaciones de tiempo crítico, para este método existen dos métodos básicos de PDE.

- Filtro de difusión isotrópico no lineal (utilizado para mejorar bordes)
- Restauración convexa de variación no cuadrática (utilizada para eliminar el ruido).

Los resultados del PDE son los bordes borrosos y límites que se pueden cambiar utilizando operaciones cercanas. El método PDE de cuarto orden se utiliza para reducir el ruido de imagen y el método de PDE de segundo orden se utiliza para mejorar los bordes y límites.

Este método es más rápido y mejor para aplicaciones críticas en el tiempo, sin embargo presenta mayor complejidad computacional.

**Método de segmentación basado en redes neuronales artificiales.**

Simulan las estrategias de aprendizaje del cerebro humano con el propósito de tomar decisiones, hoy en día este método se utiliza principalmente para la segmentación de imágenes médicas y se utiliza para reparar la imagen requerida del fondo, una red neuronal se compone de un gran número de nodos conectados.

Este método es independiente del PDE teniendo como pasos básicos extracción de características y la segmentación  por la red neuronal.

## Segmentación por clústeres

Los algoritmos de agrupación en clústeres son algoritmos no supervisados, pero son similares a los algoritmos de clasificación, pero la base es diferente.

El algoritmo fue propuesto por primera vez por Stuart Lloyd en 1957 como una técnica para modulación por impulsos codificados. La técnica de agrupamiento es no jerárquico, por lo que se fija un número k de clusters al inicio de su ejecución y se asignan elementos a un cluster en función de la distancia, empleando para ello funciones como la distancia euclídea.
Su otra característica importante es que emplea la media estadística para el cálculo de los nuevos clusters. Concretamente, lo que se calcula del cluster es su centroide, esto
es, el punto resultante de la media de todos los elementos asignados al cluster en cuestión. Así pues, K-medias posee los dos pasos principales que comentamos en el anterior
apartado:
* El paso de asignación, que asigna a cada elemento el cluster o grupo más cercano, aplicando una función para el cálculo de distancia.
* El paso de actualización, consistente en calcular los nuevos centroides para cada cluster.
Aunque el algoritmo presenta una complejidad computacional difícil, existen heurísticos que hacen que converja rápidamente a un óptimo local. También hay que tener en cuenta que se requiere de un método de inicialización y se suelen usar dos principalmente: 
* El método de Forgy, consistente en la toma de k observaciones de forma aleatoria como centros del cluster y luego empezar con el paso de asignación.
* El método de partición aleatoria, en el que se asigna aleatoriamente un cluster a cada observación y se sigue con el paso de actualización.

En Clustering, no sabe lo que está buscando y está tratando de identificar algunos segmentos o clústeres en sus datos. Cuando utiliza algoritmos de agrupación en clústeres en su conjunto de datos, de repente pueden aparecer cosas inesperadas como estructuras, clústeres y agrupaciones que nunca hubiera pensado de otra manera.

El  algoritmo de agrupación de K -Means es un algoritmo no supervisado y se utiliza para segmentar el área de interés del fondo. Agrupa o divide los datos dados en K-clústeres o partes según los K-centroides.

El algoritmo se utiliza cuando tiene datos sin etiquetar (es decir, datos sin categorías o grupos definidos). El objetivo es encontrar ciertos grupos basados ​​en algún tipo de similitud en los datos con el número de grupos representados por K.

<img src="https://data-flair.training/blogs/wp-content/uploads/sites/2/2019/07/PCA-Cluster-Graph-in-ML.png" width="450" /> 

El objetivo de la agrupación de K-Means es minimizar la suma de las distancias al cuadrado entre todos los puntos y el centro del grupo.
Pasos en el algoritmo K-Means:

Elija el número de grupos K.
Seleccione al azar K puntos, los centroides (no necesariamente de su conjunto de datos).
Asigne cada punto de datos al centroide más cercano → que forma K grupos.
Calcule y coloque el nuevo centroide de cada grupo.
Reasigne cada punto de datos al nuevo centroide más cercano. Si alguna reasignación. tuvo lugar, vaya al paso 4; de lo contrario, el modelo está listo.
¿Cómo elegir el valor óptimo de K?

Para una determinada clase de algoritmos de agrupación (en particular, K-Means, K -medoides y   algoritmo de maximización de expectativas ), existe un parámetro comúnmente denominado K que especifica el número de agrupaciones a detectar. Otros algoritmos como el algoritmo  DBSCAN  y  OPTICS  no requieren la especificación de este parámetro; La agrupación en clústeres jerárquica  evita el problema por completo.

Si hablamos de K-Means, entonces la elección correcta de K es a menudo ambigua, con interpretaciones que dependen de la forma y escala de la distribución de puntos en un conjunto de datos y la resolución de agrupación deseada por el usuario. Además, aumentar K sin penalización siempre reducirá la cantidad de error en el agrupamiento resultante, al caso extremo de error cero si cada punto de datos se considera su propio grupo (es decir, cuando K es igual al número de puntos de datos,  n ). Entonces, intuitivamente,  la elección óptima de K logrará un equilibrio entre la compresión máxima de los datos utilizando un solo grupo y la máxima precisión al asignar cada punto de datos a su propio grupo .

Si un valor apropiado de K no es evidente a partir del conocimiento previo de las propiedades del conjunto de datos, debe elegirse de alguna manera. Hay varias categorías de métodos para tomar esta decisión y el  método del codo  es uno de esos métodos.


### Método del codo
 
La idea básica detrás de los métodos de partición, como el agrupamiento de K-Means, es definir grupos de modo que se minimice la variación total intra-grupo o, en otras palabras, la suma total de cuadrados dentro del grupo (WCSS). El WCSS total mide la compacidad del agrupamiento y queremos que sea lo más pequeño posible.

<img src="https://i2.wp.com/www.aprendemachinelearning.com/wp-content/uploads/2018/03/ejemplo-elbow.png?resize=768%2C422" />

El método Elbow mira el WCSS total en función del número de clústeres: se debe elegir un número de clústeres para que agregar otro clúster no mejore mucho mejor el WCSS total.

Pasos para elegir el número óptimo de clústeres K: (Método del codo)

1. Calcule la agrupación de K-medias para diferentes valores de K variando K de 1 a 10 agrupaciones.
2. Para cada K, calcule la suma de cuadrados total dentro del grupo (WCSS).
3. Trace la curva de WCSS frente al número de grupos K.
4. La ubicación de una curva (rodilla) en la parcela se considera generalmente como un indicador del número apropiado de grupos.

A pesar de todas las ventajas que tiene K-Means, a veces falla debido a la elección aleatoria de centroides que se llama  La  trampa de inicialización aleatoria.

Para resolver este problema, tenemos un procedimiento de inicialización para K-Means que se llama  K-Means ++ (Algoritmo para elegir los valores iniciales para la agrupación de K-Means).

En K-Means ++, elegimos un punto al azar y ese es su primer centroide, luego elegimos el siguiente punto en función de la probabilidad que depende de la distancia del primer punto, cuanto más alejado esté el punto, más probable será.

Entonces tenemos dos centroides, repita el proceso, la probabilidad de cada punto se basa en su distancia al centroide más cercano a ese punto. Ahora,  esto introduce una sobrecarga en la inicialización del algoritmo, pero reduce la probabilidad de que una mala inicialización conduzca a un mal resultado de agrupamiento.

Representación visual de agrupación de K-medias:  comenzando con 4 puntos más a la izquierda.

<div style="background-color: #fff; max-width: 900px; max-height: 800px;">
    <iframe src="http://shabal.in/visuals/kmeans/5.html" title="description" width="90%" height="800px" style="max-width: 900px;">
</div>

*K-means clustering. http://shabal.in/visuals/kmeans/5.html*

## Pasos para la segmentación de imágenes por clusters

### Inicialización
Como punto de partida, tomamos la imagen y la tratamos aplicando una serie de funciones. El objetivo principal en esta parte del método consiste en transformar la
imagen en una estructura de datos que pueda ser aplicada en nuestro algoritmo de segmentación.
Lo primero que realizamos es la transformación de la imagen de un formato a color a otro a escala de grises. Esto se hace así porque pasamos a tener una única componente
de color y, por consiguiente, se simplifica y se hace más sencillo el trabajar con la imagen. No obstante, con esta acción perdemos mucha información. La mayoría de los
métodos de segmentación de imágenes trabajan sobre escala de grises y este método que implementamos es uno de ellos.
El siguiente paso consiste en pasar los datos de la imagen en escala de grises a una estructura de datos manejable en la segmentación y que contenga cada píxel de la
imagen asociado a su valor numérico en escala de gris. En este paso no perdemos información y es fácilmente reversible.

### Segmentación
Esta es la fase principal, donde aplicamos el método objeto de estudio en este trabajo: el algoritmo de k-medias. 
Tomando como punto de partida la estructura de datos alcanzada en la inicialización y un número k de clusters, el algoritmo realiza los pasos propios de k-means:

1. Paso de inicialización, en la que tomamos unos clusters iniciales. En este caso, empleamos el método de Forgy, esto es, tomaremos k píxeles aleatoriamente y
tomaremos sus valores como primeros centroides de los clusters.
2. Paso de asignación inicial: cada pixel se asociará al cluster o grupo de centroide más cercano. La distancia euclídea será la empleada para medir la cercanía.
3. Paso de actualización, en el cual volvemos a calcular el valor de los centroides de los grupos realizado la media aritmética con todos los valores de los píxeles
asignados al cluster en cuestión.
4. Paso de asignación, en el que se realiza la misma acción que en el paso 2.
5. Retorno a paso 3 siempre que tras el paso 4 haya habido un cambio en la
agrupación, es decir, haya un cambio de cluster de al menos un píxel.
6. Salida del resultado.
Tras la aplicación del algoritmo y con el resultado obtenido generamos una imagen en las que los píxeles de un mismo cluster tendrá el mismo valor en escala de grises. El
resultado final es una imagen segmentada de la original.

Pongamoslo en práctica

<img src="https://i.postimg.cc/bNBC1xgG/1.png" />

Observando el histograma se podría suponer que el número de picos saldría muy elevado y por tanto se requerirían un elevado número de cluster para tener una segmentación válida. No obstante, la imagen a la que corresponde el histograma es esta:

<img src="https://i.postimg.cc/Df5YwkbP/2.png" />

En esta imagen podemos interpretar que estando tan diferenciado el fondo de la imagen con dos cluster el resultado puede ser bueno. Y, efectivamente, el resultado no
podía ser mejor:

<img src="https://i.postimg.cc/gkJtwSVF/3.png" />

Por el contrario, hay varios ejemplos que demuestran que la visualización del histograma es bastante aclarador y orientarse a partir de este es muy recomendable.
Existen casos en los que parece complicada la asignación de cluster. Tales son los casos de:

<img src="https://i.postimg.cc/HxdBTBYN/4.png" />
<img src="https://i.postimg.cc/PJqywJ8z/5.png" />

Donde a partir de la imagen en escala de grises uno no sabe cuántos clusters aplicar para tener una silueta clara de la imagen. No obstante, los histogramas son aclaradores.

<img src="https://i.postimg.cc/BvWmVJd4/6.png" />

Contemplando el histograma podemos ver que con dos cluster muy probablemente tengamos buenos resultados. Y es así:

<img src="https://i.postimg.cc/YS1dcJHg/7.png" />

Otro ejemplo:

<img src="https://i.postimg.cc/v8P3drpP/8.png" />
<img src="https://i.postimg.cc/wjRW214w/9.png" />


Segmentación  k=2 y k=3
<img src="https://i.postimg.cc/ydjnxcW8/10.png" />


Segmentación  k=4 y k=5
<img src="https://i.postimg.cc/T1H9qxV8/11.png" />
