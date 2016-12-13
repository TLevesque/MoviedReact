import React, { Component } from 'react';
import Button from './Button.js';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import {amber800,black,grey100,grey900} from 'material-ui/styles/colors';


class Movie extends Component {
  render () {
    return (
      <div className="Movie">
        <img src={this.props.posterPath}/>
        <Button onClick={this.props.onSeen} disabled={this.props.seen}/>
      </div>
    );
  }
}

export default Movie;
