import React from "react";
import CanvasJSReact from "../../chart/canvasjs.react";
import axios from "axios";
import { Button, Segment, Dimmer, Loader } from "semantic-ui-react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class Chart extends React.Component {
  constructor() {
		super();
		this.getTotalData = this.getTotalData.bind(this);
	}
  state = {
    data: null,
    countryname: "USA",
  };

  handleState(name) {
    this.setState({countryname: name})
  }

  getTotalData() {
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
              console.log(response)
              let resData = []
              response.data.stat_by_country.forEach((caseCount, i) => {
                resData.push({ x: new Date(caseCount.record_date), y: parseInt(caseCount.total_cases.replace(/,/g, ''))});
              });
              this.setState({data: resData});
              this.chart.render();
            })
  };

  getDailyData() {
    this.state.data = [];
    const dayLog = this.props.dayrecord.stat_by_country;
    const dataName = (dayLog[0].country_name);
    this.handleState(dataName);
    dayLog.forEach((caseCount, i) => {
      this.state.data.push({ x: new Date(caseCount.record_date), y: parseInt(caseCount.total_cases.replace(/,/g, ''))});
    });
  }

  adjustForTimezone(date){
    var timeOffsetInMS = date.getTimezoneOffset() * 60000;
    date.setTime(date.getTime() - timeOffsetInMS);
    return date
}

  componentWillReceiveProps(dayrecord) {
    this.state.data = [];
    console.log(dayrecord);
    const dayLog = dayrecord.dayrecord.stat_by_country;
    const dataName = (dayLog[0].country_name);
    console.log(new Date(dayLog[0].record_date).toDateString());
    console.log(new Date(dayLog[0].record_date).getTimezoneOffset());
    
    this.handleState(dataName);
    dayLog.forEach((caseCount, i) => {

      const currentDate = this.adjustForTimezone(new Date(caseCount.record_date))

      this.state.data.push({ x: currentDate, y: parseInt(caseCount.total_cases.replace(/,/g, ''))});
    });
    console.log(this.state.data);
    // console.log(dayrecord);
  }

  render() {
    const options = {
      animationEnabled: true,
      axisX:{      
        valueFormatString: "" ,
    },
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
    if (!this.state.data) {
      return (
        <Segment style={{height: 200}}>
          <Dimmer active inverted>
            <Loader size="massive">Loading</Loader>
          </Dimmer>
        </Segment>
      );
    }
    return (
      <div style={{textAlign: "center"}}>
        <CanvasJSChart
          options={options}
          onRef={ref => this.chart = ref}
        />
        <br/>
        {/* <Button
        content="Total History"
        onClick={()=> this.getTotalData()}
        // onRef={ref => this.chart = ref}
        />
        <Button
        content="Daily History"
        onClick={()=> this.getDailyData()}
        // onRef={ref => this.chart = ref}
        /> */}
      </div>
    );
  }
}
