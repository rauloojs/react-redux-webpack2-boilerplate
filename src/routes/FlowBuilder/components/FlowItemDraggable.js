import React, { Component } from 'react';
import Label from 'grommet/components/Label';


export default class FlowItemDraggable extends Component {
  render() {
    let name = this.props.flowItem.name;
    let id = this.props.flowItem.id;

    return (
      <div id={this.props.id} data-item-id={id} className='flow-item-draggable'>
        <Label>{name}</Label>
      </div>
    );
  }
}
