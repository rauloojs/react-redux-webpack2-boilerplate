import React, { Component } from 'react';
import JsPlumb, { newSourceEndpoint } from 'JsPlumb'


export default class Conditional extends Component {
  genId() {
    return 'conditional' + this.props.index + '_' + this.props.uuid;
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
      <div id={id}>Conditional</div>
    );
  }
}
