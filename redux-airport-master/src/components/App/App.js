import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  state = {
    newAirline: '',
  };
  handleClick = () => {
    this.props.dispatch({
      type: 'BUTTON_CLICK',
      payload: { airline: this.state.newAirline },
    });
  };

  handleChange = (event) => {
    this.setState({
      newAirline: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <h1>Redux Airport</h1>
        <input placeholder="Airline Name" onChange={this.handleChange} />
        <button onClick={this.handleClick}>Add Airline</button>
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
