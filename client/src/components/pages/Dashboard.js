import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Header, Segment, Image } from "semantic-ui-react";
import CovidLogo from "../../Covid19Logo.png";
class Dashboard extends Component {
  render() {
    const { user } = this.props.auth;

    return (
      <Segment style={{ minHeight: "400px" }}>
        <Header as="h1" textAlign="center">
          Dashboard
        </Header>
        <Header as="h3" textAlign="center">
          <b>Welcome</b> {user.name}!
        </Header>
        <Image size="medium" centered src={CovidLogo} />
      </Segment>
    );
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);
