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

<img src="https://github.com/Computacion-Visual-2020-2/Computacion-Visual-2020-2.github.io/blob/develop/src/images/rgb.jpeg?raw=true" width="450" /> 

El objetivo de la agrupación de K-Means es minimizar la suma de las distancias al cuadrado entre todos los puntos y el centro del grupo.
Pasos en el algoritmo K-Means:

Elija el número de grupos K.
Seleccione al azar K puntos, los centroides (no necesariamente de su conjunto de datos).
Asigne cada punto de datos al centroide más cercano → que forma K grupos.
Calcule y coloque el nuevo centroide de cada grupo.
Reasigne cada punto de datos al nuevo centroide más cercano. Si alguna reasignación. tuvo lugar, vaya al paso 4; de lo contrario, el modelo está listo.
¿Cómo elegir el valor óptimo de K?

Para una determinada clase de algoritmos de agrupación (en particular, K-Means, K -medoides y   algoritmo de maximización de expectativas ), existe un parámetro comúnmente denominado K que especifica el número de agrupaciones a detectar. Otros algoritmos como el algoritmo  DBSCAN  y  OPTICS  no requieren la especificación de este parámetro; La agrupación en clústeres jerárquica  evita el problema por completo, pero eso está más allá del alcance de este artículo.

Si hablamos de K-Means, entonces la elección correcta de K es a menudo ambigua, con interpretaciones que dependen de la forma y escala de la distribución de puntos en un conjunto de datos y la resolución de agrupación deseada por el usuario. Además, aumentar K sin penalización siempre reducirá la cantidad de error en el agrupamiento resultante, al caso extremo de error cero si cada punto de datos se considera su propio grupo (es decir, cuando K es igual al número de puntos de datos,  n ). Entonces, intuitivamente,  la elección óptima de K logrará un equilibrio entre la compresión máxima de los datos utilizando un solo grupo y la máxima precisión al asignar cada punto de datos a su propio grupo .

Si un valor apropiado de K no es evidente a partir del conocimiento previo de las propiedades del conjunto de datos, debe elegirse de alguna manera. Hay varias categorías de métodos para tomar esta decisión y el  método del codo  es uno de esos métodos.

 

### Método del codo
 
La idea básica detrás de los métodos de partición, como el agrupamiento de K-Means, es definir grupos de modo que se minimice la variación total intra-grupo o, en otras palabras, la suma total de cuadrados dentro del grupo (WCSS). El WCSS total mide la compacidad del agrupamiento y queremos que sea lo más pequeño posible.
