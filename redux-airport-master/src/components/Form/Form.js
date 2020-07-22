import React, { Component } from 'react';
import { connect } from 'react-redux';

class Form extends Component {
  state = {
    newAirline: '',
    numberPlanes: '',
  };
  handleClick = () => {
    this.props.dispatch({
      type: 'BUTTON_CLICK',
      payload: {
        airline: this.state.newAirline,
        planes: this.state.numberPlanes,
      },
    });
    this.setState({ newAirline: '', numberPlanes: '' });
  };

  handleChange = (event) => {
    this.setState({ ...this.state, newAirline: event.target.value });
  };

  handlePlanes = (event) => {
    this.setState({ ...this.state, numberPlanes: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          placeholder="Airline Name"
          onChange={this.handleChange}
          value={this.state.newAirline}
        />
        <input
          placeholder="Number of Planes"
          onChange={this.handlePlanes}
          value={this.state.numberPlanes}
        />
        <button onClick={this.handleClick}>Add Airline</button>
      </div>
    );
  }
}

export default connect()(Form);
