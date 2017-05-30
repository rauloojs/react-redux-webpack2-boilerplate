import React, { Component } from 'react';
import FlowItems from './FlowItems';
import Box from 'grommet/components/Box';
import JsPlumb from '../../../modules/JsPlumb'


export default class FlowCanvasView extends Component {
  componentDidMount() {
    let canvas = document.getElementById('canvas');
    console.log(canvas);
    // JsPlumb.setContainer();
  }
  render() {
    let nodes = this.props.nodes;

    return (
      <div className='flow-canvas-view'>
        <div className='canvas' id='canvas'>
          <FlowItems flowItems={nodes} />
        </div>
      </div>
    );
  }
}
