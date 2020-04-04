import React, { Component } from 'react';

class MovieTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: this.props.data,
      filteredMovieList: this.props.data,
      searchString: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.state.data) {
      this.setState({ movieList: nextProps.data, filteredMovieList: nextProps.data},() => {
        this.applySearchFilter(this.state.searchString);
      })
    }
  }

  applySearchFilter = function (searchString) {
    console.log('applying search filters')
    if(searchString=== '') {
      this.setState({ filteredMovieList: this.state.movieList });
    } else {
      let filteredList = this.state.movieList.filter((movie) => {
        return movie.name.includes(searchString);
      })
      this.setState({ filteredMovieList: filteredList })
    }
  }

  handleChange = (event) => {
    this.setState({searchString: event.target.value},() => {
      this.applySearchFilter(this.state.searchString);
    });
  }

  render() {
    console.log('rendering my Table', JSON.stringify(this.state))
    this.state.filteredMovieList && this.state.filteredMovieList.map((item, i) => {
      const durationNumber = item.duration.match(/(\d+)/g)[0];
      const durationString = item.duration.match(/[a-zA-Z]+/g)[0];
      let durationInMin = '';
      if (durationString === 'h') {
        durationInMin = durationNumber * 60;
      } else {
        durationInMin = durationNumber;
      }
      item.durationInMin = durationInMin;
      return item;
    });
    this.state.filteredMovieList.sort((a, b) => (a.durationInMin > b.durationInMin) ? 1 : -1)
    return (
      <div>
        <div> Search </div>
        <div>
          <input
            onChange={e => this.handleChange(e)}
            type="text"
            id="search-input"
          />
        </div>
        <table>
          <thead>
            <tr>
              <th> Name </th>
              <th> Ratings </th>
              <th> Duration </th>
            </tr>

          </thead>
          <tbody>
            {
              this.state.filteredMovieList && this.state.filteredMovieList.map((item, i) => {
                return (
                  <tr key={"tableItem" + i}>
                    <td>{item.name}</td>
                    <td>{item.ratings}</td>
                    <td>{item.duration}</td>
                    <td>{item.durationInMin}</td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default MovieTable;
