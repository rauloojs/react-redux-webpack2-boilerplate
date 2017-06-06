import React, { Component } from 'react';
import ConditionalContainer from '../containers/ConditionalContainer';
import Label from 'grommet/components/Label';


export default class Conditionals extends Component {

  render() {
    let conditionals = this.props.flowItem.conditionals;
    let uuid = this.props.flowItem.uuid;
    let flowItem = this.props.flowItem;

    return (
      <div className='conditionals'>
        <Label>Conditionals</Label>
        {conditionals.map((conditional, key) =>
          <ConditionalContainer key={key} conditional={conditional} flowItem={flowItem} index={key}/>
        )}
      </div>
    );
  }
}
