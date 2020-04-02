import React, { Component } from "react";
import { connect } from "react-redux";
import { Header, Container, Divider } from "semantic-ui-react";
import Links from "../resources/Links";
import headerImg from "../resources/covid2.jpg";

class Dashboard extends Component {
  render() {
    return (
      <Container style={{ minHeight: "400px" }}>
        <Header as="h1" textAlign="center">
          <img src={headerImg} style={{ height: "180px", width: "350px" }} />
        </Header>
        <Divider />
        <Links />
        <Divider />
        <Container textAlign="center">
          YouTube Video about covid19 here
        </Container>
      </Container>
    );
  }
}

export default connect()(Dashboard);
