import React, { Component } from "react";
import { connect } from "react-redux";
import { Header, Segment } from "semantic-ui-react";

class Dashboard extends Component {
  render() {
    return (
      <Segment style={{ minHeight: "400px" }}>
      <Header as="h1" textAlign="center">
        Resources
      </Header>
  </Segment>
    );
  }
}



export default connect(
)(Dashboard);
