import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
  render() {
    return(
      <Grid style={{padding: '0'}}>
        <Cell style={{paddingBottom: '0'}} col={3}>
          <p>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell style={{paddingBottom: '0'}} col={9}>
          <h4 style={{marginTop:'0px'}}>{this.props.jobName}</h4>
          <p>{this.props.jobDescription}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Experience;
