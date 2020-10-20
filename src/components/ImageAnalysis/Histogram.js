import React from 'react'
import {loadableP5 as P5Wrapper} from '../../sketches/lodable';
import histogram from '../../sketches/histogram';

class Histogram extends React.Component {
  constructor(props) {
    super(props);

    this.sketch = histogram.sketch
  }

  render() {
    return (
      <div>
        <P5Wrapper
          sketch={this.sketch}
        />
      </div>
    )
  }
}

export default Histogram;