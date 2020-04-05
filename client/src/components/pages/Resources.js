import React, { Component } from "react";
import { connect } from "react-redux";
import { Header, Container, Divider } from "semantic-ui-react";
import Links from "../resources/Links";
import headerImg from "../resources/covid2.jpg";
import ReactPlayer from "react-player";

class Dashboard extends Component {
  render() {
    return (
      <Container style={{ minHeight: "400px" }}>
        <Header as="h1" textAlign="center">
          <img
            src={headerImg}
            alt="covidLogo"
            style={{ height: "200px", width: "350px", borderRadius: "100%" }}
          />
        </Header>
        <Divider />
        <Links />
        <Divider />
        <Container textAlign="center">
          <div style={{ display: "inline-block" }}>
            <ReactPlayer url="https://www.youtube.com/watch?v=BtN-goy9VOY" />
          </div>
        </Container>
      </Container>
    );
  }
}

export default connect()(Dashboard);
