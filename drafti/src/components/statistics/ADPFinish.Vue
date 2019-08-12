<template>
  <div class="my-container">
    <div id="content">
      <h1 class="center"><router-link class="white-text" :to="{ name: 'Home' }">Drafti</router-link></h1>
      <div class="divider"></div>
      <div id="navrow" class="row">
        <span><router-link class="white-text" :to="{ name: 'MockDraft' }">Mock Draft</router-link></span>
        <span><router-link class="white-text" :to="{ name: 'Statistics' }">Statistics</router-link></span>
        <span v-if="user"><router-link class="white-text" :to="{ name: 'Home' }">{{ user.user_email }}</router-link></span>
        <span><a href="#" class="white-text" @click="logout">Logout</a></span>
      </div>
      <div class="row">
        <div class="col m8 l8 offset-m2 offset-l2">
          <div class="card-panel white z-depth-3">
            <h4>Top 10 & ADP:</h4>
            <div class="divider" id="title-div"></div>
            <div class="analysis">
              <p>
                ESPN recently published their top 300 Fantasy Players, both overall and by position. Normally, the prime center of attention
                is the top 10 running back and wide receivers. In order to help learn how accurately ESPN can predict the top 10 by position,
                we'll take a look at how consistent their predictions have been over the past years.
              </p>
            </div>
            <table>
              <thead>
                <th>Name:</th>
                <th>'18 Pre</th>
                <th>'18 Final</th>
                <th>'17 Pre</th>
                <th>'17 Final</th>
                <th>'16 Pre</th>
                <th>'16 Final</th>
                <th>'15 Pre</th>
                <th>'15 Final</th>
                <th>'14 Pre</th>
                <th>'14 Final</th>
              </thead>
              <tbody>
                <tr>
                  <td>Todd Gurley II</td>
                  <td class="grey">1</td>
                  <td class="green">3</td>
                  <td class="grey">10</td>
                  <td class="green">1</td>
                  <td class="grey">2</td>
                  <td class="yellow">14</td>
                  <td class="grey">2</td>
                  <td class="green">4</td>
                  <td class="black"></td>
                  <td class="black"></td>
                </tr>
                <tr>
                  <td>David Johnson</td>
                  <td class="grey">2</td>
                  <td class="green">9</td>
                  <td class="grey">1</td>
                  <td class="red">98</td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                </tr>
                <tr>
                  <td>Ezekiel Elliott</td>
                  <td class="grey">3</td>
                  <td class="green">5</td>
                  <td class="grey">3</td>
                  <td class="yellow">12</td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                </tr>
                <tr>
                  <td>Alvin Kamara</td>
                  <td class="grey">4</td>
                  <td class="green">4</td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                </tr>
                <tr>
                  <td>Saquon Barkley</td>
                  <td class="grey">5</td>
                  <td class="green">1</td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                </tr>
                <tr>
                  <td>Dalvin Cook</td>
                  <td class="grey">6</td>
                  <td class="red">30</td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                </tr>
                <tr>
                  <td>Melvin Gordon</td>
                  <td class="grey">7</td>
                  <td class="green">8</td>
                  <td class="grey">6</td>
                  <td class="green">5</td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                </tr>
                <tr>
                  <td>Christian McCaffrey</td>
                  <td class="grey">8</td>
                  <td class="green">2</td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                </tr>
                <tr>
                  <td>Kareem Hunt</td>
                  <td class="grey">9</td>
                  <td class="yellow">12</td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                </tr>
                <tr>
                  <td>Leonard Fournette</td>
                  <td class="grey">10</td>
                  <td class="red">40</td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                </tr>
                <tr>
                  <td>Le'Veon Bell</td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="grey">2</td>
                  <td class="green">2</td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                </tr>
                <tr>
                  <td>LeSean McCoy</td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="grey">4</td>
                  <td class="green">7</td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                </tr>
                <tr>
                  <td>Devonta Freeman</td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="grey">5</td>
                  <td class="yellow">14</td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                </tr>
                <tr>
                  <td>Jordan Howard</td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="grey">7</td>
                  <td class="yellow">15</td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                </tr>
                <tr>
                  <td>DeMarco Murray</td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="grey">8</td>
                  <td class="yellow"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                  <td class="black"></td>
                </tr>
              </tbody>
            </table>
            <div id="chart1"></div>
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
    name: 'ADPFinish',
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
        if (player.PosRank <= 5) {
          this.names.push(player.Player)
          this.scores.push(player.PPR)
        }
      })



      var options1 = {
        chart: {
          type: 'bar',
          width: '600px',
          height: '400px'
        },
        series: [{
          name: 'scores',
          data: this.scores
        }],
        xaxis: {
          categories: []
        }
      }

      var chart = new ApexCharts(document.querySelector("#chart1"), options1);

      chart.render();
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

</style>
