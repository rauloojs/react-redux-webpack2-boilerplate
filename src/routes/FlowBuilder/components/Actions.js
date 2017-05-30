import React, { Component } from 'react';
import Action from './Action';


export default class Actions extends Component {
  render() {
    let actions = this.props.actions;

    return (
      <div className='actions'>
        <p>Actions</p>
        {actions.map((action, key) =>
          <Action key={key} action={action}/>
        )}
      </div>
    );
  }
}
