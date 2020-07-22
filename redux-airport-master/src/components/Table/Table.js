import React, { Component } from 'react';
import { connect } from 'react-redux';

class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name of Airline</th>
            <th>Number of Planes</th>
          </tr>
        </thead>
        <tbody>
          {this.props.store.addAirline.map((item, index) => {
            return (
              <tr>
                <td key={index}>{item.airline}</td>
                <td key={index}>{item.planes}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

const mapStoreToProps = (store) => {
  return { store };
};

export default connect(mapStoreToProps)(Table);
