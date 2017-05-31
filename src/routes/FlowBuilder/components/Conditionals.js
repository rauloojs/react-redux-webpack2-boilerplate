import React, { Component } from 'react';
import Conditional from './Conditional';
import Label from 'grommet/components/Label';


export default class Conditionals extends Component {

  render() {
    let conditionals = this.props.flowItem.conditionals || [];
    let uuid = this.props.flowItem.uuid;

    return (
      <div className='conditionals'>
        <Label>Conditionals</Label>
        {conditionals.map((conditional, key) =>
          <Conditional key={key} conditional={conditional} uuid={uuid} index={key}/>
        )}
      </div>
    );
  }
}
