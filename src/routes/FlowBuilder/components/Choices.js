import React, { Component } from 'react';
import Choice from './Choice';
import Label from 'grommet/components/Label';


export default class Choices extends Component {
  render() {
    let choices = this.props.flowItem.options.choices || [];
    let uuid = this.props.flowItem.uuid;

    return (
      <div className='choices'>
        <Label>Choices</Label>
        {choices.map((choice, key) =>
          <Choice key={key} choice={choice} uuid={uuid}/>
        )}
      </div>
    );
  }
}
