<template>
    <div>
      <Bar :data="chartData" :options="chartOptions" />
    </div>
  </template>
  
  <script setup>
  import { Bar } from 'vue-chartjs';
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, scales, Ticks } from 'chart.js';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  function months(count) {
    const months = ['UNDER BODY (COMMON) (Body Shop 1) ', 
                    'CHASSIS-1 (Liniya-1)', 
                    'DOOR SUB (Liniya-1)', 
                    'FRONT HORIZONTAL MODULE (Liniya-1)', 
                    'IP SUB (Liniya-2)', 
                    'FRONT VERTICAL (Liniya-2)',
                    'IP SUB (Liniya-2)',
                    'M/P (Body-Shop-2)',
                    'CHASSIS-2 (Liniya-1)',
                    'FINAL-1 (Liniya-1)',
                    'TRIM-1 (Liniya-2)',

                ];
    return months.slice(0, count);
  }
  
  function numbers(config) {
    const { count, max } = config;
    return Array.from({ length: count }, () => Math.floor(Math.random() * max));
  }
  
  const DATA_COUNT = 10;
  const NUMBER_CFG = { count: DATA_COUNT, max: 100 };
  
  const chartData = {
    labels: months(10),
    datasets: [
        {
        label: 'Bartaraf etilmagan muammmolar soni',
        data: [89, 86, 85, 81, 79, 75, 71, 68, 59, 55],
        backgroundColor: '#FF0000',
      },
      {
        label: 'Barcha bartaraf etilgan muammolar soni',
        data: [10, 12.7, 13.6, 17.3, 18.9, 22.6, 26.3, 28.7, 36.9, 40.5],
        backgroundColor: '#08B255',
      },
      {
        label: 'Kamchiliklarni bartaraf etish reytingi',
        data: [1.0 , 1.3 , 1.4, 1.7, 2.1 , 2.4, 2.7, 3.3, 4.1 , 4.5],
        backgroundColor: '#D9D9D9',
      },
      
    ],
  };
  
  const chartOptions = {
    indexAxis: 'y',
    plugins: {
      chartDataLabels: {
        display: true,
        position: 'top',
      },
      legend: {
        position: 'bottom',
      },
      
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };
  </script>