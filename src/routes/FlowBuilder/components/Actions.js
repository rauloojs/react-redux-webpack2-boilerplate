import React, { Component } from 'react';
import Action from './Action';
import Label from 'grommet/components/Label';


export default class Actions extends Component {
  render() {
    let actions = this.props.flowItem.actions || [];
    let uuid = this.props.flowItem.uuid;

    return (
      <div className='actions'>
        <Label>Actions</Label>
        {actions.map((action, key) =>
          <Action key={key} action={action} uuid={uuid}/>
        )}
      </div>
    );
  }
}
