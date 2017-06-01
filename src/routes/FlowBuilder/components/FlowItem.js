import React, { Component } from 'react';
import FlowItemHeader from './FlowItemHeader';
import Choices from './Choices';
import Conditionals from './Conditionals';
import Actions from './Actions';
import JsPlumb, { newTargetEndpoint, newSourceEndpoint } from '../../../modules/JsPlumb'


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
            console.log(e.pos[0], e.pos[1], component.props.flowItem.uuid);
            component.props.onFlowItemDrag(component.props.flowItem.uuid, e.pos[0], e.pos[1]);
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
        <FlowItemHeader flowItem={flowItem}/>
        <Choices flowItem={flowItem}/>
        <Conditionals flowItem={flowItem}/>
        <Actions flowItem={flowItem}/>
      </div>
    );
  }
}
