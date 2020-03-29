import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Header, Segment } from "semantic-ui-react";

class SymptomTracker extends Component {
  render() {
  //  const { user } = this.props.auth;  Incase anyone wants to display the users name they can call it by {user.name}

    return (
      <Segment style={{ minHeight: "400px" }}>
          <Header as="h1" textAlign="center">
            Symptom Tracker
          </Header>
      </Segment>
    );
  }
}

SymptomTracker.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(SymptomTracker);
