import React, { Component } from 'react';


export default class FlowItemHeader extends Component {
  render() {
    let flowItem = this.props.flowItem;

    return (
      <div className='header'>
        <p>Header</p>
      </div>
    );
  }
}
