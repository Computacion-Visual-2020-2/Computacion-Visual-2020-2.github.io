# Segmentación de imágenes

## Introdución
Introducir e

## Tipos
Acá van los tipos

* No se

## Segmentación por clusters

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

http://shabal.in/visuals/kmeans/5.html

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
Tomando como punto de partida la estructura de datos alcanzada en la inicialización y un número k de clusters, el algoritmo realiza los pasos propios de Kmedias:
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
