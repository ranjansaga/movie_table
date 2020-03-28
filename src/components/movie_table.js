import React, { Component } from 'react';

class MovieTable extends Component {
  constructor(props) {
    super(props);
    console.log('this.props', this.props);
  }
  render() {
    const {
      data
    } = this.props;
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
            {
              data.map((item, i) => {
                return (
                  <tr key={"tableItem"+i}>
                    <td>{item.name}</td>
                    <td>{item.ratings}</td>
                    <td>{item.duration}</td>
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
