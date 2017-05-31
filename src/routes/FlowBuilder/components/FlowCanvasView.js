import React, { Component } from 'react';
import FlowItems from './FlowItems';
import Box from 'grommet/components/Box';
import JsPlumb from '../../../modules/JsPlumb'


export default class FlowCanvasView extends Component {
  componentDidMount() {
    JsPlumb.ready(() => {
      JsPlumb.setContainer('canvas');
      JsPlumb.setZoom(this.props.zoom);
      JsPlumb.bind('connection', function(info) {
        let id = info.sourceId;
        let next = info.targetId;
        console.log(id, next);
      });

      JsPlumb.bind('connectionMoved', function(info) {
        console.log('connectionMoved');
      });

      JsPlumb.bind('connectionDetached', function(info) {
        console.log('connectionDetached');
      });
    });
  }
  render() {
    let nodes = this.props.nodes;
    let zoom = this.props.zoom;

    return (
      <div className='flow-canvas-view'>
        <div className='canvas' id='canvas' style={{transform: 'scale('+ zoom +')'}}>
          <FlowItems flowItems={nodes} />
        </div>
      </div>
    );
  }
}
