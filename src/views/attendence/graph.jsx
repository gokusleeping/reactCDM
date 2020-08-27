/* Graph.js */
import "./canvasjs.min.js";
import "./canvasjs.react.js";
import CanvasJSReact from './canvasjs.react';
var React = require('react');
var Component = React.Component;
//var CanvasJSReact = require('./canvasjs.react');
//var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Graph extends Component {
	render() {
		const options = {
			theme: "light2",
			title: {
				text: "This Month Student Attendence	"
			},
			subtitles: [{
				text: "classname/month"
			}],
			axisX:{
				interval: 1,
				intervaltype:"day",
			},
			axisY: {
				interval:2,
			},
			toolTip: {
				shared: true
			},
			data: [
			{
				type: "area",
				name: "Present",
				showInLegend: true,
				xValueFormatString: "MMM YYYY",
				yValueFormatString: "#",
				dataPoints: [
					{ x: new Date("2017- 01- 01"), y: 35},
					{ x: new Date("2017- 02- 01"), y: 32},

				]
			},
			{
				type: "area",
				name: "Absent",
				showInLegend: true,
				xValueFormatString: "MMM YYYY",
				yValueFormatString: "#",
				dataPoints: [
					{ x: new Date("2017- 01- 01"), y: 5},
					{ x: new Date("2017- 02- 01"), y: 8},

				]
			}
			]
		}
		return (
			<div>
				<CanvasJSChart options = {options}
						/* onRef={ref => this.chart = ref} */
				/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
			</div>
		);
	}
}
//module.exports = Graph;  
export default Graph;