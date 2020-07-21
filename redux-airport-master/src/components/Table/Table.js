import React, { Component } from 'react';
import { connect } from 'react-redux';

class Table extends Component {
  render() {
    return (
      <table>
        {this.props.store.addAirline.map((item, index) => {
          return (
            <td key={index}>
              Airline:{item.airline}
              Number of Planes:{item.planes}
            </td>
          );
        })}
      </table>
    );
  }
}

const mapStoreToProps = (store) => {
  return { store };
};

export default connect(mapStoreToProps)(Table);
