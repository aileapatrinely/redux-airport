import React, { Component } from 'react';
import { connect } from 'react-redux';

class Form extends Component {
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
        <input placeholder="Airline Name" onChange={this.handleChange} />
        <button onClick={this.handleClick}>Add Airline</button>
      </div>
    );
  }
}

export default connect()(Form);
