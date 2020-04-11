import React from "react";
import CanvasJSReact from "../../chart/canvasjs.react";
import axios from "axios";
import { Button } from "semantic-ui-react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class Chart extends React.Component {
  constructor() {
		super();
		this.getWeeklyData = this.getWeeklyData.bind(this);
	}
  state = {
    data: [],
    countryname: "USA"
  };

  // handleData() {
  //   this.setState({data: name})
  // };

  handleState(name) {
    this.setState({countryname: name})
  }

  getWeeklyData() {
          this.setState({data: []})
       
            axios({
              url:
                "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_particular_country.php",
              method: "GET",
              headers: {
                "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
                "x-rapidapi-key": "1e604574f3msh5f2b072afbe3555p1f4ebajsn89dc88914d1d",
              },"params":{
                "country": this.state.countryname 
                }
            }).then((response) => {
              console.log(this.state.countryname)
              console.log(response)
              response.data.stat_by_country.forEach((caseCount, i) => {
                this.state.data.push({ x: Number(i), y: parseInt(caseCount.total_cases.replace(/,/g, ''))});
                console.log(this.state.data)
              });
              this.chart.render();
            })

  };

  componentWillReceiveProps(dayrecord) {
    this.state.data = [];
    console.log(dayrecord);
    const dayLog = dayrecord.dayrecord.stat_by_country;
    const dataName = (dayLog[0].country_name);
    // console.log(dayLog[0].country_name);
    this.handleState(dataName);
    dayLog.forEach((caseCount, i) => {
      this.state.data.push({ x: Number(i), y: parseInt(caseCount.total_cases.replace(/,/g, ''))});
    });
    // console.log(this.state.data);
    // console.log(dayrecord);
  }

  render() {
    const options = {
      animationEnabled: true,
      // title: {
      //   text: "Total Cases",
      // },
      axisY: {
        title: "Total Cases",
        includeZero: false,
      },
      data: [
        {
          type: "spline",
          dataPoints: this.state.data,
        },
      ],
    };
    console.log(options.data)
    return (
      <div>
        <CanvasJSChart
          options={options}
          onRef={ref => this.chart = ref}
        />
        <Button
        content="Total History"
        onClick={()=> this.getWeeklyData()}
        onRef={ref => this.chart = ref}
        />
      </div>
    );
  }
}
