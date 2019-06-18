<template>
  <div class="player-history container">
    <h3 class="center">Compare 2 Players</h3>
    <div class="row">
      <div class="col m6 l6">
        <div class="card-panel blue-grey darken-1 z-shadow-4">
          <div class="white-text center" v-if="player1">
            <div class="row">
              <span>{{ player1.Player }}</span>
            </div>
            <div class="row">
              <span class="col m4">Rank: {{ player1.Rk }}</span>
              <span class="col m4">Pos: {{ player1.FantPos }}</span>
              <span class="col m4">Pos Rank: {{ player1.PosRank }}</span>
            </div>
            <div class="row" v-if="player1.FantPos=='RB'">
              <span class="left">Test</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col m6 l6">
        <div class="card-panel blue-grey darken-1 center">
          <div class="white-text" v-if="player2">
            <div class="row">
              <span>{{ player2.Player }}</span>
            </div>
            <div class="row">
              <span class="left">Rank: {{ player2.Rk }}</span>
              <span class="right">Pos Rank: {{ player2.PosRank }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col m3 l3">
        <input type="text" name="nameSearch" v-model="nameSearch" placeholder="Player Name">
      </div>
      <div class="col m3 l3">
        <input type="text" name="posSearch" v-model="posSearch" placeholder="Player Position">
      </div>
    </div>
    <!-- Table for 2017 Player statistics. -->
    <div class="player-table z-depth-1">
      <table>
        <thead>
          <tr>
            <th class="center">Rank</th>
            <th>Player</th>
            <th class="center">Team</th>
            <th class="center">Pos.</th>
            <th class="center">Pos. Rank</th>
          </tr>
        </thead>
        <tbody>
          <tr class="highlight" v-for="player in stat2017" :key="player.Rk" @click="comparePlayer(player)" v-if="player.Player.includes(nameSearch) && player.FantPos.includes(posSearch)"
          v-bind:class="{ teal: player == player1 || player == player2, 'darken-3': player == player1 || player == player2 }">
            <td class="center">{{ player.Rk }}</td>
            <td>{{ player.Player }}</td>
            <td class="center">{{ player.Tm }}</td>
            <td class="center">{{ player.FantPos }}</td>
            <td class="center">{{ player.PosRank }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script type="text/javascript">
  import ff2017 from '@/assets/2017yearlyFF.json'
  export default {
    name: 'PlayerHistory',
    data() {
      return {
        stat2017: ff2017,
        player1: null,
        player2: null,
        nameSearch: '',
        posSearch: ''
      }
    },
    methods: {
      comparePlayer(player) {
        this.player2 = this.player1
        this.player1 = player
      }
    },
    created() {
      var i
      ff2017.forEach((player) => {
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
  .player-history h3 {
    margin-bottom: 25px;
  }
  .player-history .card-panel {
    height: 300px;
  }
  .player-history .player-table {
    max-height: 450px;
    overflow: auto;
    margin-bottom: 5%;
  }
</style>
