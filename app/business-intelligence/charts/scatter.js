import {  Scatter } from 'react-chartjs-2';
function ScatterChart({}){
    const data = {
        datasets: [{
          label: 'Scatter Dataset',
          data: [{
            x: -10,
            y: 0
          }, {
            x: 0,
            y: 10
          }, {
            x: 10,
            y: 5
          }, {
            x: 0.5,
            y: 5.5
          }],
          backgroundColor: 'rgb(255, 99, 132)'
        }],
      };
    return(
        <Scatter data={data}/>
    )
}
export default ScatterChart;