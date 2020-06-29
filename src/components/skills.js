import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import ListGroup from 'react-bootstrap/ListGroup'

class Skills extends Component {
  render() {
    return(
      <Grid style={{padding: '0'}}>
        <Cell style={{paddingBottom: '0'}} col={12}>
          <div>
          	<ListGroup>
          		<ListGroup.Item>{this.props.skill}</ListGroup.Item>
          		<ListGroup.Item>{this.props.skill2}</ListGroup.Item>
          		<ListGroup.Item>{this.props.skill3}</ListGroup.Item>
          		<ListGroup.Item>{this.props.skill4}</ListGroup.Item>
          		<ListGroup.Item>{this.props.skill5}</ListGroup.Item>
          		<ListGroup.Item>{this.props.skill6}</ListGroup.Item>
          		<ListGroup.Item>{this.props.skill7}</ListGroup.Item>
          		<ListGroup.Item>{this.props.skill8}</ListGroup.Item>
          		<ListGroup.Item>{this.props.skill9}</ListGroup.Item>
          		<ListGroup.Item>{this.props.skill10}</ListGroup.Item>
          		<ListGroup.Item>{this.props.skill11}</ListGroup.Item>
          		<ListGroup.Item>{this.props.skill12}</ListGroup.Item>
          		<ListGroup.Item>{this.props.skill13}</ListGroup.Item>
          		<ListGroup.Item>{this.props.skill14}</ListGroup.Item>
          		<ListGroup.Item>{this.props.skill15}</ListGroup.Item>
          	</ListGroup>
          </div>
        </Cell>
      </Grid>
    )
  }
}

export default Skills;