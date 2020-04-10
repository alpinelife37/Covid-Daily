import React, { Component } from "react";
import { Container, Divider, Statistic } from "semantic-ui-react";
import CurrentDate from "../date";
import Chart from "../pages/Chart";
const axios = require("axios");

const date = CurrentDate();

class CovidSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      country_name: "USA",
      total_cases: "",
      new_cases: "",
      active_cases: "",
      total_deaths: "",
      new_deaths: "",
      total_recovered: "",
      serious_critical: "",
      region: null,
      total_cases_per1m: "",
      record_date: "",
      record_day: ""
    };
  }
  componentWillReceiveProps(nextProps) {
    //console.log("nextProps", nextProps)
    this.setState({ country_name: nextProps.value }, () =>
      axios({
        url:
          "https://coronavirus-monitor.p.rapidapi.com/coronavirus/history_by_particular_country_by_date.php?country=" +
          this.state.country_name +
          "&date=" +
          date,
        method: "GET",
        headers: {
          "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
          "x-rapidapi-key":
            "2053485844mshcfbaee287004834p147101jsnc9bd5f5866a2",
        },
      })
        .then((response) => {
          console.log(response.data);
          const obj = response.data;
          const last = obj.stat_by_country.length - 1;
          const currentData = obj.stat_by_country[last];
          const convertedtime = new Date(
            currentData.record_date
          ).toLocaleTimeString();
          //console.log(currentData);
          this.setState({
            id: currentData.id,
            country_name: currentData.country_name,
            total_cases: currentData.total_cases,
            new_cases: currentData.new_cases,
            active_cases: currentData.active_cases,
            total_deaths: currentData.total_deaths,
            new_deaths: currentData.new_deaths,
            total_recovered: currentData.total_recovered,
            serious_critical: currentData.serious_critical,
            region: currentData.region,
            total_cases_per1m: currentData.total_cases_per1m,
            record_date: convertedtime,
            record_day: obj
          });
        })
        .catch((error) => {
          console.log(error);
        })
    );
  }

  // function CovidSearchByCountry () {

  // }

  componentDidMount() {

    // an API call.
    axios({
      url:
        "https://coronavirus-monitor.p.rapidapi.com/coronavirus/history_by_particular_country_by_date.php?country=" +
        this.state.country_name +
        "&date=" +
        date,
      method: "GET",
      headers: {
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "2053485844mshcfbaee287004834p147101jsnc9bd5f5866a2",
      },
    })
      .then((response) => {
        // console.log(response.data);
        const obj = response.data;
        const last = obj.stat_by_country.length - 1;
        const currentData = obj.stat_by_country[last];
        const convertedtime = new Date(
          currentData.record_date
        ).toLocaleTimeString();
        //console.log(currentData);
        this.setState({
          id: currentData.id,
          country_name: currentData.country_name,
          total_cases: currentData.total_cases,
          new_cases: currentData.new_cases,
          active_cases: currentData.active_cases,
          total_deaths: currentData.total_deaths,
          new_deaths: currentData.new_deaths,
          total_recovered: currentData.total_recovered,
          serious_critical: currentData.serious_critical,
          region: currentData.region,
          total_cases_per1m: currentData.total_cases_per1m,
          record_date: convertedtime,
          record_day: obj
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <Container text >
        <Statistic.Group size="small" style={{ fontSize: 14 }} >
          <Statistic style={{ width: "100%" }} >
            <Statistic.Value >{this.state.country_name}</Statistic.Value>
            <Divider />
          </Statistic>
          <div style={{width: "100%", textAlign: "center",}}>
            <Statistic>
              <Statistic.Value><strong>{this.state.total_cases}</strong></Statistic.Value>
              <br/>
              <Statistic.Label><i>Total Cases</i></Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value><strong>{this.state.new_cases}</strong></Statistic.Value>
              <br/>
              <Statistic.Label><i>New Cases Today</i></Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value><strong>{this.state.total_deaths}</strong></Statistic.Value>
              <br/>
              <Statistic.Label><i>Total Deaths</i></Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value><strong>{this.state.new_deaths}</strong></Statistic.Value>
              <br/>
              <Statistic.Label><i>New Deaths Today</i></Statistic.Label>
            </Statistic>
          </div>

          {/* <Statistic>
            <Statistic.Value>{this.state.record_date}</Statistic.Value>
            <Statistic.Label><i>- Last Updated</i></Statistic.Label>
          </Statistic> */}
        </Statistic.Group>
        <Divider />
        <br/>


        {/* <p>active_cases: {this.state.active_cases} </p>
        <p>total_recovered: {this.state.total_recovered} </p>
        <p>serious_critical: {this.state.serious_critical} </p>
        <p>region: {this.state.region} </p>
        <p>total_cases_per1m: {this.state.total_cases_per1m} </p> */}
        <Chart dayrecord={this.state.record_day} />
      </Container>
    );
  }
}

// API key 0d7e71ff7ddd480b83368a04bb626671

export default CovidSearch;
