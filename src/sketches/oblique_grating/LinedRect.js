import Rhombus from './Rhombus'

class LinedRect {
  constructor(x, y, w, h, rhombus, startsWithBlack) {
    this.xpos = x
    this.ypos = y
    this.wid = w
    this.hei = h
    this.rhombusPos = rhombus
    this.inBlack = startsWithBlack
    this.disabledIllusion = false

    if (this.rhombusPos !== 'none') {
      let ycen = this.ypos
      if (this.rhombusPos === 'bottom') ycen = this.ypos + this.hei

      this.rhombuses = []
      for (let i = 0; i < Math.floor(this.wid / this.hei) + 1; i++) {
        this.rhombuses.push(
          new Rhombus(
            this.xpos + this.hei * i,
            ycen,
            16,
            i % 2 === (this.inBlack ? 1 : 0)
          )
        )
      }
    }
  }

  display(p5) {
    let colors = [p5.color(127, 127, 127), p5.color(221, 235, 252)]

    for (let i = 0; i < Math.floor(this.wid / this.hei) + 1; i++) {
      p5.fill(colors[i % 2])
      p5.noStroke()
      p5.rect(this.xpos + this.hei * i, this.ypos, this.wid, this.hei)
    }

    let i = 0
    this.rhombuses.forEach(r => {
      r.display(p5)
      r.setStartsWithBlack(
        this.disabledIllusion && i++ % 2 === (this.inBlack ? 1 : 0)
      )
    })
  }

  disableIllusion() {
    this.disabledIllusion = true
  }

  enableIllusion() {
    this.disabledIllusion = false
  }

  setStartsWithBlack(startsWithBlack) {
    this.inBlack = startsWithBlack
  }
}

export default LinedRect
