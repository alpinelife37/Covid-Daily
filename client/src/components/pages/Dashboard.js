import React, { Component } from "react";
import 'pure-react-carousel/dist/react-carousel.es.css';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Header, Segment, Divider, Grid, Icon, Card } from "semantic-ui-react";
import DropdownCountrySearchSelection from "../layout/Countrydropdown";
import News from "../news";
import CovidSearch from "../covid_api";
import GetCountryCodes from "../countrycodes";
import MyMap from "../test";
// import Chart from "./Chart";

const countryCodes = GetCountryCodes();

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'USA',
      countrycode: "us"
    };

    this.handleChange = this.handleChange.bind(this);

  }

  convertCountry(country) {
    let twodigitcode = "USA";
    for (const property in countryCodes) {
      //console.log(`${property} = ${countryCodes[property]}`);
      twodigitcode = `${countryCodes[property]}`;
      if (`${property}` === country) {
        break;
      }
    }
    //console.log("Twodigit code:" + twodigitcode);
    return twodigitcode;
  }

  handleChange(event) {
    
    this.setState({ value: event.target.innerText});
    this.setState({countrycode: this.convertCountry(event.target.innerText)});
    
  }

  render() {
    const { user } = this.props.auth;
    
    return (
      <div id="componentBody" style={{ paddingTop: 25 }}>
        <Grid textAlign="center">
          <Grid.Row>
            <Header
              as="h1"
              style={{ marginLeft: 100, marginTop: 10, fontSize: 40 }}
            >
              Dashboard
            </Header>
            <Grid.Column verticalAlign="middle" floated="right" width={10}>
              <Segment style={{ minWidth: 300 }}>
                <Grid>
                  <Header style={{ paddingTop: 22 }}>Select a Country: </Header>
                  <Grid.Column style={{ paddingLeft: 0}} width={5} floated="left">

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

        <Grid columns={2} divided stackable>
          <Grid.Row style={{backgroundColor: "#F8F8FF"}}>
            <Grid.Column width={4} className="componentcolumns">
              <Header style={{ marginTop: 5 }} color="orange" as="h1">
                Latest News
              </Header>
              {/* <Card style={{ padding: 10, width: 550 }}> */}
                <News
                country={this.state.countrycode}
                />
              {/* </Card> */}
            </Grid.Column>
            <Grid.Column  className="componentcolumns" id="recomendations">

              <CovidSearch 
                value={this.state.value}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <br/>
        <br/>
        <Divider/>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Header as="h1" textAlign="center" content="World Data"/>
              <MyMap />
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

