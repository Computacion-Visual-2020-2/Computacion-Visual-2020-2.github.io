# Segmentación de imágenes

## Introdución
Introducir e

## Tipos
Acá van los tipos

* No se

## Segmentación por clusters

Los algoritmos de agrupación en clústeres son algoritmos no supervisados, pero son similares a los algoritmos de clasificación, pero la base es diferente.

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
