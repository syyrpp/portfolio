import React, { Component } from "react";
import {
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";

class Projects extends Component {
  render() {
    return (
      <div className="projects-grid">
        <div>
          <h1
            style={{
              position: "relative",
              paddingTop: "100px",
              textAlign: "center",
              width: "100%",
              fontFamily: "Anton",
              color: "black",
            }}
          >
            Projects
          </h1>
          <h5
            style={{
              position: "relative",
              textAlign: "center",
              width: "100%",
              fontFamily: "Anton",
              color: "black",
            }}
          >
            More coming soon!
          </h5>
        </div>
        <div>
          <Grid
            style={{
              paddingLeft: "10em",
              paddingRight: "10em",
            }}
          >
            {/* Project 2 */}
            <Cell col={6}>
              <Card className="projects-grid2" shadow={5}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "325px",
                    background:
                      "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover",
                  }}
                >
                  Face Recognition
                </CardTitle>
                <CardText style={{ textAlign: "center" }}>
                  Face Recognition app. Users enter a url to a picture, if there
                  is a face, then it is detected, and user entries are counted.
                  Complete with Pgsql db for registration and login.
                </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://facerecognitbrain.herokuapp.com/"
                    >
                      Live Demo
                    </a>
                  </Button>
                </CardActions>
                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
            {/* Project 3 */}
            <Cell col={6}>
              <Card className="projects-grid2" shadow={5}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "325px",
                    background:
                      "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover",
                  }}
                >
                  Expense Tracker
                </CardTitle>
                <CardText style={{ textAlign: "center" }}>
                  Expense Tracking app. User inputs an income or and expense
                  amount, and identifying text for each item entered. It then
                  calculates total expenses.
                </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://expensetrackingapplication.herokuapp.com/"
                    >
                      Live Demo
                    </a>
                  </Button>
                </CardActions>
                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Projects;
