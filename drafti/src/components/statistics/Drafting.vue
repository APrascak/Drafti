<template>
  <div class="drafting grey lighten-2">

    <!-- Top portion of UI to display mock draft information. -->
    <div class="row top">
      <div class="col m4 l4 offset-m4 offset-l4">
        <div class="card teal darken-3 z-depth-2">
          <div class="card-content white-text">
            <div class="row top-ui">
              <div class="col m6 l6 top-left">
                <div class="in-top">Number of Players: {{ draftParams.playerNum }}</div>
                <div class="in-top">Draft Position: {{ draftParams.pickPos }}</div>
              </div>
              <div class="col m6 l6 top-left">
                <div class="in-top">Current Round: </div>
                <div class="in-top">Current Pick: </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <!-- Left hand of UI for Draft Feed -->
      <div class="col m2 l2 feed red z-depth-1">
        <h4 class="center">Draft Feed</h4>
        <table>
          <thead>
            <th>Pos</th>
            <th>Name</th>
            <th>Pick</th>
          </thead>
          <tbody>
            <tr v-for="player in picks.slice().reverse()" :key="player.OvPick">
              <td>{{ player.FantPos }}</td>
              <td>{{ player.Player }}</td>
              <td>{{ player.Round }}.{{ player.Pick}}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="col m8 l8 center-ui">
        <div class="row center-ui">

          <!-- Center-left Display for Remaining Players -->
          <div class="col m8 l8 board purple lighten-2">
            <div class="row">
              <div class="col m8 l8 orange lighten-4">
                <h5 class="center">On The Board</h5>
              </div>
              <div class="col m4 l4 pink lighten-4">
                <input type="text" name="playerSearch" placeholder="Player Name" v-model="playerSearch">
              </div>
            </div>
            <div class="row players">
              <div class="col m12 l12">
                <ul class="collection">
                  <li class="collection-item" v-for="player in stat2018" v-if="player.Player.toLowerCase().includes(playerSearch.toLowerCase())"
                  v-bind:class="{ teal: player == activeInfo, 'darken-3': player == activeInfo }"
                  @click="display(player)">
                    {{ player.Player }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Center-right Display for Player Information  -->
          <div class="col m4 l4 player-info yellow lighten-3">
            <h5 class="center">Player Info</h5>
            <div class="center" v-if="activeInfo">
              <p>{{ activeInfo.Player }}</p>
              <p>Position: {{ activeInfo.FantPos }}</p>
              <p>Team: {{ activeInfo.Tm }}</p>
              <p>Overall Rank: {{ activeInfo.Rk }}</p>
              <p>Position Rank: {{ activeInfo.PosRank }}</p>
              <p>Total PPR: {{ activeInfo.PPR }}</p>
              <p>PPR / Game: {{ (activeInfo.PPR / activeInfo.G) | round(2) }}</p>
              <p>VBD: {{ activeInfo.VBD }}</p>
              <div v-if="activeInfo.FantPos == 'RB'">
                <p>Rushing Yards: {{ activeInfo.Yds__1 }}</p>
                <p>Receiving Yards: {{ activeInfo.Yds__2 }}</p>
                <p>Touchdowns: {{ activeInfo.TD__3 }}</p>
              </div>
              <div v-if="activeInfo.FantPos == 'WR'">
                <p>Rushing Yards: {{ activeInfo.Yds__1 }}</p>
                <p>Receiving Yards: {{ activeInfo.Yds__2 }}</p>
                <p>Touchdowns: {{ activeInfo.TD__3 }}</p>
              </div>
              <button @click="draft(activeInfo)" class="btn teal darken-4">Draft</button>
            </div>
          </div>
        </div>

        <!-- Section below the player info -->
        <div class="row">
          <p>{{  }}</p>
        </div>

      </div>

      <div class="col m2 l2 team-info orange">
        <h5 class="center">Your Team</h5>
        <ul class="collection">
          <li><em>QB: </em><span v-if="userTeam.qb">{{ userTeam.qb.Player }}</span></li>
          <li><em>RB1: </em><span v-if="userTeam.rb[0]">{{ userTeam.rb[0].Player }}</span></li>
          <li><em>RB2: </em><span v-if="userTeam.rb[1]">{{ userTeam.rb[1].Player }}</span></li>
          <li><em>RB3: </em><span v-if="userTeam.rb[2]">{{ userTeam.rb[2].Player }}</span></li>
          <li><em>WR1: </em><span v-if="userTeam.wr[0]">{{ userTeam.wr[0].Player }}</span></li>
          <li><em>WR2: </em><span v-if="userTeam.wr[1]">{{ userTeam.wr[1].Player }}</span></li>
          <li><em>WR3: </em><span v-if="userTeam.wr[2]">{{ userTeam.wr[2].Player }}</span></li>
          <li><em>TE: </em><span v-if="userTeam.te">{{ userTeam.te.Player }}</span></li>
          <li><em>FLEX1: </em><span v-if="userTeam.flx[0]">{{ userTeam.flx[0].Player }}</span></li>
          <li><em>FLEX2: </em><span v-if="userTeam.flx[1]">{{ userTeam.flx[1].Player }}</span></li>
          <li><em>D/ST: </em><span v-if="userTeam.dst">{{ userTeam.dst.Player }}</span></li>
          <li></li>
        </ul>
      </div>

    </div>

  </div>
</template>

<script type="text/javascript">
  import ff2018 from '@/assets/2018yearlyFF.json'
  import round from 'vue-round-filter'

  export default {
    name: 'Drafting',
    data() {
      return {
        draftParams: {
          mockName: this.$route.params.mockName,
          playerNum: this.$route.params.playerNum,
          pickPos: this.$route.params.pickPos,
          rbNum: this.$route.params.rbNum,
          wrNum: this.$route.params.wrNum,
          flxNum: this.$route.params.flxNum
        },
        currRound: 1,
        currPick: 1,
        picks: [],
        stat2018: ff2018,
        playerSearch: '',
        activeInfo: null,
        feedback: null,
        userTeam: {
          qb: null,
          rb: [],
          wr: [],
          te: null,
          flx: [],
          k: null,
          dst: null
        },
        otherTeams: []
      }
    },
    filters: {
      round
    },
    methods: {
      display(player) {
        this.activeInfo = player
      },
      draft(player) {
        // Conditional for RB drafting
        if (player.FantPos == 'RB' && this.userTeam.rb.length < this.draftParams.rbNum) {
          // Add to team.
          this.userTeam.rb.push(player)
          // Add round.pick
          player.Round = this.currRound
          player.Pick = this.currPick
          player.OvPick = (this.currRound * this.draftParams.playerNum) + this.currPick
          // Add to picks array
          this.picks.push(player)
          // Update currPick,currRound
          if (this.currPick == this.draftParams.PlayerNum) {
            this.currRound++
            this.currPick = 1
          } else {
            this.currPick++
          }
          // Remove from available players
          this.stat2018.splice(this.stat2018.indexOf(player),1)

          // Conditional for WR drafting
        } else if (player.FantPos == 'WR' && this.userTeam.wr.length < this.draftParams.wrNum) {
          // Add to team.
          this.userTeam.wr.push(player)
          // Add round.pick
          player.Round = this.currRound
          player.Pick = this.currPick
          player.OvPick = (this.currRound * this.draftParams.playerNum) + this.currPick
          // Add to picks array
          this.picks.push(player)
          // Update currPick,currRound
          if (this.currPick == this.draftParams.PlayerNum) {
            this.currRound++
            this.currPick = 1
          } else {
            this.currPick++
          }
          // Remove from available players
          this.stat2018.splice(this.stat2018.indexOf(player),1)

          // Conditional for QB drafting
        } else if (player.FantPos == 'QB' && !this.userTeam.qb) {
          // Add to team.
          this.userTeam.qb = player
          // Add round.pick
          player.Round = this.currRound
          player.Pick = this.currPick
          player.OvPick = (this.currRound * this.draftParams.playerNum) + this.currPick
          // Add to picks array
          this.picks.push(player)
          // Update currPick,currRound
          if (this.currPick == this.draftParams.PlayerNum) {
            this.currRound++
            this.currPick = 1
          } else {
            this.currPick++
          }
          // Remove from available players
          this.stat2018.splice(this.stat2018.indexOf(player),1)

        } else if (player.FantPos == 'TE' && !this.userTeam.te) { // Conditional for TE drafting
          // Add to team.
          this.userTeam.te = player
          // Add round.pick
          player.Round = this.currRound
          player.Pick = this.currPick
          player.OvPick = (this.currRound * this.draftParams.playerNum) + this.currPick
          // Add to picks array
          this.picks.push(player)
          // Update currPick,currRound
          if (this.currPick == this.draftParams.PlayerNum) {
            this.currRound++
            this.currPick = 1
          } else {
            this.currPick++
          }
          // Remove from available players
          this.stat2018.splice(this.stat2018.indexOf(player),1)

        } else if ((player.FantPos == 'RB' || player.FantPos == 'WR' || player.FantPos == 'TE') && this.userTeam.flx.length < this.draftParams.flxNum) {
          // Add to team.
          this.userTeam.flx.push(player)
          // Add round.pick
          player.Round = this.currRound
          player.Pick = this.currPick
          player.OvPick = (this.currRound * this.draftParams.playerNum) + this.currPick
          // Add to picks array
          this.picks.push(player)
          // Update currPick,currRound
          if (this.currPick == this.draftParams.PlayerNum) {
            this.currRound++
            this.currPick = 1
          } else {
            this.currPick++
          }
          // Remove from available players
          this.stat2018.splice(this.stat2018.indexOf(player),1)
        }

      }
    },
    created() {
      var i
      ff2018.forEach((player) => {
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
  .drafting .top {
    height: 20vh;
    padding-top: 2%;
  }
  .drafting .card {
    height: 15vh;
  }
  .drafting .card-content {
    height: 100%;
  }
  .drafting .top-ui {
    height: 100%;
  }
  .drafting .top-left {
    height: 100%;
    display: block;
  }
  .drafting .in-top {
    margin-top: 7.5%;
  }
  .drafting .progress {
    max-width: 1000px;
  }
  .drafting .feed, .center-ui, .team-info {
    height: 72.5vh;
    overflow: auto;
  }
  .drafting .board, .player-info {
    height: 50vh;
  }
  .drafting .players {
    height: 40vh;
    overflow: auto;
  }
  .drafting .player-info {
    font-size: 0.9em;
  }
</style>
