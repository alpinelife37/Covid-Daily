import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";

import CheckBox from "../Checkbox/Checkbox";
import {
  Card,
  Grid,
  Header,
  Segment,
  Icon,
  Button,
  Divider
} from "semantic-ui-react";
class SymptomTracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSymptoms: [
        { id: 1, name: "Fever", value: 1, isChecked: false },
        { id: 2, name: "Dry cough", value: 2, isChecked: false },
        { id: 3, name: "Shortness of breath", value: 2, isChecked: false },
        { id: 4, name: "Headaches", value: 1, isChecked: false },
        { id: 5, name: "Fatigue", value: 1, isChecked: false },
        { id: 6, name: "Trouble breathing", value: 4, isChecked: false },
        {
          id: 7,
          name: "Pain or pressure in the chest",
          value: 4,
          isChecked: false
        }
      ],
      symptomid: this.props.auth.user.symptomid,
      color: "blue",
      severityvalues: []
    };
  }

  componentDidMount() {
    const symptomID = this.state.symptomid;
    axios.get("/api/usersymptoms", {
      params: {
        ID: symptomID
      }
    }).then(response => {
      // this.setState({
      //   dbresults: response.data
      // });
      console.log(response);
    });
  } 

  handleCheckBox = event => {
    let userSymptoms = this.state.userSymptoms;
    userSymptoms.forEach(symptom => {
      if (symptom.name === event.target.name)
        symptom.isChecked = event.target.checked;
    });
    this.setState({ userSymptoms: userSymptoms });
    // console.log("handleCheckBox event fired");
    // console.log(event.target.name);
    // console.log(event.target.checked);
    // console.log(event.target.value);
  };

updateSymptoms = ()=> {
    axios.post("/api/symptoms", this.state).then(res => {
      console.log(res);
    });
}

  handleSubmit = event => {
    event.preventDefault();
    console.log("handleSubmit fired");
    this.setState({ severityvalues: [] });
    let userSymptoms = this.state.userSymptoms;
    let severityLevel = this.state.severityvalues;
    userSymptoms.forEach(symptom => {
      if (symptom.isChecked === true) severityLevel.push(symptom.value);
    });
    severityLevel = severityLevel.reduce((a, b) => a + b, 0);
    this.setState({severityLevel: severityLevel });
    this.updateSymptoms();  
  };

  render() {
    return (
      <div id="symptomsBody">
        <Header as="h1" style={{ marginLeft: 25 }}>
          Symptom Tracker
        </Header>
        <Divider />

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
              <Card>
                <Card.Content>
                  <div id="checkboxlist">
                    <ul>
                      {this.state.userSymptoms.map((symptom, index) => {
                        return (
                          <CheckBox
                            className="checkMarkContainer"
                            key={index}
                            handleCheckBox={this.handleCheckBox}
                            {...symptom}
                          />
                        );
                      })}
                    </ul>
                  </div>
                  <Button
                    type="submit"
                    content="Submit"
                    onClick={this.handleSubmit}
                  />
                </Card.Content>
              </Card>
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
