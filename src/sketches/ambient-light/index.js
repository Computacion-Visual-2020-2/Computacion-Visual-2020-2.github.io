import convolutionFrag from 'file-loader!./light.frag'
import convolutionVert from 'file-loader!./light.vert'
import tsunami from '../../images/tsunami.jpg'
import symmetricArt from '../../images/symmetric_art.jpg'

export default p5 => {
  let theShader,
    shaderTexture,
    theta = 0,
    x,
    y

  let img,
    img2,
    canvas,
    lightColor = [255, 255, 255],
    intensity = 0

  p5.preload = () => {
    theShader = p5.loadShader(convolutionVert, convolutionFrag)
    img = p5.loadImage(tsunami)
    img2 = p5.loadImage(symmetricArt)
  }

  p5.setup = () => {
    canvas = p5.createCanvas(710, 400, p5.WEBGL)
    p5.noStroke()

    shaderTexture = p5.createGraphics(710, 400, p5.WEBGL)

    shaderTexture.noStroke()

    x = -50
    y = 0
  }

  p5.draw = () => {
    if (canvas) {
      p5.background(200)

      shaderTexture.shader(theShader)

      theShader.setUniform('resolution', [p5.width, p5.height])
      theShader.setUniform('time', p5.millis() / 1000.0)
      theShader.setUniform('mouse', [
        p5.mouseX,
        p5.map(p5.mouseY, 0, p5.height, p5.height, 0),
      ])
      theShader.setUniform('textureSize', [p5.width, p5.height])
      theShader.setUniform('intensity', (intensity % 100) / 100)
      theShader.setUniform('lightColor', lightColor)
      theShader.setUniform('tex0', img)

      shaderTexture.rect(0, 0, p5.width, p5.height)
      p5.texture(shaderTexture)

      p5.translate(-150, 0, 0)
      p5.push()
      p5.rotateZ(theta * p5.mouseX * 0.0001)
      p5.rotateX(theta * p5.mouseX * 0.0001)
      p5.rotateY(theta * p5.mouseX * 0.0001)
      theta += 0.05
      p5.sphere(80)
      p5.pop()

      theShader.setUniform('tex0', img2)

      shaderTexture.rect(0, 0, p5.width, p5.height)
      p5.texture(shaderTexture)

      p5.push()
      p5.translate(250, 0, 0)
      p5.rotateZ(theta * p5.mouseX * 0.0001)
      p5.rotateX(theta * p5.mouseX * 0.0001)
      p5.rotateY(theta * p5.mouseX * 0.0001)

      p5.torus(80, 20, 64, 64)
      p5.pop()
    }
  }

  p5.myCustomRedrawAccordingToNewPropsHandler = function(props) {
    if (props.intensity !== undefined) {
      intensity = props.intensity - 1 < 0 ? 0 : props.intensity - 1
    }

    if (props.lightColor !== undefined) {
      lightColor = [props.lightColor.r, props.lightColor.g, props.lightColor.b]
    }
  }
}
