import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./landing.css";

import {
  Segment,
  Grid,
  Header,
  Icon,
  Button,
  Divider,
  Container
} from "semantic-ui-react";

class Landing extends Component {
  
  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  render() {
    return (
      <Container transparent style={{ marginTop: 100, opacity: 0.9}}>
        <Segment textAlign="center" >
          <Header as="h1" content="Covid Daily" />
          <Header as="h3">
            An app for people under quarantine to track sypmtoms as well as
            access to Covid-19 resources.
          </Header>
        </Segment>
        <Segment placeholder>
          <Grid columns={2} stackable textAlign="center">
            <Divider vertical>Or</Divider>

            <Grid.Row verticalAlign="middle">
              <Grid.Column>
                <Header icon>
                  <Icon name="list" />
                </Header>
                <Link to="/register">
                  <Button primary>Register</Button>
                </Link>
              </Grid.Column>
              <Grid.Column>
                <Header icon>
                  <Icon name="sign in" />
                </Header>
                <Link to="/login">
                  <Button>Log In</Button>
                </Link>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps)(withRouter(Landing));
