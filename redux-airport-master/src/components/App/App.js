import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../Form/Form';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Redux Airport</h1>
        <Form />
        <table>
          {this.props.store.addAirline.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </table>
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return { store };
};

export default connect(mapStoreToProps)(App);
