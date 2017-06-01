import React, { Component } from 'react';
import FlowItems from './FlowItems';
import Box from 'grommet/components/Box';
import JsPlumb from '../../../modules/JsPlumb'


export default class FlowCanvasView extends Component {
  setZoom() {
    JsPlumb.ready(() => {
      JsPlumb.setZoom(this.props.zoom);
    });
  }
  componentDidMount() {
    let component = this;

    JsPlumb.ready(() => {
      JsPlumb.setContainer('canvas');
      // JsPlumb.setZoom(this.props.zoom);
    });
  }
  render() {
    let nodes = this.props.nodes;
    let zoom = this.props.zoom;
    let onFlowItemDrag = this.props.onFlowItemDrag;
    this.setZoom();

    return (
      <div className='flow-canvas-view'>
        <div className='canvas' id='canvas' style={{transform: 'scale('+ zoom +')'}}>
          <FlowItems flowItems={nodes} onFlowItemDrag={onFlowItemDrag}/>
        </div>
      </div>
    );
  }
}
