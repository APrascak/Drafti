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
        <div class="col offset-m2 offset-l2 m8 l8">
          <div class="row card-panel hoverable white">
            <div class="row">
              <div class="col m4 l4">
                <h4 class="teal-text text-darken-4">Your Team</h4>
                <div class="divider" id="your-team"></div>
              </div>
              <div class="col m4 l4 ">
                <h4 class="teal-text text-darken-4">Other Teams</h4>
                <div class="divider" id="your-team"></div>
              </div>
              <div class="col m4 l4">
                <h4 class="teal-text text-darken-4">Player Stats</h4>
                <div class="divider" id="feed"></div>
              </div>
            </div>
            <div class="row">
              <div class="col m4 l4">
                <ul class="collection" id="ur-team">
                  <li class="collection-item">QB: <span v-if="userTeam.qb">{{ userTeam.qb.Player }}</span><span class="right" v-if="userTeam.qb">{{ userTeam.qb.Round }}.{{ userTeam.qb.Pick }}</span></li>
                  <li class="collection-item">RB1: <span v-if="userTeam.rb[0]">{{ userTeam.rb[0].Player }}</span><span class="right" v-if="userTeam.rb[0]">{{ userTeam.rb[0].Round }}.{{ userTeam.rb[0].Pick }}</span></li>
                  <li class="collection-item">RB2: <span v-if="userTeam.rb[1]">{{ userTeam.rb[1].Player }}</span><span class="right" v-if="userTeam.rb[1]">{{ userTeam.rb[1].Round }}.{{ userTeam.rb[1].Pick }}</span></li>
                  <li class="collection-item">RB3: <span v-if="userTeam.rb[2]">{{ userTeam.rb[2].Player }}</span><span class="right" v-if="userTeam.rb[2]">{{ userTeam.rb[2].Round }}.{{ userTeam.rb[2].Pick }}</span></li>
                  <li class="collection-item">WR1: <span v-if="userTeam.wr[0]">{{ userTeam.wr[0].Player }}</span><span class="right" v-if="userTeam.wr[0]">{{ userTeam.wr[0].Round }}.{{ userTeam.wr[0].Pick }}</span></li>
                  <li class="collection-item">WR2: <span v-if="userTeam.wr[1]">{{ userTeam.wr[1].Player }}</span><span class="right" v-if="userTeam.wr[1]">{{ userTeam.wr[1].Round }}.{{ userTeam.wr[1].Pick }}</span></li>
                  <li class="collection-item">WR3: <span v-if="userTeam.wr[2]">{{ userTeam.wr[2].Player }}</span><span class="right" v-if="userTeam.wr[2]">{{ userTeam.wr[2].Round }}.{{ userTeam.wr[2].Pick }}</span></li>
                  <li class="collection-item">TE: <span v-if="userTeam.te">{{ userTeam.te.Player }}</span><span class="right" v-if="userTeam.te">{{ userTeam.te.Round }}.{{ userTeam.te.Pick }}</span></li>
                  <li class="collection-item">FLEX1: <span v-if="userTeam.flx[0]">{{ userTeam.flx[0].Player }}</span><span class="right" v-if="userTeam.flx[0]">{{ userTeam.flx[0].Round }}.{{ userTeam.flx[0].Pick }}</span></li>
                  <li class="collection-item">FLEX2: <span v-if="userTeam.flx[1]">{{ userTeam.flx[1].Player }}</span><span class="right" v-if="userTeam.flx[1]">{{ userTeam.flx[1].Round }}.{{ userTeam.flx[1].Pick }}</span></li>
                  <li class="collection-item">K: <span v-if="userTeam.k">{{ userTeam.k.Player }}</span><span class="right" v-if="userTeam.k">{{ userTeam.k.Round }}.{{ userTeam.k.Pick }}</span></li>
                  <li class="collection-item">DST: <span v-if="userTeam.dst">{{ userTeam.dst.Player }}</span><span class="right" v-if="userTeam.dst">{{ userTeam.dst.Round }}.{{ userTeam.dst.Pick }}</span></li>
                </ul>
              </div>
              <div class="col m4 l4">
                <ul class="collection">
                  <li class="collection-item" v-if="viewTeam">QB: <span v-if="viewTeam.qb">{{ viewTeam.qb.Player }}</span><span class="right" v-if="viewTeam.qb">{{ viewTeam.qb.Round }}.{{ viewTeam.qb.Pick }}</span></li>
                  <li class="collection-item" v-if="viewTeam">RB1: <span v-if="viewTeam.rb[0]">{{ viewTeam.rb[0].Player }}</span><span class="right" v-if="viewTeam.rb[0]">{{ viewTeam.rb[0].Round }}.{{ viewTeam.rb[0].Pick }}</span></li>
                  <li class="collection-item" v-if="viewTeam">RB2: <span v-if="viewTeam.rb[1]">{{ viewTeam.rb[1].Player }}</span><span class="right" v-if="viewTeam.rb[1]">{{ viewTeam.rb[1].Round }}.{{ viewTeam.rb[1].Pick }}</span></li>
                  <li class="collection-item" v-if="viewTeam">RB3: <span v-if="viewTeam.rb[2]">{{ viewTeam.rb[2].Player }}</span><span class="right" v-if="viewTeam.rb[2]">{{ viewTeam.rb[2].Round }}.{{ viewTeam.rb[2].Pick }}</span></li>
                  <li class="collection-item" v-if="viewTeam">WR1: <span v-if="viewTeam.wr[0]">{{ viewTeam.wr[0].Player }}</span><span class="right" v-if="viewTeam.wr[0]">{{ viewTeam.wr[0].Round }}.{{ viewTeam.wr[0].Pick }}</span></li>
                  <li class="collection-item" v-if="viewTeam">WR2: <span v-if="viewTeam.wr[1]">{{ viewTeam.wr[1].Player }}</span><span class="right" v-if="viewTeam.wr[1]">{{ viewTeam.wr[1].Round }}.{{ viewTeam.wr[1].Pick }}</span></li>
                  <li class="collection-item" v-if="viewTeam">WR3: <span v-if="viewTeam.wr[2]">{{ viewTeam.wr[2].Player }}</span><span class="right" v-if="viewTeam.wr[2]">{{ viewTeam.wr[2].Round }}.{{ viewTeam.wr[2].Pick }}</span></li>
                  <li class="collection-item" v-if="viewTeam">TE: <span v-if="viewTeam.te">{{ viewTeam.te.Player }}</span><span class="right" v-if="viewTeam.te">{{ viewTeam.te.Round }}.{{ viewTeam.te.Pick }}</span></li>
                  <li class="collection-item" v-if="viewTeam">FLEX1: <span v-if="viewTeam.flx[0]">{{ viewTeam.flx[0].Player }}</span><span class="right" v-if="viewTeam.flx[0]">{{ viewTeam.flx[0].Round }}.{{ viewTeam.flx[0].Pick }}</span></li>
                  <li class="collection-item" v-if="viewTeam">FLEX2: <span v-if="viewTeam.flx[1]">{{ viewTeam.flx[1].Player }}</span><span class="right" v-if="viewTeam.flx[1]">{{ viewTeam.flx[1].Round }}.{{ viewTeam.flx[1].Pick }}</span></li>
                  <li class="collection-item" v-if="viewTeam">K: <span v-if="null">{{ viewTeam.k.Player }}</span><span class="right" v-if="viewTeam.k">{{ viewTeam.k.Round }}.{{ viewTeam.k.Pick }}</span></li>
                  <li class="collection-item" v-if="viewTeam">DST: <span v-if="null">{{ viewTeam.dst.Player }}</span><span class="right" v-if="viewTeam.dst">{{ viewTeam.dst.Round }}.{{ viewTeam.dst.Pick }}</span></li>
                </ul>
                <a class='dropdown-trigger btn center black' data-target='dropdown1' id="other-teams">View Other Teams</a>
                <ul id='dropdown1' class='dropdown-content'>
                  <li @click="displayTeam(team)" v-for="team in otherTeams" class="black-text"><a class="black-text">Team # {{ team.name }}</a></li>
                </ul>
              </div>
              <div class="col m4 l4">
                <ul class="collection">
                  <li class="collection-item">Name: <span v-if="activeInfo">{{ activeInfo.Player }}</span></li>
                  <li class="collection-item">Team: <span v-if="activeInfo">{{ activeInfo.Tm }}</span></li>
                  <li class="collection-item">Pos: <span v-if="activeInfo">{{ activeInfo.FantPos }}</span></li>
                  <li class="collection-item">Ov. Rank: <span v-if="activeInfo">{{ activeInfo.Rk }}</span></li>
                  <li class="collection-item">Pos. Rank: <span v-if="activeInfo">{{ activeInfo.PosRank }}</span></li>
                  <li class="collection-item">Games: <span v-if="activeInfo">{{ activeInfo.G }}</span></li>
                  <li class="collection-item">PPR: <span v-if="activeInfo">{{ activeInfo.PPR }}</span></li>
                  <li class="collection-item">PPR/Game: <span v-if="activeInfo">{{ (activeInfo.PPR / activeInfo.G) | round(2) }}</span></li>
                  <li class="collection-item">VBD: <span v-if="activeInfo">{{ activeInfo.VBD }}</span></li>
                  <li class="collection-item">
                    <div class="white-text" v-if="!activeInfo">Test</div>
                    <div v-if="activeInfo">
                      <span v-if="activeInfo.FantPos == 'RB' || activeInfo.FantPos == 'TE' || activeInfo.FantPos == 'WR'">Receptions: {{ activeInfo.Rec }}</span>
                      <span v-if="activeInfo.FantPos == 'QB'">Passing Yards: {{ activeInfo.Int }}</span>
                    </div>
                  </li>
                  <li class="collection-item">
                    <div class="white-text" v-if="!activeInfo">Test</div>
                    <div v-if="activeInfo">
                      <span v-if="activeInfo.FantPos == 'RB' || activeInfo.FantPos == 'TE' || activeInfo.FantPos == 'WR' ">Total Yards: {{ activeInfo.Yds__1 + activeInfo.Yds__2 }}</span>
                      <span v-if="activeInfo.FantPos == 'QB'">Passing Yards: {{ activeInfo.Yds }}</span>
                    </div>
                  </li>
                  <li class="collection-item">
                    <div class="white-text" v-if="!activeInfo">Test</div>
                    <div v-if="activeInfo">
                      <span v-if="activeInfo.FantPos == 'RB' || activeInfo.FantPos == 'TE' || activeInfo.FantPos == 'WR' ">Total TDs: {{ activeInfo.TD__1 + activeInfo.TD__2 }}</span>
                      <span v-if="activeInfo.FantPos == 'QB'">Passing TDs: {{ activeInfo.TD }}</span>
                    </div>
                  </li>
                </ul>
                <div class="center">
                  <button @click="draft(activeInfo)" class="btn black">Draft</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col m8 l8 offset-m2 offset-l2 board card white hoverable">
          <div class="row">
            <div class="col m4 l4">
              <h5 class="center black-text">On The Board</h5>
            </div>
            <div class="col m4 l4">
              <input type="text" name="playerSearch" placeholder="Player Name" v-model="playerSearch">
            </div>
            <div class="col m4 l4">
              <h5 class="black-text">Draft Feed</h5>
            </div>
          </div>
          <div class="row">
            <div class="col m8 l8 players">
              <ul class="collection">
                <li class="collection-item" v-for="player in stat2018" v-if="player.Player.toLowerCase().includes(playerSearch.toLowerCase())"
                v-bind:class="{ black: player == activeInfo, 'white-text': player == activeInfo }"
                @click="display(player)">
                  {{ player.Player }}
                </li>
              </ul>
            </div>
            <div class="col m4 l4 players">
              <table>
                <thead>
                  <th>Pos</th>
                  <th>Name</th>
                  <th>Pick</th>
                </thead>
                <tbody class="white black-text">
                  <tr v-for="player in picks.slice().reverse()" :key="player.OvPick">
                    <td>{{ player.FantPos }}</td>
                    <td>{{ player.Player }}</td>
                    <td>{{ player.Round }}.{{ player.Pick}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </div>
    <img src="../../assets/Background-PaintedField.jpg">
  </div>
</template>

<script type="text/javascript">
  import ff2018 from '@/assets/2018yearlyFF.json'
  import round from 'vue-round-filter'
  import slugify from 'slugify'
  import db from '@/firebase/init'
  import firebase from 'firebase'

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
        otherTeams: [],
        viewTeam: null,
        user: null
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

        if (player.FantPos == 'QB' && !this.userTeam.qb) {

          player.Round = this.currRound
          player.Pick = this.currPick
          player.OvPick = (this.currRound * this.draftParams.playerNum) + this.currPick
          this.userTeam.qb = player
          this.picks.push(player)

        } else if (player.FantPos == 'RB' && this.userTeam.rb.length < this.draftParams.rbNum) {

          player.Round = this.currRound
          player.Pick = this.currPick
          player.OvPick = (this.currRound * this.draftParams.playerNum) + this.currPick
          this.userTeam.rb.push(player)
          this.picks.push(player)

        } else if (player.FantPos == 'WR' && this.userTeam.wr.length < this.draftParams.rbNum) {

          player.Round = this.currRound
          player.Pick = this.currPick
          player.OvPick = (this.currRound * this.draftParams.playerNum) + this.currPick
          this.userTeam.wr.push(player)
          this.picks.push(player)

        } else if (player.FantPos == 'TE' && !this.userTeam.te) {

          player.Round = this.currRound
          player.Pick = this.currPick
          player.OvPick = (this.currRound * this.draftParams.playerNum) + this.currPick
          this.userTeam.te = player
          this.picks.push(player)

        } else if ((player.FantPos == 'RB' || player.FantPos == 'WR' || player.FantPos == 'TE') && this.userTeam.flx.length < this.draftParams.flxNum) {

          player.Round = this.currRound
          player.Pick = this.currPick
          player.OvPick = (this.currRound * this.draftParams.playerNum) + this.currPick
          this.userTeam.flx.push(player)
          this.picks.push(player)

        } else {

          M.toast({html: 'This position is full!'})
          return null

        }

        this.stat2018.splice(this.stat2018.indexOf(player),1)

        if (this.currPick == this.draftParams.playerNum) {
          this.currRound++
          this.currPick = 1
        } else {
          this.currPick++
          var i
          if (this.currRound % 2 == 1) {
            for (i = this.currPick; i <= this.draftParams.playerNum; i++) {
              this.cpuDraft(this.otherTeams[i-2])
            }
            for (i = this.currPick; i <= (this.draftParams.playerNum - this.draftParams.pickPos); i++) {
              this.cpuDraft(this.otherTeams[this.draftParams.playerNum - this.currPick-1])
            }
          } else {
            for (i = this.currPick; i <= this.draftParams.playerNum; i++) {
              this.cpuDraft(this.otherTeams[this.draftParams.playerNum - this.currPick])
            }
            for (i = this.currPick; i < this.draftParams.pickPos; i++) {
              this.cpuDraft(this.otherTeams[i-1])
            }
          }
        }

      },
      cpuDraft(team) {
        var k
        for (k = 0; k < this.stat2018.length; k++) {
          if (this.stat2018[k].FantPos == 'QB' && team.qb == null) {    // Quarterback selection

            team.qb = this.stat2018[k]    // Add QB to team.

            this.stat2018[k].Round  = this.currRound    // Add pick information to player object.
            this.stat2018[k].Pick   = this.currPick
            this.stat2018[k].OvPick = (this.currRound * this.draftParams.playerNum) + this.currPick

            this.picks.push(this.stat2018[k])   // Update pick array with player object.

            if (this.currPick == this.draftParams.playerNum) {    // Update current round and pick.
              this.currRound++
              this.currPick = 1
            } else {
              this.currPick++
            }

            this.stat2018.splice(k,1)   // Remove player from stat list.
            k = this.stat2018.length


          } else if (this.stat2018[k].FantPos == 'RB' && team.rb.length < this.draftParams.rbNum) {   // Running back selection

            team.rb.push(this.stat2018[k])    // Add QB to team.

            this.stat2018[k].Round  = this.currRound    // Add pick information to player object.
            this.stat2018[k].Pick   = this.currPick
            this.stat2018[k].OvPick = (this.currRound * this.draftParams.playerNum) + this.currPick

            this.picks.push(this.stat2018[k])   // Update pick array with player object.

            if (this.currPick == this.draftParams.playerNum) {    // Update current round and pick.
              this.currRound++
              this.currPick = 1
            } else {
              this.currPick++
            }

            this.stat2018.splice(k,1)   // Remove player from stat list.
            k = this.stat2018.length


          } else if (this.stat2018[k].FantPos == 'WR' && team.wr.length < this.draftParams.wrNum) {   // Wide receiver selection

            team.wr.push(this.stat2018[k])    // Add QB to team.

            this.stat2018[k].Round  = this.currRound    // Add pick information to player object.
            this.stat2018[k].Pick   = this.currPick
            this.stat2018[k].OvPick = (this.currRound * this.draftParams.playerNum) + this.currPick

            this.picks.push(this.stat2018[k])   // Update pick array with player object.

            if (this.currPick == this.draftParams.playerNum) {    // Update current round and pick.
              this.currRound++
              this.currPick = 1
            } else {
              this.currPick++
            }

            this.stat2018.splice(k,1)   // Remove player from stat list.
            k = this.stat2018.length


          } else if (this.stat2018[k].FantPos == 'TE' && team.te == null) {    // Tight-end selection

            team.te = this.stat2018[k]    // Add QB to team.

            this.stat2018[k].Round  = this.currRound    // Add pick information to player object.
            this.stat2018[k].Pick   = this.currPick
            this.stat2018[k].OvPick = (this.currRound * this.draftParams.playerNum) + this.currPick

            this.picks.push(this.stat2018[k])   // Update pick array with player object.

            if (this.currPick == this.draftParams.playerNum) {    // Update current round and pick.
              this.currRound++
              this.currPick = 1
            } else {
              this.currPick++
            }

            this.stat2018.splice(k,1)   // Remove player from stat list.
            k = this.stat2018.length


          }
        }
      },
      displayTeam(team) {
        this.viewTeam = team
        console.log(this.viewTeam)
      },
      logout() {
        firebase.auth().signOut().then(() => {
          this.$router.push({ name: 'Landing' })
        })
      }
    },
    created() {
      // Adjust name formatting for every player
      var i
      ff2018.forEach((player) => {
        for (i = 0; i < player.Player.length; i++) {
          if (player.Player[i] == '*' || player.Player[i] == '\\') {
            player.Player = player.Player.slice(0,i)
          }
        }
      })

      // Create teams based on draft params.
      for (i = 1; i <= this.draftParams.playerNum; i++) {
        if (i != this.draftParams.pickPos) {
          this.otherTeams.push({
            name: Number(i),
            qb: null,
            rb: [],
            wr: [],
            te: null,
            flx: [],
            k: null,
            dst: null
          })
        }
      }

      for (i = 0; i < this.draftParams.pickPos-1; i++) {
        this.cpuDraft(this.otherTeams[i])
      }

      let ref = db.collection('users')

      // Get the current user
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
  form {
    position: relative;
    z-index: 2;
  }
  .field {
    margin-bottom: 1%;
  }
  #navrow span {
    font-size: 18px;
    margin-left: 1%;
    margin-right: 1%;
  }
  .col {
    position: relative;
    z-index: 2;
  }
  #your-team, #feed {
    width: 90%;
    margin: 0% 0% 5% 5%;
  }
  #team-display {
    width: 90%;
    margin: 0% 0% 5% 5%;
  }
  li {
    text-align: left;
  }
  #other-teams {
    margin: 5% 0% 7% 0%;
    z-index: 3;
  }
  h4 {
    margin-top: 5%;
  }
  #feed-table {
    overflow: auto;
  }




  /* STYLING FROM BEFORE UI UPDATE */
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
  .feed, .center-ui, .team-info {
    height: 72.5vh;
    overflow: auto;
  }
  .board, .player-info {
    height: 50vh;
  }
  .players {
    height: 40vh;
    overflow: auto;
  }
   .player-info {
    font-size: 0.9em;
  }
  .drafting .divider {
    width: 75%;
    margin-left: 12.5%;
    margin-top: 2%;
  }
</style>
