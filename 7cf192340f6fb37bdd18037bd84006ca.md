# Taller ilusiones visuales

## Propósito

Comprender algunos aspectos fundamentales de la [inferencia inconsciente](https://github.com/VisualComputing/Cognitive) de la percepción visual humana.

## Tareas

Implementar al menos 6 ilusiones de tres tipos distintos (paradójicas, geométricas, ambiguas, etc.), al menos dos con movimiento, dos con interactividad y una en 3D.

*Opcionales:*
1. Realizar una ilusión mediante el [fragment shader](https://thebookofshaders.com/).

## Discusión

1. Complete la tabla

| Ilusión | Categoria | Referencia | Tipo de interactividad (si aplica) | URL código base (si aplica) |
|---------|-----------|------------|------------------------------------|-----------------------------|
| Contrast gain control | Luminancia y contraste - Fragment shader | https://michaelbach.de/ot/lum-contrastAdapt/index.html | Cuando el mouse hace hover sobre la imagen se deshabilita el procesamiento de la imagen | [Código propio](https://github.com/Computacion-Visual-2020-2/Computacion-Visual-2020-2.github.io/tree/develop/src/sketches/contrast-gain-control) |
| Oblique grating | Geométrica | https://michaelbach.de/ot/ang-SkyeGrating2/index.html | Al hacer clic los cuadrados con colores de un tablero de ajedrez cambian su posición | [Código Propio](https://github.com/Computacion-Visual-2020-2/Computacion-Visual-2020-2.github.io/tree/develop/src/sketches/oblique_grating) |
|         |           |            |                                    |                             |
|         |           |            |                                    |                             |
|         |           |            |                                    |                             |
|         |           |            |                                    |                             |



2. Describa brevememente las referencias estudiadas y los posibles temas en los que le gustaría profundizar

* [Depth-dependent contrast gain-control - Richard N. Aslin*, Peter W. Battaglia, Robert A. Jacobs](https://www.sciencedirect.com/science/article/pii/S0042698903007296)
  
  Aquí se brinda la explicación desde la neurociencia de la primera ilusión visual, donde aplicando un filtro de contraste y uno de blur, el cerebro intenta adaptarse al cambio, aumentando el contraste y variando los colores de una de las imágenes luego de quitar los filtros.

* [p5.js shaders](https://itp-xstory.github.io/p5js-shaders/#/./docs/how-to-write-a-shader)
  
  Usado para la implementación de la ilusión con el shader

* [Shaders](https://processing.org/tutorials/pshader/)
  
  Usado para la implementación de la ilusión con el shader

* [The Book of Shaders](https://thebookofshaders.com/)
  
  Usado para la implementación de la ilusión con el shader