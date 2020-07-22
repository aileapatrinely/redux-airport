import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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
        <TextField
          id="filled-basic"
          label="Filled"
          variant="filled"
          placeholder="Airline Name"
          onChange={this.handleChange}
          value={this.state.newAirline}
        />
        <TextField
          id="filled-basic"
          label="Filled"
          variant="filled"
          placeholder="Number of Planes"
          onChange={this.handlePlanes}
          value={this.state.numberPlanes}
        />
        <Button variant="contained" color="primary" onClick={this.handleClick}>
          Add Airline
        </Button>
      </div>
    );
  }
}

export default connect()(Form);
