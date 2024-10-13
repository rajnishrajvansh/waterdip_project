// src/components/AdultVisitorsSparkline.tsx
import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface AdultVisitorData {
  date: string; 
  adults: number;
}

interface SparklineChartProps {
  data: AdultVisitorData[]; 
  totalAdults: number;
}

const AdultVisitorsSparkline = ({ data, totalAdults }: SparklineChartProps) => {
  const options: ApexOptions = {
    chart: {
      type: 'area',
      height: 160,
      sparkline: { enabled: true },
    },
    stroke: {
      curve: 'smooth', 
    },
    fill: {
      opacity: 0.3,
    },
    yaxis: {
      min: 0,
    },
    colors: ['#DCE6EC'],
    title: {
      text: `${totalAdults}`, 
      offsetX: 0,
      style: {
        fontSize: '24px',
      },
    },
    subtitle: {
      text: 'Total Adult Visitors',
      offsetX: 0,
      style: {
        fontSize: '14px',
      },
    },
    xaxis: {
      categories: data.map(item => item.date),
    },
  };

  const series = [
    {
      name: 'Adults',
      data: data.map(item => item.adults), 
    },
  ];

  return <Chart options={options} series={series} type='area' />;
};

export default AdultVisitorsSparkline;