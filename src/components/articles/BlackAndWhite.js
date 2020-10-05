import React from 'react'
import {loadableP5 as P5Wrapper} from '../../sketches/lodable';
import filters from '../../sketches/bw'
import Slider from 'react-rangeslider'

class BlackAndWhite extends React.Component {
  constructor(props) {
    super(props);

    this.sketch = filters.sketch

    this.state = { value: 0, add: true, prev: 0 };

    this.handleSliderChange = this.handleSliderChange.bind(this)
  }

  // handleSliderCompleted() {
  //   this.setState({ value: this.state.value, add: this.state.add, prev: this.state.prev })
  // }

  handleSliderChange(value) {
    let prev = this.state.value;
    if (prev !== value) {
      let add = prev <= value ? true : false;
      this.setState({ value: value, add: add, prev: prev })
    }
  }

  render() {
    return (
      <div>
        <h1>Black and White</h1>
        <P5Wrapper
          sketch={this.sketch}
          value={this.state.value}
          add={this.state.add}
        />
        <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: 15,
            }}
          >
            <div style={{ width: 400 }}>
              <h5> size: </h5>
              <Slider
                min={0}
                max={10}
                step={1}
                width={250}
                value={this.state.value}
                onChange={this.handleSliderChange}
              />
            </div>
          </div>
      </div>
    )
  }
}

export default BlackAndWhite;