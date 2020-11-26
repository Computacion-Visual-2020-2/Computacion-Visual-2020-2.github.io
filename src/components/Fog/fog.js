import React from 'react'
import * as THREE from '../../../threeJS/three.module'
import { CirclePicker } from 'react-color'
import Slider from 'react-rangeslider'

function main(color, intensity, near) {
  const canvas = document.querySelector('#c');
  const renderer = new THREE.WebGLRenderer({canvas});

  const fov = 75;
  const aspect = 2;  // the canvas default
  const nearCamera = 0.001;
  const far = 5;
  const camera = new THREE.PerspectiveCamera(fov, aspect, nearCamera, far);
  camera.position.z = 2;

  const scene = new THREE.Scene();

  {
    // const near = 1;
    const far = 2;
    scene.fog = new THREE.Fog(color, near, far);
    scene.background = new THREE.Color(color);
  }

  {
    const color = 0xFFFFFF;
    // const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);
  }

  const boxWidth = 1;
  const boxHeight = 1;
  const boxDepth = 1;
  const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
  function makeInstance(geometry, color, x) {
    const material = new THREE.MeshPhongMaterial({color});

    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    cube.position.x = x;

    return cube;
  }

  const cubes = [
    makeInstance(geometry, 0x8844aa, -1),
    makeInstance(geometry, 0x6AA84F,  1),
  ];

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  function render(time) {
    time *= 0.0005;

    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    cubes.forEach((cube, ndx) => {
      const speed = 1 + ndx * .1;
      const rot = time * speed;
      cube.rotation.x = rot;
      cube.rotation.y = rot;
    });

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

class Fog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      color: "#FFF",
      intensity: 1,
      near: 1
    }
    this.handleColorChange = this.handleColorChange.bind(this)
    this.handleNearChange = this.handleNearChange.bind(this)
    this.handleIntensityChange = this.handleIntensityChange.bind(this)
  }

  componentDidMount = () => {
    main(this.state.color,this.state.intensity, this.state.near)
  }

  handleColorChange(value) {
    this.setState({
      color: value.hex
    })
    main(this.state.color,this.state.intensity, this.state.near)
  }

  handleIntensityChange(value) {
    this.setState({
      intensity: value
    })
    main(this.state.color,this.state.intensity, this.state.near)
  }
  handleNearChange(value) {
    this.setState({
      near: value
    })
    main(this.state.color,this.state.intensity, this.state.near)
  }

  render() {
    return (
      <>
        <div style={{ textAlign: 'center' }}>
          <canvas 
            style={{ width: '600px', height: '400px'}}
            id="c">
          </canvas>
        </div>
        <div>
          <h5>Intensity: </h5>
          <Slider
            min={0}
            max={1}
            step={0.01}
            width={250}
            value={this.state.intensity}
            onChange={this.handleIntensityChange}
          />
        </div>
        <div>
          <h5>Near: </h5>
          <Slider
            min={0}
            max={2}
            step={0.02}
            width={250}
            value={this.state.near}
            onChange={this.handleNearChange}
          />
        </div>
        <div style={{ marginTop: 40 }}>
          <h5>Color: </h5>
          <CirclePicker
            width="100%"
            color={this.state.color}
            onChangeComplete={this.handleColorChange}
            colors={[
              '#fff',
              '#f44336',
              '#9c27b0',
              '#673ab7',
              '#3f51b5',
              '#2196f3',
              '#03a9f4',
              '#00bcd4',
              '#009688',
              '#4caf50',
              '#8bc34a',
              '#cddc39',
              '#ffeb3b',
              '#ffc107',
              '#ff9800',
              '#ff5722',
              '#795548',
              '#607d8b',
            ]}
            circleSize={40}
          />
        </div>
      </>
    )
  }
}
export default Fog;