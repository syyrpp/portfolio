import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { Grid, Cell } from "react-mdl";

class About extends Component {
  render() {
    return (
      <div style={{ position: "relative", width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell style={{ paddingTop: "40px" }} col={12}>
            <Card className="about-me">
              <h1
                style={{
                  color: "black",
                  fontFamily: "Anton",
                }}
              >
                About me
              </h1>
              <p
                style={{
                  border: "5px solid #833fb2",
                  marginTop: "4rem",
                  marginLeft: "10rem",
                  marginRight: "10rem",
                  marginBottom: "6rem",
                }}
                className="about-me2"
              >
                <h3
                  style={{
                    paddingLeft: "22px",
                    paddingRight: "22px",
                    fontFamily: "Segoe Ui",
                    lineHeight: "2 rem",
                  }}
                >
                  I became interested in technology from an early age, stemming
                  from playing PC games, and my interest has grown into an
                  appreciation and fascination with computing systems and new
                  tech from top to bottom. I'm interested in cryptocurrencies
                  and decentralized applications, leading me to build my own
                  cryptocurrency mining sytem, and to learn full stack web
                  development, with React as my primary framework. I'm always
                  striving to learn more, and I firmly believe that anything I
                  don't know, is only something that I don't know... yet.
                </h3>
              </p>
            </Card>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
