import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid style={{ paddingTop: "40px" }} className="landing-grid">
          <Cell style={{ paddingTop: "10em" }} col={12}>
            <div className="banner-text">
              <h3>Hello, my name is Caleb Jenkins, and I'm a self taught</h3>
              <h1>Full Stack Web Developer</h1>

              <hr />

              <div className="social-links">
                <i>
                  <i className="fab fa-react" aria-hidden="true" />
                </i>

                <i>
                  <i className="fab fa-html5" aria-hidden="true" />
                </i>

                <i>
                  <i className="fab fa-css3" aria-hidden="true" />
                </i>

                <i>
                  <i className="fab fa-node" aria-hidden="true" />
                </i>

                <i>
                  <i className="fab fa-js" aria-hidden="true" />
                </i>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
