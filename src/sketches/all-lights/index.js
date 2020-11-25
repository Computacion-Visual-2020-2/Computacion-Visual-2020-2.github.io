import lightsFrag from 'file-loader!./lights.frag'
import lightsVert from 'file-loader!./lights.vert'
import tsunami from '../../images/tsunami.jpg'
import symmetricArt from '../../images/symmetric_art.jpg'
import teapotObj from 'file-loader!../../objects/teapot.obj'

export default p5 => {
  let theShader,
    shaderTexture,
    theta = 0,
    x,
    y,
    teapot

  let img,
    img2,
    canvas,
    lightColor = [255, 255, 255],
    intensity = 0,
    camera,
    cameraLocation

  p5.preload = () => {
    teapot = p5.loadModel(teapotObj, true)
    theShader = p5.loadShader(lightsVert, lightsFrag)
    img = p5.loadImage(tsunami)
    img2 = p5.loadImage(symmetricArt)
  }

  p5.setup = () => {
    canvas = p5.createCanvas(710, 400, p5.WEBGL)
    p5.noStroke()

    shaderTexture = p5.createGraphics(710, 400, p5.WEBGL)

    shaderTexture.noStroke()

    camera = p5.createCamera()
    p5.setCamera(camera)

    cameraLocation = p5.createVector(
      0,
      0,
      p5.height / 2.0 / p5.tan((p5.PI * 30.0) / 180.0)
    )

    x = -50
    y = 0
  }

  function updateCameraLocation() {
    if (p5.keyIsDown(p5.LEFT_ARROW)) cameraLocation.x -= 5
    if (p5.keyIsDown(p5.RIGHT_ARROW)) cameraLocation.x += 5
    if (p5.keyIsDown(p5.UP_ARROW)) cameraLocation.y -= 5
    if (p5.keyIsDown(p5.DOWN_ARROW)) cameraLocation.y += 5
  }

  p5.draw = () => {
    if (canvas) {
      // p5.orbitControl();
      updateCameraLocation()

      let locX = p5.mouseX - p5.width / 2
      let locY = p5.mouseY - p5.height / 2

      p5.ambientLight(100);

      p5.directionalLight(255, 255, 255, 100, 0, 100)

      camera.lookAt(0, 0, 0)
      camera.setPosition(cameraLocation.x, cameraLocation.y, cameraLocation.z)

      p5.background(200)

      shaderTexture.shader(theShader)

      p5.pointLight(255, 255, 255, locX, locY, 100)

      theShader.setUniform('uResolution', [p5.width, p5.height])
      theShader.setUniform('uTime', p5.millis() / 1000.0)
      theShader.setUniform('uMouse', [-locX, -locY, -100])
      theShader.setUniform('uTextureSize', [p5.width, p5.height])
      theShader.setUniform('uIntensity', (intensity % 100) / 100)
      theShader.setUniform('uLightColor', lightColor)
      theShader.setUniform('tex0', img)

      p5.push()
      p5.translate(250, 0, 0)
      p5.rotateX(9.5)
      p5.model(teapot)
      p5.pop()

      shaderTexture.rect(0, 0, p5.width, p5.height)
      p5.texture(shaderTexture)

      p5.translate(-150, 0, 0)
      p5.push()
      // p5.rotateZ(p5.frameCount * 0.01)
      // p5.rotateX(p5.frameCount * 0.01)
      // p5.rotateY(p5.frameCount * 0.01)
      theta += 0.05
      p5.specularMaterial(255)
      p5.box(80)
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
