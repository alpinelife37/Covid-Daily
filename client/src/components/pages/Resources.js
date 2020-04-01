import React, { Component } from "react";
import { connect } from "react-redux";
import { Header, Segment } from "semantic-ui-react";
import Links from "../resources/Links";

class Dashboard extends Component {
  render() {
    return (
      <Segment style={{ minHeight: "400px" }}>
        <Header as="h1" textAlign="center">
          Resources
        </Header>
        <Links />
      </Segment>
    );
  }
}

export default connect()(Dashboard);
