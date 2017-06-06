import React, { Component } from 'react';
import ActionContainer from '../containers/ActionContainer';
import Label from 'grommet/components/Label';


export default class Actions extends Component {
  render() {
    let actions = this.props.flowItem.actions || [];
    let flowItem = this.props.flowItem;

    return (
      <div className='actions'>
        <Label>Actions</Label>
        {actions.map((action, key) =>
          <ActionContainer key={key} action={action} flowItem={flowItem}/>
        )}
      </div>
    );
  }
}
