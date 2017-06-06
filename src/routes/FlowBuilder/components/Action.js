import React, { Component } from 'react';
import JsPlumb, { newSourceEndpoint } from 'JsPlumb';


export default class Action extends Component {
  genId() {
    return 'action_' + this.props.flowItem.uuid;
  }
  onEditClick() {
    this.props.selectFlowItem(this.props.flowItem);
    this.props.selectAction(this.props.action);
    this.props.openRightSidebar('ACTION');
  }
  componentDidMount() {
    let id = this.genId();

    JsPlumb.ready(() => {
      JsPlumb.addEndpoint(id, newSourceEndpoint(id));
    });
  }
  render() {
    let action = this.props.action;
    let id = this.genId();

    return (
      <div id={id}>
        Action
        <button onClick={this.onEditClick.bind(this)}>Edit</button>
      </div>
    );
  }
}
