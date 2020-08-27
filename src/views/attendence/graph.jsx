/* App.js */
var React = require('react');
var Component = React.Component;
var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var dps = [{x: 1, y: 10}, {x: 2, y: 10}, {x: 3, y: 10}, {x: 4, y: 10}, {x: 5, y: 10}];
class Graph extends Component {
	render() {
		const options = {
			theme: "light2",
			title: {
				text: "Comparison of Exchange Rates - 2017"
			},
			subtitles: [{
				text: "GBP & USD to INR"
			}],
			axisY: {
				prefix: "₹"
			},
			toolTip: {
				shared: true
			},
			data: [
				{
					type: "line",
					dataPoints : dps
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