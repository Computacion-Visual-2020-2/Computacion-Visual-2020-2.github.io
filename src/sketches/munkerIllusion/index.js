export default p5 => {
  let xmag,
    ymag = 0

  p5.setup = () => {
    p5.createCanvas(600, 375, p5.WEBGL)
    p5.noStroke()
    xmag = (p5.mouseX / p5.width) * p5.TWO_PI
    ymag = (p5.mouseY / p5.height) * p5.TWO_PI
  }

  let cur_x = 0
  let stop = 0
  let sign = 1

  p5.draw = () => {
    p5.background(0)
    p5.noStroke()

    p5.lights()
    if (stop == 0) cur_x = cur_x + 4
    if (cur_x > 225 && stop != 1) {
      p5.delay(1000)
      stop = 1
    }

    if (stop == 1) {
      ymag = ymag + 0.1 * sign
      xmag = xmag + 0.2 * sign
      if (xmag > p5.TWO_PI || ymag < 0) sign = sign * -1
      p5.translate(272, 265, 10)
      p5.rotateX(-ymag * 0.2 - xmag * 0.1)
      p5.rotateY(-xmag * 0.1)
      p5.rotateZ(-ymag * 0.1)
      p5.translate(-272, -265, -10)
    }

    p5.fill(240, 240, 25)
    p5.rect(50, 50, 225, 225)
    p5.fill(145, 40, 245)
    p5.rect(275, 50, 225, 225)

    p5.fill(115, 245, 245) //COLOR DE LAS ESFERAS GRANDES (SON IGUALES)
    p5.push()
    p5.translate(162, 162, -10)
    p5.sphere(50) //ESFERA 1
    p5.pop()
    p5.push()
    p5.translate(387, 162, -10)
    p5.sphere(50) //ESFERA 2
    p5.pop()

    for (let i = 5; i < cur_x - 11; i = i + 11)
      for (let j = 5; j < 225; j = j + 11) {
        p5.fill(145, 40, 245)
        p5.push()
        p5.translate(i + 65, j + 50, 50)
        p5.sphere(3)
        p5.pop()
        if (i > 37) {
          p5.fill(240, 240, 25)
          p5.push()
          p5.translate(200 + i + 50, j + 50, 50)
          p5.sphere(3.2)
          p5.pop()
        }
      }
  }
}
