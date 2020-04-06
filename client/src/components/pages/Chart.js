import React from 'react';
import CanvasJSReact from "../../chart/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class Chart extends React.Component {	
    render() {
      console.log(this.props.dayrecord.stat_by_country);
      const options = {
        title: {
          text: "Basic Column Chart in React"
        },
        data: [{				
                  type: "column",
                  dataPoints: [
                      { label: "Apple",  y: 10  },
                      { label: "Orange", y: 15  },
                      { label: "Banana", y: 25  },
                      { label: "Mango",  y: 30  },
                      { label: "Grape",  y: 28  }
                  ]
         }]
     }
          
     return (
        <div>
          <CanvasJSChart options = {options}
              /* onRef = {ref => this.chart = ref} */
          />
        </div>
      );
    }
  }