import React, { Component } from 'react';
import JsPlumb, { newSourceEndpoint } from 'JsPlumb'


export default class Conditional extends Component {
  genId() {
    debugger;
    return 'conditional_' + this.props.index + '_' + this.props.flowItem.uuid;
  }
  onEditClick() {
    this.props.selectFlowItem(this.props.flowItem);
    this.props.selectConditional(this.props.conditional);
    this.props.openRightSidebar('CONDITIONAL');
  }
  componentDidMount() {
    let id = this.genId();

    JsPlumb.ready(() => {
      JsPlumb.addEndpoint(id, newSourceEndpoint(id));
    });
  }
  render() {
    let conditional = this.props.conditional;
    let id = this.genId();

    return (
      <div id={id}>
        Conditional
        <button onClick={this.onEditClick.bind(this)}>Edit</button>
      </div>
    );
  }
}
