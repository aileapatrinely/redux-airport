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
  };

  handleChange = (event) => {
    this.setState({
      newAirline: event.target.value,
    });
  };

  handlePlanes = (event) => {
    this.setState({
      numberPlanes: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <input placeholder="Airline Name" onChange={this.handleChange} />
        <input placeholder="Number of Planes" onChange={this.handlePlanes} />
        <button onClick={this.handleClick}>Add Airline</button>
      </div>
    );
  }
}

export default connect()(Form);
