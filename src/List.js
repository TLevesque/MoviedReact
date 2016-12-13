import React, { Component } from 'react';
import Movie from './Movie.js';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import {amber800,black,grey100,grey900} from 'material-ui/styles/colors';


class List extends Component {
  constructor(props){
    super(props);
    this.state = {
      movies: []
    };
  };

  componentDidMount() {
    fetch('https://movied.herokuapp.com/discover')
      .then( (response) => {
        return response.json()
      })
      .then( (data) => {
        return this.setState({movies: data});
      })
  };

  toggleSeen(movieId) {
    //Find the movie and toggle seen (create seen if its undefined, true by default)
    console.log('toggle seen ', movieId);
  }

  renderMovies() {
    return this.state.movies.map(movie =>
      <Movie
        key={movie.id}
        posterPath={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        onSeen={() => this.toggleSeen(movie.id)}
        seen={movie.seen}
        // return  this.setState({
        //   movies :posterPath,
        // })
      />
    )
  }

  render () {
    return (
      <ul className="List">
        {this.renderMovies()}
      </ul>
    );
  }
}

export default List;
