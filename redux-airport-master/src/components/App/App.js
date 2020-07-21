import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../Form/Form';
import Table from '../Table/Table';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Redux Airport</h1>
        <Form />
        <Table />
      </div>
    );
  }
}

export default connect()(App);
