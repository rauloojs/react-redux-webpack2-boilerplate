import React, { Component } from 'react';
import FlowItem from './FlowItem';
import JsPlumb from '../../../modules/JsPlumb'


export default class FlowItems extends Component {
  componentDidMount() {
    this.makeFlowItemDraggable();
  }
  makeFlowItemDraggable() {

    // JsPlumb.ready(() => {
    //   console.log(document.querySelectorAll('.flow-item'))
    //   JsPlumb.draggable({
    //     containment: true
    //   });
    // });
  }
  render() {
    let flowItems = this.props.flowItems;
    let onFlowItemDrag = this.props.onFlowItemDrag;

    return (
      <div className='flowItems'>
        {flowItems.map((flowItem, key) =>
          <FlowItem key={key} flowItem={flowItem} onFlowItemDrag={onFlowItemDrag}/>
        )}
      </div>
    );
  }
}