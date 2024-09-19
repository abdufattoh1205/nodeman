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
  
  const chartData = {
    labels: ["1", "2", "3", "4", "5"],
    datasets: [
        {
        data: [45, 35, 33, 30, 29 ],
        backgroundColor: "#4472C4",
      },
      

    ]
}

  const chartOptions = {
    responsive: true,
    indexAxis: 'y',
    scales: {
      y: {
        beginAtZero: true,
      }
    },

    plugins: {
        legend: {
            display: false,
        }
    }
  }  

</script>