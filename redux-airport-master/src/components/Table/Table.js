import React, { Component } from 'react';
import { connect } from 'react-redux';

class Table extends Component {
  render() {
    return (
      <table>
        <tbody>
          {this.props.store.addAirline.map((item, index) => {
            return <td key={index}>{item}</td>;
          })}
          {this.props.store.addPlanes.map((item, index) => {
            return <td key={index}>{item}</td>;
          })}
        </tbody>
      </table>
    );
  }
}
