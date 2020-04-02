import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Header, Segment, Container, Checkbox, Grid, Divider } from "semantic-ui-react";

class SymptomTracker extends Component {
  render() {
    //  const { user } = this.props.auth;  Incase anyone wants to display the users name they can call it by {user.name}

    return (
      <div>
        <Segment>
          <Header as="h1" textAlign="center">
            Symptom Tracker
          </Header>
        </Segment>
        <Segment>
          <Container>
            <Grid columns={2} relaxed='very'>
              <Grid.Column >
                <Header as="h3" textAlign='center'>
                  Mark your symptoms below
                </Header>
                <Divider/>
                <p>
                  <Checkbox label='Fever' />
                </p>
                <p>
                  <Checkbox label='Cough' />
                </p>
                <p>
                  <Checkbox label='Shortness of breath' />
                </p>
                <p>
                  <Checkbox label='Headaches' />
                </p>
                <p>
                  <Checkbox label='Fatigue' />
                </p>
                <p>
                  <Checkbox label='Trouble breathing' />
                </p>
                <p>
                  <Checkbox label='Persistent pain or pressure in the chest' />
                </p>
                <p>
                  <Checkbox label='New confusion or inability to arouse' />
                </p>
                <p>
                  <Checkbox label='Bluish lips or face' />
                </p>
              </Grid.Column>

              <Grid.Column>
              <Header as="h3" textAlign='center'>
                  Recomendations
                </Header>
                <Divider/>
                <Header as="h2" textAlign='center'>
                  Place holder for QUARANTINE or DANGER
                </Header>
                <p>
                  Place holder for recomendations
                </p>
              </Grid.Column>
            </Grid>
            <Divider vertical />
          </Container>
        </Segment>
      </div>
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
