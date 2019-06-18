<template>
  <div class="container player-lookup">
    <div class="row theSearch">
      <div class="col m3 l3 mainSearch">
        <div id="search" class="hover">
          <input type="text" name="playerSearch" placeholder="Player Name" v-model="playerSearch">
        </div>
        <br>
        <div class="tableSearch">
          <table>
            <tbody>
              <tr @click="display(player)" v-for="player in stat2018" :key="player.Rk" v-if="player.Player.toLowerCase().includes(playerSearch.toLowerCase())">
                <td>{{ player.Player }}</td>
                <td>{{ player.FantPos }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- div for displaying player information. -->
      <div class="col m9 l9 light-green z-depth-3">
        <!-- Div for upcoming year information. -->
        <div class="row">
          <div class="col m3 l3">
            <img src="https://materializecss.com/images/bold.png" class="circle responsive-img">
          </div>
          <div class="col m9 l9">
            <h4 class="center">{{ stats[0].Player }}</h4>
          </div>
        </div>
        <!-- Table of past years performance. -->
        <table>
          <thead>
            <tr>
              <td>Year</td>
              <td>Team</td>
              <td>Yearly Total</td>
              <td>Games Played</td>
              <td>Games Started</td>
              <td>PPG</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="year in stats">
              <td>{{ year.Yr }}</td>
              <td>{{ year.Tm }}</td>
              <td>{{ year.PPR }}</td>
              <td>{{ year.G }}</td>
              <td>{{ year.GS }}</td>
              <td>{{ year.PPR / year.G }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import ff2017 from '@/assets/2017yearlyFF.json'
  import ff2018 from '@/assets/2018yearlyFF.json'
  export default {
    name: 'PlayerLookup',
    data() {
      return {
        stat2017: ff2017,
        stat2018: ff2018,
        playerSearch: '',
        stats: []
      }
    },
    methods: {
      display(lookup) {
        var i
        this.stats=[]
        this.stat2017.forEach(player => {
          if (player.Player == lookup.Player) {
            this.stats.push(player)
            player.Yr = 2017
            console.log(player)
          }
        })
        this.stat2018.forEach(player => {
          if (player.Player == lookup.Player) {
            this.stats.push(player)
          }
        })
        console.log(this.stats)
      }
    },
    created() {
      // Fixes naming issues for each file before loding into page.
      var i
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
    }
  }
</script>

<style media="screen">
  .player-lookup .tableSearch {
    max-height: 500px;
    overflow: auto;
  }
  .player-lookup #search {
    margin-bottom: 10%;
  }
  .player-lookup img {
    max-height: 2%;
  }
  .player-lookup .theSearch {
    margin-top: 5%;
  }
</style>
