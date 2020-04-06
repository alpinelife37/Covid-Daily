import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Header, Segment, Divider, Grid, Icon, Card } from "semantic-ui-react";
import DropdownCountrySearchSelection from "../layout/Countrydropdown";
import News from "../news";
import CovidSearch from "../covid_api";
// import Chart from "./Chart";

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = { value: 'USA' };

    this.handleChange = this.handleChange.bind(this);

  }
  handleChange(event) {
    this.setState({ value: event.target.innerText }, () => 
    console.log("Country Name: " + this.state.value));
 }
  

    render() {
      const { user } = this.props.auth;

      return (
        <div id="symptomsBody" style={{ paddingTop: 25 }}>
          <Grid textAlign="center">
            <Grid.Row>
              <Header
                as="h1"
                style={{ marginLeft: 100, marginTop: 10, fontSize: 40 }}
              >
                Dashboard
            </Header>
              <Grid.Column floated="right" width={10}>
                <Segment>
                  <Grid>
                    <Grid.Column width={5} floated="left">
                      <DropdownCountrySearchSelection
                        selectHandler={this.handleChange}
                        value={this.state.value}
                      />
                    </Grid.Column>
                    <Grid.Column verticalAlign="middle" width={5}>
                      <Header>
                        <Icon name="user" />
                        {" " + user.name}
                      </Header>
                    </Grid.Column>
                  </Grid>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Divider />

          <Grid columns={2} divided responsive="true" stackable>
            <Grid.Row>
              <Grid.Column width={4} className="symptomcolumns">
                <Header style={{ marginTop: 5 }} color="orange" as="h2">
                  Latest News
              </Header>
                <Card style={{ width: "auto" }}>
                  <News 
                  
                  />
                </Card>
              </Grid.Column>
              <Grid.Column className="symptomcolumns" id="recomendations">
                <Header
                  style={{ marginTop: 5 }}
                  color="orange"
                  textAlign="center"
                  as="h2"
                >
                  Data:
              </Header>
                <CovidSearch
                  value={this.state.value}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      );
    }
  }

  Dashboard.propTypes = {
    auth: PropTypes.object.isRequired,
  };

  const mapStateToProps = (state) => ({
    auth: state.auth,
  });

  export default connect(mapStateToProps)(Dashboard);
