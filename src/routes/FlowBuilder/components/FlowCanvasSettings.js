import React, { Component } from 'react';
import NumberInput from 'grommet/components/NumberInput';


export default class FlowCanvasSettings extends Component {
  onZoomUpdate(e) {
    let zoom = e.target.value;
    this.props.onZoomUpdate(zoom)
  }
  render() {
    return (
      <div>
        <h3>FlowCanvasSettings</h3>
        <form onSubmit={this.onZoomUpdate.bind(this)}>
          <NumberInput defaultValue={10} onChange={this.onZoomUpdate.bind(this)} />
          {/* <input type='number' ref='zoom' />
          <button>Submit</button> */}

        </form>
      </div>
    );
  }
}
