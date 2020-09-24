import React from 'react'
import {loadableP5 as P5Wrapper} from '../../sketches/lodable';
import convolution from '../../sketches/convolution'
import Slider from 'react-rangeslider'

class Convolution extends React.Component {
  constructor(props) {
    super(props)

    this.kernels = convolution.kernels
    this.sketch = convolution.sketch

    this.state = { kernel: 0, kernelSize: 3, tmp: 3 }

    this.handleClick = this.handleClick.bind(this)
    this.handleSliderCompleted = this.handleSliderCompleted.bind(this)
    this.handleSliderChange = this.handleSliderChange.bind(this)
  }

  handleClick(event) {
    event.preventDefault()
    this.setState(old => ({
      kernel: (old.kernel + 1) % this.kernels.length,
      kernelSize: 3,
      tmp: 3,
    }))
  }

  handleSliderCompleted() {
    this.setState({ kernelSize: this.state.tmp })
  }

  handleSliderChange(value) {
    this.setState({ tmp: value })
  }

  render() {
    return (
      <div>
        <h1>{this.kernels[this.state.kernel].name}</h1>

        <div onClick={this.handleClick}>
          <P5Wrapper
            sketch={this.sketch}
            kernel={this.kernels[this.state.kernel]}
            kernelSize={this.state.kernelSize}
          />
        </div>

        {this.kernels[this.state.kernel].id === 'gaussian' && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: 15,
            }}
          >
            <div style={{ width: 400 }}>
              <h5>Kernel size: </h5>
              <Slider
                min={3}
                max={17}
                step={2}
                width={250}
                value={this.state.tmp}
                onChangeComplete={this.handleSliderCompleted}
                onChange={this.handleSliderChange}
              />
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Convolution
