import React, { Component } from 'react';
import FlowItems from './FlowItems';
import Box from 'grommet/components/Box';
import JsPlumb from '../../../modules/JsPlumb'


export default class FlowCanvasView extends Component {
  componentDidMount() {
    let component = this;

    JsPlumb.ready(() => {
      JsPlumb.setContainer('canvas');
      JsPlumb.setZoom(this.props.zoom);
      JsPlumb.bind('connection', function(info) {
        let source = info.sourceId;
        let names = info.sourceId.split('_');
        let target = info.targetId;

        if (names[0].startsWith('conditional')) {
          component.props.connectConditionalToQuestion(names[1], target, source)
        } else {
          if (names[0].startsWith('action')) {
            component.props.connectActionToQuestion(names[1], target, source)
          } else {
            component.props.connectQuestionToQuestion(source, target)
          }
        }

        console.log(source, target);

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
