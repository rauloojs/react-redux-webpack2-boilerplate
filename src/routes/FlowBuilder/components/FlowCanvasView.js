import React, { Component } from 'react';
import FlowItems from './FlowItems';
import Box from 'grommet/components/Box';
import JsPlumb from 'JsPlumb'
import $ from 'jquery';
import 'jquery-ui';


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
    });

    $('#canvas').droppable({
      drop: function(e, ui){
        let droppedElement = ui.helper.clone();
        let newPosX = (ui.offset.left - 256) / (component.props.zoom);
        let newPosY = ui.offset.top / (component.props.zoom);
        ui.helper.remove();

        console.log(droppedElement, newPosX, newPosY);
        component.props.addItemToCanvas('type', 'Q', newPosX, newPosY)
      }
    });
  }
  render() {
    let nodes = this.props.nodes;
    let zoom = this.props.zoom;
    this.setZoom();

    return (
      <div className='flow-canvas-view'>
        <div className='canvas' id='canvas' style={{transform: 'scale('+ zoom +')'}}>
          <FlowItems flowItems={nodes} />
        </div>
      </div>
    );
  }
}
