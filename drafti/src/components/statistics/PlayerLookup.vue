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

      <!-- RIGHT SIDE UI DIV -->
      <div id="display-info" class="col m9 l9 light-green lighten-4 z-depth-2">
        <!-- Upcoming Player Stats -->
        <div class="row">
          <div class="col m3 l3">
            <img src="https://materializecss.com/images/bold.png" class="circle responsive-img">
          </div>
          <div class="col m9 l9 center" v-if="stats[0]">
            <h3>{{ stats[0].Player }}</h3>
            <p>{{ stats[0].Tm }}</p>
          </div>
        </div>
        <!-- Prior Years Performance -->
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
              <tr v-for="year in stats">
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
    <table>
      <thead>
        <tr>

        </tr>
      </thead>
    </table>
  </div>
</template>

<script type="text/javascript">
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
    name: 'PlayerLookup',
    data() {
      return {
        stat2011: ff2011,
        stat2012: ff2012,
        stat2013: ff2013,
        stat2014: ff2014,
        stat2015: ff2015,
        stat2016: ff2016,
        stat2017: ff2017,
        stat2018: ff2018,
        playerSearch: '',
        stats: []
      }
    },
    filters: {
      round
    },
    methods: {
      display(lookup) {
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
  .player-lookup #display-info {
    height: 600px;
  }
  .player-lookup #display-info table tr td {
    border: 1px solid black;
  }
</style>
