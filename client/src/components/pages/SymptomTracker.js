import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Header,
  Segment,
  Checkbox,
  Grid,
  Form,
  Icon,
  Button,
  Divider
} from "semantic-ui-react";

class SymptomTracker extends Component {
  handleSubmit = event => {
    event.preventDefault();
    console.log("handleSubmit fired");
  };

  render() {
    //  const { user } = this.props.auth
    return (
      <div id="symptomsBody">
        <Header as="h1" style={{ marginLeft: 25 }}>
          Symptom Tracker
        </Header>
        <Divider/>

        <Grid>
          <Grid.Row>
            <Grid.Column floated="right" width={10}>
              <Segment inverted color="yellow">
                <Header>
                  <Icon name="warning sign" size="large" />
                  Call your doctor: If you think you have been exposed to
                  COVID-19 and develop a fever and symptoms, such as cough or
                  difficulty breathing. This symptom tracker is only here to
                  help guide you, always call your healthcare provider for
                  medical advice.
                </Header>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Grid columns={2} divided responsive="true" stackable>
          <Grid.Row>
            <Grid.Column width={4} className="symptomcolumns">
              <Header as="h3">
                COVID-19 realted symptoms
                <br />
                Mark your down symptoms below
              </Header>
              <Form>
                <Form.Field>
                  <Checkbox value="1" label="Fever" />
                </Form.Field>
                <Form.Field>
                  <Checkbox value="1" label="Dry cough" />
                </Form.Field>
                <Form.Field>
                  <Checkbox value="2" label="Shortness of breath" />
                </Form.Field>
                <Form.Field>
                  <Checkbox value="1" label="Headaches" />
                </Form.Field>
                <Form.Field>
                  <Checkbox value="1" label="Fatigue" />
                </Form.Field>
                <Form.Field>
                  <Checkbox value="4" label="Trouble breathing" />
                </Form.Field>
                <Form.Field>
                  <Checkbox
                    value="4"
                    label="Persistent pain or pressure in the chest"
                  />
                </Form.Field>
                <Button
                  type="submit"
                  content="Submit"
                  onClick={this.handleSubmit}
                />
              </Form>
            </Grid.Column>
            <Grid.Column className="symptomcolumns" id="recomendations">
              <Header as="h3">Recomendations</Header>
              <Header as="h2">Place holder for QUARANTINE or DANGER</Header>
              <p>Place holder for recomendations</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
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
