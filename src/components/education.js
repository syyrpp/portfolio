import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
  render() {
    return(
      <Grid style={{padding: '0'}}>
        <Cell style={{padding: '0'}} col={3}>
          <p>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell style={{padding: '0'}} col={9}>
          <h4 style={{margin: '0', padding: '0'}}>{this.props.schoolName}</h4>
          <p>{this.props.schoolDescription}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Education;
