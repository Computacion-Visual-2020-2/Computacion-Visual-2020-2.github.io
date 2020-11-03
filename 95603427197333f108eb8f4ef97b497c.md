# Taller ilusiones visuales

## Propósito

Comprender algunos aspectos fundamentales de la [inferencia inconsciente](https://github.com/VisualComputing/Cognitive) de la percepción visual humana.

## Tareas

Implementar al menos 6 ilusiones de tres tipos distintos (paradójicas, geométricas, ambiguas, etc.), al menos dos con movimiento, dos con interactividad y una en 3D.

*Opcionales:*
1. Realizar una ilusión mediante el [fragment shader](https://thebookofshaders.com/).

## Discusión

1. Complete la tabla

| Ilusión | Categoría | Referencia | Tipo de interactividad (si aplica) | URL código base (si aplica) |
|---------|-----------|------------|------------------------------------|-----------------------------|
| Contrast gain control | Luminancia y contraste - Fragment shader | https://michaelbach.de/ot/lum-contrastAdapt/index.html | Cuando el mouse hace hover sobre la imagen se deshabilita el procesamiento de la imagen | [Código propio](https://github.com/Computacion-Visual-2020-2/Computacion-Visual-2020-2.github.io/tree/develop/src/sketches/contrast-gain-control) |
| Oblique grating | Geométrica | https://michaelbach.de/ot/ang-SkyeGrating2/index.html | Al hacer clic los cuadrados con colores de un tablero de ajedrez cambian su posición | [Código Propio](https://github.com/Computacion-Visual-2020-2/Computacion-Visual-2020-2.github.io/tree/develop/src/sketches/oblique_grating) |
| Stars | Movimiento e Interactiva | https://moillusions.com/wp-content/uploads/2011/09/super_duper_illusion.gif | Ubica la mano en el centro de la imagen pon atención a la velocidad de las estrellas, luego ubicala a un costado. | https://www.youtube.com/watch?v=17WoOqgXsRM |
|Motion Aftereffect | Motion Aftereffect | https://en.wikipedia.org/wiki/Motion_aftereffect | Observa la imagen durante 10 segundos, luego observa una imagen solida y podrás ver el efecto |                             |
| Ebbinghaus | Percepción | https://es.wikipedia.org/wiki/Ilusi%C3%B3n_de_Ebbinghaus | Al hacer click sobre el contenedor se ocultan las esferas azules y es posible ver que las naranjas en realidad son del mismo tamaño | [Código Adaptado](https://www.openprocessing.org/sketch/140477) |
| Lilac Chaser | Sensación y percepción | https://es.wikipedia.org/wiki/Perseguidor_del_lila | Mire fijamente el punto en el centro y notara los diferentes efectos de la ilusión | [Código Adaptado](https://forum.processing.org/one/topic/lilac-chaser.html ) |
|Ilusion de Munker | Percepción color | http://www.engineering.utep.edu/novick/colors/ | Observe el color de las esferas, se soprendera al saber que son iguales | [Código Adaptado](https://www.youtube.com/watch?v=e0q85FAfxYY) |
|         |           |            |                                    |                             |



2. Describa brevemente las referencias estudiadas y los posibles temas en los que le gustaría profundizar

* [Depth-dependent contrast gain-control - Richard N. Aslin*, Peter W. Battaglia, Robert A. Jacobs](https://www.sciencedirect.com/science/article/pii/S0042698903007296)
  
  Aquí se brinda la explicación desde la neurociencia de la primera ilusión visual, donde aplicando un filtro de contraste y uno de blur, el cerebro intenta adaptarse al cambio, aumentando el contraste y variando los colores de una de las imágenes luego de quitar los filtros.

* [p5.js shaders](https://itp-xstory.github.io/p5js-shaders/#/./docs/how-to-write-a-shader)
  
  Usado para la implementación de la ilusión con el shader

* [Shaders](https://processing.org/tutorials/pshader/)
  
  Usado para la implementación de la ilusión con el shader

* [The Book of Shaders](https://thebookofshaders.com/)
  
  Usado para la implementación de la ilusión con el shader