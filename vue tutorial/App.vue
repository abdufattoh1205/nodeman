
<template>
  <div class="container">
    <div class="chart-container">
      <table>
          <tr class="tr"> 
          <th style="background-color: grey;">Boshlang'ich sana</th>
          <th>01.01.2023</th>
          <th style="background-color: grey">Tug'ilish sanasi</th>
          <th>01.01.2024</th>
          <th style="width: 100px; background-color: grey"></th>
          <th>All(Tsex)</th>
          <th style="width: 150px; background-color: grey;"></th>
          <th>All(Uchastka)</th>
          </tr> 
          <tr>
            <td colspan="10" class="span-td"><span class="top-10">Top 10 muammolarni hududlarni reytingi (muammolarni soniga nisbatan)</span> </td>
          </tr> 
          <tr>
            <td colspan="10">
              <BarChart />
            </td>
          </tr>  
      </table>
      <table>
          <tr class="tr"> 
          <th style="background-color: grey;">Boshlang'ich sana</th>
          <th>01.01.2023</th>
          <th style="background-color: grey">Tug'ilish sanasi</th>
          <th>01.01.2024</th>
          <th style="width: 100px; background-color: grey"></th>
          <th>All(Tsex)</th>
          <th style="width: 150px; background-color: grey;"></th>
          <th>All(muammo turi)</th>
          </tr> 
          <tr>
            <td class="title2" colspan="10"><span>TOP Muammolar</span></td>
          </tr>
          <tr>
            <td colspan="10" class="chart2">
              <BarChart2 />
            </td>
          </tr>  
          <tr>
            <td class="" colspan="10">
              <div class="subtitle">
                <p>Brigadirlar grafikka asosan KPA ni o'z vaqtida o'tkazilganligini tekshiring.</p>
                <p>SOS/JES va nosiklik ishlar uchun TIS larganing barcha qismlari (strukturasi) to'gri tuzganmi? SO, STS. TIS hujjjatlarga to'griligi bo'yicha muxr qoyilganmi</p>
                <p>BPD o'lchovlari to'grimi va o'z vaqtida nazorat qilinyaptimi tekshiring.</p>
                <p>Ish joyida 7 xil yo'qotishlarni tekshiring.</p>
                <p>Asboblar va BY-pass insturmentlari AIRTOOL,TOQRUE WRENCH holatini tiplarini tekshiring.</p>
                <p>Ishchining TPM o'tkazilganligini tekshiring.</p>
                <p>FIFIO ga muvofiqlikni tekshiring.</p>
                <p>MIN/MAX holatini va detallarini joyga sig\'ishni tekshiring.</p>
                <p>AND ON taxlili va ma'lumotlarni tekshiring.</p>
                <p>Taralarni loyihalash, tanlash, birkalash hamda 1738 jarayonini tekshiring.</p>
              </div>
              </td>
          </tr>  
      </table>
      <table>
          <tr class="tr"> 
          <th style="background-color: grey;">Boshlang'ich sana</th>
          <th>01.01.2023</th>
          <th style="background-color: grey">Tug'ilish sanasi</th>
          <th>01.01.2024</th>
          <th style="width: 100px; background-color: grey"></th>
          <th>All(Tsex)</th>
          <th style="width: 150px; background-color: grey;"></th>
          <th>All(muammo turi)</th>
          </tr> 
          <tr>
            <td colspan="12"class="title3"><h3>Muammolik punktlar Auditorlar tomonidan takroriy holda aniqlanishi</h3></td>
          </tr>
          <tr class="tr2">
            <td colspan="2" class="right-side">
              <div>
                <p>BDP o'lchovlari togrimi va o'z vaqtida nazorat qilinyaptmi, tekshiring</p>
                <p>ANDON taxlili va ma'lumotlarini tekshiring.</p>
                <p>Brigadirlar Grafikka asosan KPA ni o'z vaqtida o'tkazilganligni tekshiring</p>
                <p>FIFO ga muvofiqligini tekshiring.</p>
                <p>Asboblar by-pass insturmentlari AIR-TOOL, TORQUE, WRENCH holatini, tiplarini tekshiring.</p>
                <p>SOS/JES va nosiklik ishlar uchun TIS larning barcha qismlari (sturkturasi) to'gri tuzilganmi? SOS, STS, TIS hujjatlar ga to'griligi  bo'tyicha muxr qoyilganmi?</p>
              </div>
            </td>
            <td colspan="8" class="chart3">
              <div>
                <BarChart3 />
              </div>
            </td>
          </tr> 
          <tr>
            <td colspan="12"class="title35"><h3>Muammolik punktlar Auditorlar tomonidan takroriy holda aniqlanishi</h3></td>
          </tr>
          <tr class="tr35">
            <td class="right-side35">
              <div class="column3">
                  <h1>7577</h1>
                  <h1>A700</h1>
                  <h1>M174</h1>
                  <h1>A700</h1>
                  <h1>Q070</h1>
              </div>
            </td>
            <td colspan="10" class="chart35">
              <div>
                <BarChart4 />
              </div>
            </td>
          </tr>   
          
      </table>
      <table>
          <tr class="tr"> 
          <th style="background-color: grey;">Boshlang'ich sana</th>
          <th>01.01.2023</th>
          <th style="background-color: grey">Tug'ilish sanasi</th>
          <th>01.01.2024</th>
          <th style="width: 100px; background-color: grey"></th>
          <th>All(Tsex)</th>
          <th style="width: 150px; background-color: grey;"></th>
          <th>All(muammo turi)</th>
          </tr> 
          <tr>
            <td class="title2" colspan="10"><span>Kamchiliklarni bartaraf etish bo'yicha uchastkalar reytingi</span></td>
          </tr>
          <tr>
            <td colspan="10" class="chart2">
              <BarChart5 />
            </td>
          </tr>   
      </table>
    </div>
  </div>
</template>

<script setup>
  import BarChart from './components/barChart.vue'
  import BarChart2 from './components/barChart2.vue';
  import BarChart3 from './components/barChart3.vue';
  import BarChart4 from './components/barChart3,5.vue';
  import BarChart5 from './components/barChart4.vue';
</script>

<style scoped>

.container{
  width: 1200px;
  height: 700px;
  display: flex;
  justify-content: center;
}

.chart-container{
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.tr th{
  border: 1px solid black;
}

.chart2{
  height: 600px;
  margin: 0 auto;
}

.chart3{
  height: 300px;
  margin: 0 auto;
}

.chart3 div{
  margin-top: 40px;
  width: 100%;
  display: flex; 
  justify-content: end; 
  align-items: baseline
}

.tr{
  height: 50px;
}


table{
  border: 1px solid black;
  margin-left: -30px;
  width: 1200px;
  margin: 0 auto;
  padding-bottom: 30px;
  margin-top: 30px;
}

.top-10{
  font-weight: 400;
  width: 100%;

}

.span-td{
  text-align: center;
}

.title2 span{ 
  font-weight: 500;
}

.title2{
  text-align: center;
}

.subtitle{
  width: 95%;
  display: flex;
  align-items: top;
  margin-top: -50px;
  margin-left: 80px;
}

.subtitle p{
  font-size: 13px;
  width: 8%;
  text-align: center;
}

.subtitle p:last-child{
  margin-left: 10px;
}

.right-side p{
  font-size: 13px;
  margin-top: 18px;
  text-align: end;
  
}

/* .right-side div{
  margin-top: -262px;
} */

.title3{
  text-align: center;
}

.title3 h3{
  margin-top: 10px;
  margin-bottom: -30px;
}

.title35{
  text-align: center;
}

.title3 h3{
  margin-top: 10px;
  margin-bottom: -30px;
  color: #5F5959;
}

.column3 h1{
  font-size: 40px;
  margin-top: 20px;
  color: #716A6A;
}

.column3 h1::after{
  content: '';
  width: 120px;
  height: 2px;
  background-color: #ABA1A1;
  position: absolute;
  left: 11%;
  margin-top: 60px
}


.column3{
  margin-top: -40px;
  text-align: center;
}

.chart35{
  width: 400px;
}

</style>