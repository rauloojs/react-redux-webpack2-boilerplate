import React, { Component } from 'react';
import Conditional from './Conditional';


export default class Conditionals extends Component {
  render() {
    let conditionals = this.props.conditionals;

    return (
      <div className='conditionals'>
        <p>Conditionals</p>
        {conditionals.map((conditional, key) =>
          <Conditional key={key} conditional={conditional}/>
        )}
      </div>
    );
  }
}
