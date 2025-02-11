import React, { useEffect, useState } from 'react';
import Chart from 'react-google-charts';

const LineChart = ({ Historical }) => {
  const [Data, SetData] = useState([["Date", "Prices"]]);

  useEffect(() => {
    let DataCopy = [["Date", "Prices"]];
    if (Historical && Historical.prices) {
      Historical.prices.map((item) => {
        // Ensure correct string interpolation and date formatting
        DataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0, -5)}`, item[1]]);
      });
      SetData(DataCopy);
    }
  }, [Historical]);

  return (
    <Chart
      chartType="LineChart"
      data={Data}
      height="100%"
      legendToggle
    />
  );
};

export default LineChart;
