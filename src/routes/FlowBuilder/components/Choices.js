import React, { Component } from 'react';
import Choice from './Choice';


export default class Choices extends Component {
  render() {
    let choices = this.props.choices;

    return (
      <div className='choices'>
        <p>Choices</p>
        {choices.map((choice, key) =>
          <Choice key={key} choice={choice}/>
        )}
      </div>
    );
  }
}
