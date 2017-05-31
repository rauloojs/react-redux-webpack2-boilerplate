import React, { Component } from 'react';
import JsPlumb, { newSourceEndpoint } from '../../../modules/JsPlumb';


export default class Action extends Component {
  genId() {
    return 'action_' + this.props.uuid;
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
      <div id={id}>Action</div>
    );
  }
}
