import React, { Component } from 'react';
import FlowItems from './FlowItems';
import Box from 'grommet/components/Box';


export default class FlowCanvasView extends Component {
  render() {
    let nodes = this.props.nodes;

    return (
      <div className='flow-canvas-view'>
        <div className='canvas'>
          <FlowItems flowItems={nodes} />
        </div>
      </div>
    );
  }
}
