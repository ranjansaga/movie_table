import React, { Component } from 'react';

class MovieForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      ratings: '',
      duration: ''
    };
  }

  onMovieAdd = (e) => {
    e.preventDefault();
    console.log('adding movie', this.state, this.props);
    this.props.onMovieAdd(this.state);
  };

  handleChange = (e) => {
    console.log('e here', e);
    let input = e.target;
    let name = e.target.name;
    let value = input.value;
    console.log('name', 'value', name, value);
    this.setState({
      [name]: value
    })
  };

  render() {
    return (
      <div>
        <form onSubmit={(e) => { this.onMovieAdd(e); }} name="movieForm">
          <div className="form-control">
            <div>Movie Name </div>
            <input
              type="text" id="name-input" onChange={(e) => this.handleChange(e)} />
          </div>
          <div className="form-control">
            <div> Ratings </div>
            <input
              onChange={e => this.handleChange(e)}
              type="text" id="ratings-input" />
          </div>
          <div className="form-control">
            <div> Duration </div>
            <input
              onChange={e => this.handleChange(e)}
              type="text" id="duration-input" />
          </div>
          <div>
            <button
              type="submit" 
              id="submit-button"> Submit </button>
          </div>
        </form>
      </div>
    );
  }
}

export default MovieForm;
