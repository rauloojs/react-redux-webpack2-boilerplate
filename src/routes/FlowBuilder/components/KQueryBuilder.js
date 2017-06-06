import React, { Component } from 'react';
import QueryBuilder from 'react-querybuilder';


export default class KQueryBuilder extends Component {
  logQuery(query) {
    console.log(JSON.stringify(query));
  }
  render() {
    let fields = this.props.fields;
    let operators = this.props.operators;

    return (
      <QueryBuilder fields={fields} operators={operators} onQueryChange={this.logQuery.bind(this)}/>
    );
  }
}
