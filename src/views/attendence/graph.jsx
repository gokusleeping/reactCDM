import React from 'react'
//import "react-charts/dist/react-charts.min.mjs"
import { Chart } from 'react-charts'
//import useChartConfig from 'hooks/useChartConfig'
//import Box from "/components/Box"
//import SyntaxHighlighter from 'components/SyntaxHighlighter'
//let sourceCode
//export default Mychart () => {
  
function MyChart() {
    const data = React.useMemo(
      () => [
        {
          label: 'Series 1',
          data: [
            { primary: 1, secondary: 3 },
            { primary: 2, secondary: 5 },
            { primary: 4, secondary: 6 },
          ],
        },
        {
          label: 'Series 2',
          data: [
            { primary: 1, secondary: 4 },
            { primary: 2, secondary: 8 },
            { primary: 3, secondary: 7 },
          ],
        },
        
      ],
      []
    )
  const series = React.useMemo(
    () => ({
      showPoints: "true",
      //type: 'area'
    }),
    []
  )
    const axes = React.useMemo(
      () => [
        { primary: true, type: 'linear', position: 'bottom' },
        { type: 'linear', position: 'left' },
      ],
      []
    )
  
    return (
      <div
        style={{
          width: '400px',
          height: '300px',
        }}
      >
        <Chart data={data} axes={axes} series={series}
        tooltip primaryCursor secondaryCursor />
      </div>
    )
  }
  export default MyChart