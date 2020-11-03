import LinedRect from './LinedRect'

export default p5 => {
  let rects = [],
    illusionDisabled = true,
    startsWithBlack = true

  p5.setup = () => {
    p5.createCanvas(600, 50 * 9)

    let counter = 0
    for (let i = 0; i < 9; i++) {
      if ((i + 2) % 3 !== 0) {
        counter++
        rects.push(
          new LinedRect(
            0,
            50 * i,
            600,
            50,
            counter % 2 === 0 ? 'top' : 'bottom',
            startsWithBlack
          )
        )
      }
    }
  }

  p5.mouseClicked = () => {
    illusionDisabled = !illusionDisabled
  }

  p5.draw = () => {
    p5.background(p5.color(149, 179, 231))

    let counter = 1
    startsWithBlack = true

    rects.forEach(lr => {
      lr.display(p5)
      lr.setStartsWithBlack(startsWithBlack)

      if (!illusionDisabled) {
        lr.disableIllusion()
        startsWithBlack = !startsWithBlack

        if (counter % 2 === 0) {
          startsWithBlack = !startsWithBlack
        }
      } else {
        lr.enableIllusion()
      }

      counter++
    })
  }
}
