import React, { Component } from 'react';
import { Link } from 'react-router'


export default class FlowListView extends Component {
  render() {
    return (
      <div>
        <h3>FlowListView</h3>
        <Link to='/flow_builder/1' activeClassName='page-layout__nav-item--active'>Flow builder</Link>
      </div>
    );
  }
}
