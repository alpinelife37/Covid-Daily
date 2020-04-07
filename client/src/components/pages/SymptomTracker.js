import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";
import Recomendations from "./Recomendations";

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
      userSymptoms: [],
      symptomid: this.props.auth.user.symptomid,
      color: "green",
      severityvalues: [],
      severitydb: 0
    };
  }

  componentDidMount() {
    const symptomID = this.state.symptomid;
    axios.get("/api/usersymptoms", {
      params: {
        ID: symptomID
      }
    }).then(response => {
      this.setState({
        userSymptoms: [
          { id: 1, name: "Fever", value: 1, isChecked: response.data.fever },
          { id: 2, name: "Dry cough", value: 2, isChecked: response.data.cough },
          { id: 3, name: "Shortness of breath", value: 2, isChecked: response.data.breath },
          { id: 4, name: "Headaches", value: 1, isChecked: response.data.headache },
          { id: 5, name: "Fatigue", value: 1, isChecked: response.data.fatigue },
          { id: 6, name: "Trouble breathing", value: 4, isChecked: response.data.troublebreathing },
          {id: 7, name: "Pain or pressure in the chest", value: 4, isChecked: response.data.paininchest }
        ],
        color: response.data.color,
        severitydb: response.data.severity
      });
      console.log("severityDB: " + this.state.severitydb)
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

  updateSymptoms = () => {
    axios.post("/api/symptoms", this.state).then(res => {
      console.log(res.data.severity);
      this.setState({severitydb: res.data.severity});
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
    this.setState({ severityLevel: severityLevel });
    this.updateSymptoms();
  };

  render() {
    return (
      <div id="componentBody" style={{ paddingTop: 25 }}>
        <Grid textAlign="center">
          <Grid.Row>
            <Header as="h1" style={{ marginLeft: 100, marginTop: 10, fontSize: 40 }}>
              Symptom Tracker
            </Header>
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

        <Divider />


        <Grid columns={2} divided responsive="true" stackable>
          <Grid.Row>
            <Grid.Column width={4} className="componentcolumns">
              <Header style={{ marginTop: 5, }} color="orange" as="h2">
                COVID-19 realted symptoms
              </Header>
              <Header as="h4">
                Mark your symptoms below
              </Header>
              <Card style={{ width: "auto" }} >
                <Card.Content style={{ width: "100%" }}>
                  <div id="checkboxlist">
                    <ul style={{ paddingLeft: "20px" }}>
                      {this.state.userSymptoms.map((symptom, index) => {
                        return (
                          <CheckBox style={{ fontSize: 50 }}
                            className="checkMarkContainer"
                            key={index}
                            handleCheckBox={this.handleCheckBox}
                            {...symptom}
                          />
                        );
                      })}
                    </ul>
                  </div>
                  <br/>
                  <Button
                    type="submit"
                    content="Submit"
                    onClick={this.handleSubmit}
                  />
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column className="componentcolumns" id="recomendations">
              <Header style={{ marginTop: 5 }} color="orange" textAlign="center" as="h2">Recomendations</Header>
              <Recomendations severity={this.state.severitydb}/>
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
