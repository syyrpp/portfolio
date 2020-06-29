import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import me from "./me.jpg";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid style={{ paddingTop: "8rem" }} className="contact-grid">
          <Cell
            style={{ paddingLeft: "5rem", borderRight: "3px solid black" }}
            col={6}
          >
            <h2>Caleb Jenkins</h2>
            <hr></hr>
            <img
              src={me}
              alt="avatar"
              style={{ height: "350px", width: "275px", paddingTop: "2em" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Me
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "40px",
                      fontFamily: "Anton",
                    }}
                  >
                    <i
                      style={{
                        color: "black",
                        marginLeft: "2rem",
                        fontSize: "50px",
                      }}
                      className="fa fa-phone-square"
                      aria-hidden="true"
                    />
                    <span style={{ color: "black", paddingLeft: "5rem" }}>
                      (832) 421-2920
                    </span>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "40px",
                      fontFamily: "Anton",
                    }}
                  >
                    <i
                      style={{
                        color: "black",
                        marginLeft: "2rem",
                        fontSize: "50px",
                      }}
                      className="fa fa-envelope"
                      aria-hidden="true"
                    />
                    <span style={{ color: "black", paddingLeft: "5rem" }}>
                      calebjenkins17@yahoo.com
                    </span>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "40px",
                      fontFamily: "Anton",
                    }}
                  >
                    <a
                      href="http://linkedin.com"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <i
                        style={{
                          color: "black",
                          marginLeft: "2rem",
                          fontSize: "50px",
                        }}
                        className="fa fa-linkedin"
                        aria-hidden="true"
                      />
                    </a>
                    <span style={{ color: "black", paddingLeft: "5rem" }}>
                      syyrpp
                    </span>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "40px",
                      fontFamily: "Anton",
                    }}
                  >
                    <a
                      href="https://github.com/syyrpp"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <i
                        style={{
                          color: "black",
                          marginLeft: "2rem",
                          fontSize: "50px",
                        }}
                        className="fa fa-github"
                        aria-hidden="true"
                      />
                    </a>
                    <span style={{ color: "black", paddingLeft: "5rem" }}>
                      Caleb Jenkins
                    </span>
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
