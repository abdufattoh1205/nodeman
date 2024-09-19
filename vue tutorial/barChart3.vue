<template>
    <div>
      <Bar :data="chartData" :options="chartOptions" />
    </div>
  </template>
  
  <script setup>
  import { plugins } from "chart.js";
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
    scales,
    Ticks,
  } from "chart.js";
  
  import { Bar } from "vue-chartjs";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  function months(count) {
    const months = ['BDP o\'lchovlari togrimi va o\'z vaqtida nazorat qilinyaptmi, tekshiring', 
                    'ANDON taxlili va ma\'lumotlarini tekshiring.', 
                    'Brigadirlar Grafikka asosan KPA ni o\'z vaqtida o\'tkazilganligni tekshiring', 
                    'FIFO ga muvofiqligini tekshiring.', 
                    'Asboblar by-pass insturmentlari AIR-TOOL, TORQUE, WRENCH holatini, tiplarini tekshiring. ', 
                    'SOS/JES va nosiklik ishlar uchun TIS larning barcha qismlari (sturkturasi) to\'gri tuzilganmi? SOS, STS, TIS hujjatlar ga to\'griligi  bo\'tyicha muxr qoyilganmi?'];
    return months.slice(0, count);
  }

  function numbers(config) {
  const { count, max } = config;
  return Array.from({ length: count }, () => Math.floor(Math.random() * 10 ));
}
  
//   function numbers(config) {
//     // Logic to generate random numbers here
//     const { count, max } = config;
//     return Array.from({ length: count }, () => 2 * max);
//   }
  
  const DATA_COUNT = 6;
  const NUMBER_CFG = { count: DATA_COUNT, max: 100 };
  
  const chartData = {
    labels: months(7), // Assuming months function takes count as argument
    datasets: [
      {
        label: 'Q070',
        data: [3, 2, 32, 4, 2, 2 ], // Assuming numbers function takes config
        borderColor: 'red', // Assuming Utils.CHART_COLORS is not needed
        backgroundColor: '#5B9BD5', // Transparently red
      },
      {
        label: 'A700',
        data: [4, 2, 20, 1, 5, 3],
        borderColor: 'gray',
        backgroundColor: '#FFC000', // Transparently blue
      },
      {
        label: 'M714',
        data: [9, 1, 7, 3, 5, 8,],
        borderColor: 'blue',
        backgroundColor: '#A5A5A5', // Transparently blue
      },
      {
        label: 'B701',
        data: [6, 2, 13, 1, 3, 5],
        borderColor: 'blue',
        backgroundColor: '#ED7D31', // Transparently blue
      },
      {
        label: '7577',
        data: [5, 1 , 8, 2, 2, 11],
        borderColor: 'blue',
        backgroundColor: '#4472C4', // Transparently blue
      },
    ],
  };
  
  
  const chartOptions = {
    indexAxis: 'y',
    scales:{
      y:{
       display: false,
      }
    },
    plugins:{
      legend:{
        position: 'bottom',        
      }
    }
   

}
  </script>
  