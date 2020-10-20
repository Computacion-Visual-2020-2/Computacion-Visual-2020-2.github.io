class Rhombus {
  constructor(xcen, ycen, w, startsWithBlack) {
    this.xpos = xcen - w / 2
    this.ypos = ycen - w / 2
    this.wid = w
    this.inBlack = startsWithBlack
  }

  display(p5) {
    let colors = [p5.color(0, 0, 0), p5.color(255, 255, 255)]
    p5.push()
    p5.translate(this.xpos + this.wid / 2, this.ypos - this.wid / 4)
    p5.rotate(p5.radians(45))

    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        p5.fill(colors[(i + j + (this.inBlack ? 0 : 1)) % 2])
        p5.noStroke()
        p5.rect(
          (this.wid / 2) * i,
          (this.wid / 2) * j,
          this.wid / 2,
          this.wid / 2
        )
      }
    }

    p5.pop()
  }

  setStartsWithBlack(startsWithBlack) {
    this.inBlack = startsWithBlack
  }
}

export default Rhombus
