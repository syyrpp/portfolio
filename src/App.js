import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Layout>
        <Header
          className="header-color"
          title={
            <Navigation>
              <Link
                style={{
                  textDecoration: "none",
                  borderLeft: "2px solid black",
                  borderRight: "2px solid black",
                  color: "black",
                  fontSize: "large",
                  fontWeight: "600",
                }}
                to="/"
              >
                Home
              </Link>
            </Navigation>
          }
        >
          <Navigation>
            <Link
              style={{
                textDecoration: "none",
                borderLeft: "2px solid black",
                borderRight: "2px solid black",
                color: "black",
                fontSize: "large",
                fontWeight: "600",
              }}
              to="/resume"
            >
              Resume
            </Link>
            <Link
              style={{
                textDecoration: "none",
                borderRight: "2px solid black",
                color: "black",
                fontSize: "large",
                fontWeight: "600",
              }}
              to="/aboutme"
            >
              About Me
            </Link>
            <Link
              style={{
                textDecoration: "none",
                borderRight: "2px solid black",
                color: "black",
                fontSize: "large",
                fontWeight: "600",
              }}
              to="/projects"
            >
              Projects
            </Link>
            <Link
              style={{
                textDecoration: "none",
                borderRight: "2px solid black",
                color: "black",
                fontSize: "large",
                fontWeight: "600",
              }}
              to="/contact"
            >
              Contact
            </Link>
          </Navigation>
        </Header>
        <Content>
          <Main />
        </Content>
      </Layout>
    );
  }
}

export default App;
