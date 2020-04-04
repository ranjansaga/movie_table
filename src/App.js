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
    let movieList = [...this.state.movieList];
    let newMovie = true;
    movieList.forEach((mov) => {
      if(mov.name === movie.name) {
        mov.ratings = movie.ratings;
        mov.duration = movie.duration;
        newMovie = false;
      }
    });
    if(newMovie === true) {
      movieList.push(movie);
    }

    this.setState({
      movieList: movieList
    });
    console.log('Added another movie');
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
