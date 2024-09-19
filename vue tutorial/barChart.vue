<template>
    <div id="chart-container" style="height: 90%; width: 90vw;">
      <canvas id="myChart"></canvas>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import Chart from 'chart.js/auto';
  
  const chartData = ref({
    labels: ["CHASISS-2 (Liniya-1)", "IP SUB (Liniya-2)", "UNDER BODY (COMMON) (Body Shop 1)", "M/P (Body Shop 2)", "FRONT HORIZONTAL MODULE (Liniya-1)", "DOOR SUP (Liniya-1)", "CHASSIS-1 (Liniya-1)", "FRONT VERTICAL (Liniya-2)", "TRIM-2 (Liniya-2)", "FINAL-2 (Liniya-2)"],
    datasets: [
      {
        order: 2,
        data: [76, 56, 45, 40, 34, 31, 27, 25, 24, 16],
        backgroundColor: ["#FFA500"],
      },
    ],
  });
  
  const chartOptions = ref({
    indexAxis: 'y',
    plugins: {
      title: {
        display: false,
        text: 'Top 10 muammolarni hududlarni reytingi (muammmolarni soniga nisbatan)',
        font: {
            size: 20,
            weight: 500,
            color: 'grey'
        }
      },
      legend: {
        display: false,
    },
      datalabels: {
        color: 'black',
        anchor: 'end',
        align: 'end'
      }
    },
    scales: {
      y: {
        grid: {
          display: false,
        }
      }
    }
  });
  
  onMounted(() => {
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: chartData.value,
      options: chartOptions.value
    });
  });
  </script>
  































<!-- 
<template>
    <div id="chart-container" style="width: 100%; height: 300px;">
      <Bar :data="chartData" :options="chartOptions" />
    </div>
  </template>
  

<style scoped>
#chart-container {
  width: 100%;
  height: 400px;  /* Adjust the height as needed */
}
</style>


  <script setup lang="ts">
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
    BarController,
  } from "chart.js";
  import { Bar } from "vue-chartjs";
  import { reactive } from 'vue';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    BarController
  );
  
  const chartData = reactive({
    labels: ["CHASISS-2 (Liniya-1)", "IP SUB (Liniya-2)", "UNDER BODY (COMMON) (Body Shop 1)", "M/P (Body Shop 2)", "FRONT HORIZONTAL MODULE (Liniya-1)", "DOOR SUP (Liniya-1)", "CHASSIS-1 (Liniya-1)", "FRONT VERTICAL (Liniya-2)",  "TRIM-2 (Liniya-2)",   "FINAL-2 (Liniya-2)", ],
    datasets: [
      {
        order: 2,
        data: [76, 56, 45, 40, 34, 31, 27, 25, 24, 16, ],
        backgroundColor: [
          "#FFA500",
        ],
      },
    ],
  });
  
  const chartOptions = reactive({
    indexAxis: 'y',  // This makes the chart horizontal
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        display: true,
      },
      title: {
        display: true,
        text: 'Horizontal Bar Chart',
      },
    },
    scales: {
      y: {
        grid: {    
          offset: false,
          display: false,
        }
      }
    },
    plugins: {    
      legend: {
        display: false,
      },
      datalabels: {
        color: 'black',
        anchor: 'end',
        align: 'end'
      }
    }
  });
  </script> -->






  