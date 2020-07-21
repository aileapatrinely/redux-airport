import React, { Component } from 'react';
import { connect } from 'react-redux';

class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Airline Name</th>
          </tr>
        </thead>
        <tbody>
          {this.props.store.addAirline.map((item, index) => {
            return <td key={index}>{item}</td>;
          })}
        </tbody>
      </table>
    );
  }
}
