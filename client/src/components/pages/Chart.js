import React from "react";
import CanvasJSReact from "../../chart/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class Chart extends React.Component {
  state = {
    data: [],
  };
  componentWillReceiveProps(dayrecord) {
    this.state.data = [];
    const dayLog = dayrecord.dayrecord.stat_by_country;
    console.log(dayLog[0].record_date);
    dayLog.forEach((caseCount, i) => {
      this.state.data.push({ x: Number(i), y: parseInt(caseCount.total_cases.replace(/,/g, ''))});
    });
    console.log(this.state.data);
    console.log(dayrecord);
  }

  render() {
    const options = {
      animationEnabled: true,
      title: {
        text: "daily data",
      },
      axisY: {
        title: "Total deaths",
        includeZero: false,
      },
      data: [
        {
          type: "spline",
          dataPoints: this.state.data,
        },
      ],
    };
    return (
      <div>
        <CanvasJSChart
          options={options}
        />
      </div>
    );
  }
}
