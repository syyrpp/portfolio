import React, { Component } from "react";
import { Grid, Cell, Button } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import me from "./me.jpg";
import { Link } from "react-router-dom";
import CalebJenkinsResume from "./CalebJenkinsResume.pdf";

class Resume extends Component {
  render() {
    return (
      <div style={{ paddingTop: "55px" }} className="resume-bg">
        <Grid style={{ paddingLeft: "6em", paddingTop: "2em" }}>
          <Cell col={4}>
            <div>
              <img
                src={me}
                alt="avatar"
                style={{
                  height: "200px",
                  width: "225px",
                  position: "relative",
                  top: "20px",
                  paddingLeft: "30px",
                }}
              />
            </div>

            <h2 style={{ color: "black", paddingTop: "20px" }}>
              Caleb Jenkins
            </h2>
            <h4 style={{ color: "black", fontWeight: "600" }}>
              Fullstack web developer
            </h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p
              style={{
                color: "black",
                paddingRight: "13em",
                fontSize: "large",
                fontWeight: "600",
              }}
            >
              Hard working self taught full stack web developer, with a strong
              commitment to progression of knowledge, skills, and self.
              Certified pc and network technician. Experienced Sales Associate
              with over 5 years in customer service.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h4 style={{ color: "black", fontWeight: "600" }}>
              Professional Certifications
            </h4>
            <p style={{ color: "black", fontSize: "large", fontWeight: "600" }}>
              CompTIA A+ through August, 2022
            </p>
            <p style={{ color: "black", fontSize: "large", fontWeight: "600" }}>
              CompTIA Network+ through August, 2022
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <Button>
              <Link
                className="link"
                to={CalebJenkinsResume}
                target="_blank"
                download
              >
                Full Resume Download
              </Link>
            </Button>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2 style={{ paddingBottom: "0" }}>Education</h2>

            <Education
              style={{ paddingBottom: "0" }}
              startYear={2009}
              endYear={2013}
              schoolName="New Caney High School"
              schoolDescription="High School Diploma - Top 5%"
            />

            <Education
              style={{ paddingBottom: "0" }}
              startYear={2013}
              endYear={2016}
              schoolName="Lone Star College"
              schoolDescription="45 credit hours"
            />
            <Education
              startYear={2019}
              endYear={2019}
              schoolName="Udemy"
              schoolDescription="The Complete Web Developer in 2020: Zero to Mastery"
            />
            <hr
              style={{ paddingBottom: "0", borderTop: "3px solid #e22947" }}
            />

            <h2 style={{ paddingBottom: "0" }}>Experience</h2>

            <Experience
              startYear={2013}
              endYear={2018}
              jobName="Sales Associate-Cashier-Customer Service"
              jobDescription="Assisted call-in customers with questions and orders. Identified potential customer needs and developed appropriate responses along with information on fitting products and services. Performed timely and cost-effective project management"
            />
            <hr
              style={{ paddingBottom: "0", borderTop: "3px solid #e22947" }}
            />

            <h2 style={{ paddingBottom: "0" }}>Skills</h2>
            <div className="skills-grid">
              <Skills skill="HTML/CSS" />
              <Skills skill="Javascript ES6-10" />
              <Skills skill="HTTP/JSON/AJAX React + Redux" />
              <Skills skill="Github" />
              <Skills skill="Node/Express.js" />
              <Skills skill="PostgresSQL/MongoDB" />
              <Skills skill="RESTful API" />
              <Skills skill="Production/Deployment" />
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
