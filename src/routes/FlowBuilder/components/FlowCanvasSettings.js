import React, { Component } from 'react';
import FormField from 'grommet/components/FormField';


export default class FlowCanvasSettings extends Component {
  onZoomUpdate(e) {
    let zoom = e.target.value;
    this.props.setCanvasZoom(zoom)
  }
  render() {
    return (
      <div>
        <FormField>
          <input min='1' max='10' type='range' defaultValue={10} onChange={this.onZoomUpdate.bind(this)} />
        </FormField>
      </div>
    );
  }
}
