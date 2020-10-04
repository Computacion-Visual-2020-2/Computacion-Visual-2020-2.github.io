import bomba from 'file-loader!../../videos/bomba.mov'

export default p5 => {
  let playing = false,
    fingers,
    button,
    canvas,
    kernel = 3

  p5.setup = function() {
    canvas = p5.createCanvas(710, 400)

    // especificar múltiples formatos para distintos navegadores
    fingers = p5.createVideo([bomba])
    button = p5.createButton('play')
    button.mousePressed(toggleVid) // adjuntar un listener al botón
  }

  p5.draw = function() {
    p5.image(fingers, 10, 10) // dibuja el cuadro del video en el lienzo.
    p5.filter(p5.BLUR, kernel) 
  }

  p5.myCustomRedrawAccordingToNewPropsHandler = function(props) {
    if (props.kernel)
      kernel = props.kernel
  }

  // reproduce o pausa el video dependiendo de su estado actual
  function toggleVid() {
    if (playing) {
      fingers.pause()
      button.html('play')
    } else {
      fingers.loop()
      button.html('pause')
    }
    playing = !playing
  }
}
