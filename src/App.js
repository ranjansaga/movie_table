import React, { Component } from 'react';
import './App.css';
import MovieForm from './components/movie_form';
import MovieTable from './components/movie_table';

class App extends Component {

  constructor(props) {
    console.log('App constructor')
    super(props);

    this.state = {
      movieList: []
     };
  }

  onMovieAdd = (movie) => {
    console.log(' addMovieInfo movie', movie);
    let movieList = [...this.state.movieList];

    movieList.push(movie);

    this.setState({
      movieList: movieList
    });
    console.log('addMovieInfo');
  }

  render() {
    console.log('rendering My app')
    return (
      <div>
        <MovieForm
          onMovieAdd={this.onMovieAdd}/>
        <MovieTable
          data={this.state.movieList}
        />
      </div>
    );
  }
}

export default App;
