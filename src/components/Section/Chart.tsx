'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

// Dynamically import to prevent SSR issues
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });


const Chart = () => {
    const series = [
      {
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ];
  
    const options: ApexOptions = {
      chart: {
        height: 350,
        type: 'area', // TypeScript will accept this because we used ApexOptions
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2018-09-19T00:00:00.000Z',
          '2018-09-19T01:30:00.000Z',
          '2018-09-19T02:30:00.000Z',
          '2018-09-19T03:30:00.000Z',
          '2018-09-19T04:30:00.000Z',
          '2018-09-19T05:30:00.000Z',
          '2018-09-19T06:30:00.000Z',
        ],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
    };
  
    return (
      <div>
        <ReactApexChart options={options} series={series} type="area" height={350} />
      </div>
    );
  };

export default Chart;
