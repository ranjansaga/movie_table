import React, { Component } from 'react';

class MovieTable extends Component {
  constructor(props) {
    super(props);
    console.log('this.props', this.props);
  }
  render() {

    return (
      <div>
        <div> Search </div>
        <div> <input type="text" id="search-input" /> </div>
        <table>
          <thead>
            <tr>
              <th> Name </th>
              <th> Ratings </th>
              <th> Duration </th>
            </tr>

          </thead>
          <tbody>
            <tr>{this.props.data.name}</tr>
            <tr></tr>
            <tr></tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default MovieTable;
