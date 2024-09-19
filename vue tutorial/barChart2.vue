<template>
    <div style="height: 100%; width: 90vw; padding: 20px;">
      <Bar style="width: 95%; height: 95%; margin: 0 auto;" :data="chartData" :options="chartOptions" />
    </div>
  </template>
  
  <script setup lang="ts">
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
  
  const bllue = '#4472C4';
  
  const chartData = {
    labels: ['Brigadirlar grafikka asosan KPA ni o\'z vaqtida o\'tkazilganligini tekshiring.', 
             'SOS/JES va nosiklik ishlar uchun TIS larganing barcha qismlari (strukturasi) to\'gri tuzganmi? SO, STS. TIS hujjjatlarga to\'griligi bo\'yicha muxr qoyilganmi', 
             'BPD o\'lchovlari to\'grimi va o\'z vaqtida nazorat qilinyaptimi tekshiring.', 
             'Ish joyida 7 xil yo\'qotishlarni tekshiring.', 
             'Asboblar va BY-pass insturmentlari AIRTOOL,TOQRUE WRENCH holatini tiplarini tekshiring.', 
             'Ishchining TPM o\'tkazilganligini tekshiring', 
             'FIFIO ga muvofiqlikni tekshiring.', 
             'MIN/MAX holatini va detallarini joyga sig\'ishni tekshiring.', 
             'AND ON taxlili va ma\'lumotlarni tekshiring.',
             'Taralarni loyihalash, tanlash, birkalash hamda 1738 jarayonini tekshiring.',
            ],
    title: "My First Dataset",
    datasets: [
      {
        label: "My First Dataset",
        data: [80, 29, 27, 21, 17, 13, 11, 11, 8, 5],
        backgroundColor: ['#4472C4'],
      },
    ],
  };
  
  const chartOptions = {
    plugins: {
      legend: {
        display: true,
        align: 'center',
        position: 'right',
      },
    },
    scales: {
      x: {
        display: false,
    },
    y: {
      maxBarPercentage: 30,
    }
  }}
  

  </script>
  