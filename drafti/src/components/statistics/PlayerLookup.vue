<template>
  <div class="my-container">
    <h1 class="center"><router-link class="white-text" :to="{ name: 'Home' }">Drafti</router-link></h1>
    <div class="divider"></div>
    <div id="navrow" class="row">
      <span><router-link class="white-text" :to="{ name: 'MockDraft' }">Mock Draft</router-link></span>
      <span><router-link class="white-text" :to="{ name: 'Statistics' }">Statistics</router-link></span>
      <span v-if="user"><router-link class="white-text" :to="{ name: 'Home' }">{{ user.user_email }}</router-link></span>
      <span><a href="#" class="white-text" @click="logout">Logout</a></span>
    </div>
    <div class="row">
      <div class="col m3 l3 offset-m2 offset-l2">
        <div class="card-panel white z-depth-3" id="player-search">
          <div id="search" class="hover">
            <input type="text" name="playerSearch" placeholder="Player Name" v-model="playerSearch">
          </div>
          <br>
          <div class="tableSearch">
            <table>
              <tbody>
                <tr @click="display(player)" v-for="player in stat2018" :key="player.Rk" v-if="player.Player.toLowerCase().includes(playerSearch.toLowerCase())"
                v-bind:class="{ black: player == activeInfo, 'white-text': player == activeInfo }">
                  <td>{{ player.Player }}</td>
                  <td>{{ player.FantPos }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="col m5 l5">
        <div class="card-panel white z-depth-3" id="player-stats">
          <h3 class="black-text" id="player-title">Player Lookup</h3>
          <div class="divider" id="player-divider"></div>
          <div class="row">
            <div class="col m6 l6 left">
              <span>Player:</span><span v-if="activeInfo">{{ activeInfo.Player }}</span>
            </div>
            <div class="col m6 l6 left">
              <span>Team:</span><span v-if="activeInfo">{{ activeInfo.Tm }}</span>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>Year</th>
                <th>Team</th>
                <th>Yearly Total</th>
                <th>G</th>
                <th>GS</th>
                <th>PPG</th>
                <th>VBD</th>
                <th>Pos. Rank</th>
                <th>Ovr. Rank</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="year in stats.slice().reverse()">
                <td>{{ year.Yr }}</td>
                <td>{{ year.Tm }}</td>
                <td>{{ year.PPR }}</td>
                <td>{{ year.G }}</td>
                <td>{{ year.GS }}</td>
                <td>{{ (year.PPR / year.G) | round(2) }}</td>
                <td>{{ year.VBD }}</td>
                <td>{{ year.PosRank }}</td>
                <td>{{ year.Rk }}</td>
              </tr>
            </tbody>
          </table>
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
  import ff2011 from '@/assets/2011yearlyFF.json'
  import ff2012 from '@/assets/2012yearlyFF.json'
  import ff2013 from '@/assets/2013yearlyFF.json'
  import ff2014 from '@/assets/2014yearlyFF.json'
  import ff2015 from '@/assets/2015yearlyFF.json'
  import ff2016 from '@/assets/2016yearlyFF.json'
  import ff2017 from '@/assets/2017yearlyFF.json'
  import ff2018 from '@/assets/2018yearlyFF.json'
  import round from 'vue-round-filter'

  export default {
    name: 'Statistics',
    data() {
      return {
        user: null,
        stat2011: ff2011,
        stat2012: ff2012,
        stat2013: ff2013,
        stat2014: ff2014,
        stat2015: ff2015,
        stat2016: ff2016,
        stat2017: ff2017,
        stat2018: ff2018,
        playerSearch: '',
        stats: [],
        activeInfo: null
      }
    },
    filters: {
      round
    },
    methods: {
      logout() {
        firebase.auth().signOut().then(() => {
          this.$router.push({ name: 'Landing' })
        })
      },
      display(lookup) {
        this.activeInfo = lookup
        var i
        this.stats=[]
        this.stat2011.forEach(player => {
          if (player.Player == lookup.Player) {
            this.stats.push(player)
          }
        })
        this.stat2012.forEach(player => {
          if (player.Player == lookup.Player) {
            this.stats.push(player)
          }
        })
        this.stat2013.forEach(player => {
          if (player.Player == lookup.Player) {
            this.stats.push(player)
          }
        })
        this.stat2014.forEach(player => {
          if (player.Player == lookup.Player) {
            this.stats.push(player)
          }
        })
        this.stat2015.forEach(player => {
          if (player.Player == lookup.Player) {
            this.stats.push(player)
          }
        })
        this.stat2016.forEach(player => {
          if (player.Player == lookup.Player) {
            this.stats.push(player)
          }
        })
        this.stat2017.forEach(player => {
          if (player.Player == lookup.Player) {
            this.stats.push(player)
          }
        })
        this.stat2018.forEach(player => {
          if (player.Player == lookup.Player) {
            this.stats.push(player)
          }
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

      // Fixes naming issues for each file before loding into page.
      var i
      ff2011.forEach((player) => {
        player.Yr = 2011
        for (i = 0; i < player.Player.length; i++) {
          if (player.Player[i] == '*' || player.Player[i] == '\\') {
            player.Player = player.Player.slice(0,i)
          }
        }
      })
      ff2012.forEach((player) => {
        player.Yr = 2012
        for (i = 0; i < player.Player.length; i++) {
          if (player.Player[i] == '*' || player.Player[i] == '\\') {
            player.Player = player.Player.slice(0,i)
          }
        }
      })
      ff2013.forEach((player) => {
        player.Yr = 2013
        for (i = 0; i < player.Player.length; i++) {
          if (player.Player[i] == '*' || player.Player[i] == '\\') {
            player.Player = player.Player.slice(0,i)
          }
        }
      })
      ff2014.forEach((player) => {
        player.Yr = 2014
        for (i = 0; i < player.Player.length; i++) {
          if (player.Player[i] == '*' || player.Player[i] == '\\') {
            player.Player = player.Player.slice(0,i)
          }
        }
      })
      ff2015.forEach((player) => {
        player.Yr = 2015
        for (i = 0; i < player.Player.length; i++) {
          if (player.Player[i] == '*' || player.Player[i] == '\\') {
            player.Player = player.Player.slice(0,i)
          }
        }
      })
      ff2016.forEach((player) => {
        player.Yr = 2016
        for (i = 0; i < player.Player.length; i++) {
          if (player.Player[i] == '*' || player.Player[i] == '\\') {
            player.Player = player.Player.slice(0,i)
          }
        }
      })
      ff2017.forEach((player) => {
        player.Yr = 2017
        for (i = 0; i < player.Player.length; i++) {
          if (player.Player[i] == '*' || player.Player[i] == '\\') {
            player.Player = player.Player.slice(0,i)
          }
        }
      })
      ff2018.forEach((player) => {
        player.Yr = 2018
        for (i = 0; i < player.Player.length; i++) {
          if (player.Player[i] == '*' || player.Player[i] == '\\') {
            player.Player = player.Player.slice(0,i)
          }
        }
      })
    },
    mounted() {
      M.AutoInit()
    }
  }
</script>

<style scoped>
  .my-container {
    position: relative;
    overflow: hidden;
    height: 100vh;
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
  }
  #title-div {
    width: 75%;
    margin-left: 12.5%;
    margin-bottom: 0%;
    padding-bottom: 0%;
  }
  .tableSearch {
    max-height: 500px;
    overflow: auto;
  }
  #player-title {
    margin-top:2%;
  }
  #player-divider {
    width: 100%;
    margin-left: 0;
    margin-bottom: 1%;
  }
  #player-search {
    height: 600px;
    overflow: auto;
  }
  #player-stats {
    height: 600px;
    overflow: auto;
    padding-bottom: 0px;
  }
</style>
