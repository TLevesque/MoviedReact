import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import {amber800,black,grey100,grey900} from 'material-ui/styles/colors';


class Button extends Component {
  render() {
    return (
      <button onClick={this.props.onClick}>
        {this.props.disabled ? 'NOT SEEN YET' : 'SEEN'}
      </button>
    );
  }
}

export default Button;
