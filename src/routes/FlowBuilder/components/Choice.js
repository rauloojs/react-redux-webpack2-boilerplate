import React, { Component } from 'react';


export default class Choice extends Component {
  render() {
    let choice = this.props.choice;
    let id = 'choice_' + this.props.uuid;

    return (
      <div id={id}>{choice.name}</div>
    );
  }
}
