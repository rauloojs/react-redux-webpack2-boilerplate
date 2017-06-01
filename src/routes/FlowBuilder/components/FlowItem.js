import React, { Component } from 'react';
import FlowItemHeaderContainer from '../containers/FlowItemHeaderContainer';
import Choices from './Choices';
import Conditionals from './Conditionals';
import Actions from './Actions';
import JsPlumb, { newTargetEndpoint, newSourceEndpoint } from 'JsPlumb'


export default class FlowItem extends Component {
  componentDidMount() {
    this.makeFlowItemDraggable();
  }
  makeFlowItemDraggable() {
    let uuid = this.props.flowItem.uuid;
    let component = this;

    if (uuid) {
      JsPlumb.ready(() => {
        JsPlumb.draggable(uuid, {
          stop: function (e) {
            component.props.updateFlowItemPosition(component.props.flowItem.uuid, e.pos[0], e.pos[1]);
          }
        });
        JsPlumb.addEndpoint(uuid, newTargetEndpoint(uuid));
        JsPlumb.addEndpoint(uuid, newSourceEndpoint(uuid, ['Bottom'], 'bottom'));
        // TODO: Use maketarget
      });
    }
  }
  render() {
    let flowItem = this.props.flowItem || {};
    let newStyle = {left: flowItem.x, top: flowItem.y}

    //TODO: use Accordion component
    return (
      <div className='flow-item' id={flowItem.uuid} style={newStyle}>
        <FlowItemHeaderContainer flowItem={flowItem}/>
        <Choices flowItem={flowItem}/>
        <Conditionals flowItem={flowItem}/>
        <Actions flowItem={flowItem}/>
      </div>
    );
  }
}
