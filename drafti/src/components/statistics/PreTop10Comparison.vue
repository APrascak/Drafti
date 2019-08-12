<template>
  <div class="my-container">
    <div id="content">
      <h1 class="center"><router-link class="white-text" :to="{ name: 'Home' }">Drafti</router-link></h1>
      <div class="divider"></div>
      <div id="navrow" class="row">
        <span><router-link class="white-text" :to="{ name: 'MockDraft' }">Mock Draft</router-link></span>
        <span><router-link class="white-text" :to="{ name: 'Statistics' }">Statistics</router-link></span>
        <span v-if="user"><router-link class="white-text" :to="{ name: 'Landing' }">{{ user.user_email }}</router-link></span>
        <span><a href="#" class="white-text" @click="logout">Logout</a></span>
      </div>
      <div class="row">
        <div class="col m6 l6 offset-m3 offset-l3">
          <div class="card-panel hoverable">
            <h4>Pre-Season Top 10 Comparison</h4>
            <div class="divider" id="top10-div"></div>
            <div id="wr-analysis">
              <p>ESPN recently released their <a href="https://www.espn.com/fantasy/football/story/_/id/25759239/fantasy-football-2019-updated-top-200-ppr-rankings-matthew-berry">Top 200 Fantasy Players for 2019</a> as of Sunday, August 11.
                The chart below responsively displays the current top 10 wide receivers for 2019. Selecting a players name will toggle removing/adding their information from the chart.
                Here are the 2019 rankings:
              </p>
              <div class="row">
                <div class="col m6 l6">
                  <ul>
                    <li>WR1: Davante Adams</li>
                    <li>WR2: DeAndre Hopkins</li>
                    <li>WR3: Odell Beckham Jr.</li>
                    <li>WR4: Julio Jones</li>
                    <li>WR5: Michael Thomas</li>
                  </ul>
                </div>
                <div class="col m6 l6">
                  <ul>
                    <li>WR6: JuJu Smith-Schuster</li>
                    <li>WR7: Tyreek Hill</li>
                    <li>WR8: Mike Evans</li>
                    <li>WR9: Keenan Allen</li>
                    <li>WR10: T.Y. Hilton</li>
                  </ul>
                </div>
              </div>
            </div>
            <div id="chartWR"></div>
            <p>Here are the rankings for the top 10 runnings backs of 2019, as listed by ESPN.</p>
            <div class="row">
              <div class="col m6 l6">
                <ul>
                  <li>RB1: Saquon Barkley</li>
                  <li>RB2: Christian McCaffrey</li>
                  <li>RB3: Alvin Kamara</li>
                  <li>RB4: David Johnson</li>
                  <li>RB5: Ezekiel Elliott</li>
                </ul>
              </div>
              <div class="col m6 l6">
                <ul>
                  <li>RB6: Todd Gurley II</li>
                  <li>RB7: Joe Mixon</li>
                  <li>RB8: Nick Chubb</li>
                  <li>RB9: Josh Jacobs</li>
                  <li>RB10: Damien Williams</li>
                </ul>
              </div>
            </div>
            <div id="chartRB"></div>
          </div>
        </div>
      </div>
    </div>
    <img src="../../assets/Background-PaintedField.jpg">
  </div>
</template>

<script type="text/javascript">
  import slugify from 'slugify'
  import db from '@/firebase/init'
  import firebase from 'firebase'
  import ApexCharts from 'apexcharts'

  import ff2018 from '@/assets/2018yearlyFF.json'

  export default {
    name: 'Top10Comparison',
    data() {
      return {
        user: null,
        stat2018: ff2018,
        names: [],
        scores: []
      }
    },
    methods: {
      logout() {
        firebase.auth().signOut().then(() => {
          this.$router.push({ name: 'Landing' })
        })
      }
    },
    created() {
      let ref = db.collection('users')

      // Get the current user.
      ref.where('user_id', '==', firebase.auth().currentUser.uid).get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.user = doc.data(),
          this.user.id = doc.id
          console.log(this.user)
        })
      })
    },
    mounted() {
      M.AutoInit()

      var i
      ff2018.forEach((player) => {
        player.Yr = 2018
        for (i = 0; i < player.Player.length; i++) {
          if (player.Player[i] == '*' || player.Player[i] == '\\') {
            player.Player = player.Player.slice(0,i)
          }
        }
      })

      var optionsWR = {
        title: {
          text: '2019 Top 10 WRs',
          align: 'center',
          style: {
            fontSize: '16px',
            color: 'black'
          }
        },
        chart: {
          type: 'line'
        },
        series: [
          {
            name: 'Davante Adams',
            data: [100.6, 106.3, 246.7, 222.5, 329.6]
          },
          {
            name: 'DeAndre Hopkins',
            data: [231, 331.1, 197.4, 309.8, 333.5]
          },
          {
            name: 'Odell Beckham Jr.',
            data: [295, 319.3, 296.6, 74, 230.3]
          },
          {
            name: 'Julio Jones',
            data: [297.4, 369.1, 259.9, 251.9, 325.9]
          },
          {
            name: 'Michael Thomas',
            data: [0, 0, 255.7, 258.5, 315.5]
          },
          {
            name: 'JuJu Smith-Schuster',
            data: [0, 0, 0, 197.7, 296.9]
          },
          {
            name: 'Tyreek Hill',
            data: [0, 0, 217, 245.2, 334]
          },
          {
            name: 'Mike Evans',
            data: [245.1, 210.6, 304.1, 203.1, 284.4]
          },
          {
            name: 'Keenan Allen',
            data: [175.3, 161.5, 12.3, 278.2, 260.1]
          },
          {
            name: 'T.Y. Hilton',
            data: [258.5, 211.4, 273.8, 175.6, 239]
          }
        ],
        yaxis: {
          min: 0,
          max: 410,
        },
        xaxis: {
          categories: [2014, 2015, 2016, 2017, 2018]
        }
      }

      var chartWR = new ApexCharts(document.querySelector('#chartWR'), optionsWR)
      chartWR.render()

      var optionsRB = {
        title: {
          text: '2019 Top 10 RBs',
          align: 'center',
          style: {
            fontSize: '16px',
            color: 'black'
          }
        },
        chart: {
          type: 'line'
        },
        series: [
          {
            name: 'Saquon Barkley',
            data: [0, 0, 0, 0, 385.8]
          },
          {
            name: 'Christian McCaffrey',
            data: [0, 0, 0, 228.6, 385.5]
          },
          {
            name: 'Alvin Kamara',
            data: [0, 0, 0, 320.4, 354.2]
          },
          {
            name: 'David Johnson',
            data: [0, 215.8, 407.8, 13, 246.6]
          },
          {
            name: 'Ezekiel Elliott',
            data: [0, 0, 325.4, 203.2, 329.1]
          },
          {
            name: 'Todd Gurley II',
            data: [0, 208.4, 198.2, 383.3, 372.1]
          },
          {
            name: 'Joe Mixon',
            data: [0, 0, 0, 141.3, 243.4]
          },
          {
            name: 'Nick Chubb',
            data: [0, 0, 0, 0, 194.5]
          },
          {
            name: 'Josh Jacobs',
            data: [0, 0, 0, 0, 0]
          },
          {
            name: 'Damien Williams',
            data: [57.9, 45.1, 93.4, 59.6, 98.6]
          }
        ],
        yaxis: {
          min: 0,
          max: 410,
        },
        xaxis: {
          categories: [2014, 2015, 2016, 2017, 2018]
        }
      }

      var chartRB = new ApexCharts(document.querySelector('#chartRB'), optionsRB)
      chartRB.render()
    }
  }
</script>

<style scoped>
  .my-container {
    position: relative;
    overflow: hidden;
    height: 100vh;
  }
  #content {
    height: 100vh;
    overflow: auto;
  }
  .my-container h1 {
      position: relative;
      z-index: 2;
      margin-bottom: 0px;
  }
  .my-container h5, h4, span {
    position: relative;
    z-index: 2;
  }
  .my-container img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0.75;
  }
  .my-container .divider {
    position: relative;
    z-index: 2;
    width: 33%;
    margin-left: 33.3%;
    margin-bottom: 1%;
    height: 3px;
    background-color: black;
  }
  .my-container span {
    font-size: 18px;
    margin-left: 1%;
    margin-right: 1%;
  }
  #navrow {
    margin-top: 0.5%;
  }
  .card-panel {
    z-index: 2;
    position: relative;
    margin-bottom: 5%;
  }
  #title-div {
    width: 75%;
    margin-left: 12.5%;
    margin-bottom: 0%;
  }
  #chart1 {
    margin-left: 25%;
    width:50%;
  }
  p {
    text-align: left;
  }
  .analysis {
    margin-top: 2%;
    margin-bottom: 2%;
    width: 50%;
    margin-left: 25%;
  }
  .rankings p {
    text-align: center;
  }
  .rankings ul {
    text-align: center;
  }
  #top10-div {
    width: 80%;
    margin-left: 10%;
  }
  #wr-analysis {
    margin: 5% 5% 0 5%
  }
  #wr-analysis ul {
    margin: 5% 0% 5% 0%;
  }
</style>
