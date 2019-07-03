<template>
  <div class="drafting grey lighten-2">
    <div class="row top">
      <!-- <div class="col m3 l3 offset-m3 offset-l3 top-left">
        <h4>Number of Players: </h4>
        <h4>Pick Position: </h4>
      </div>
      <div class="col m3 l3 top-right">
        <h4>Current Round: </h4>
        <h4>Current Pick: </h4>
      </div> -->

      <div class="col m4 l4 offset-m4 offset-l4">
        <div class="card teal darken-3 z-depth-2">
          <div class="card-content white-text">
            <div class="row top-ui">
              <div class="col m6 l6 top-left">
                <div class="in-top">Number of Players: </div>
                <div class="in-top">Draft Position: </div>
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
            <tr v-for="player in stat2018" :key="player.Player">
              <td>{{ player.FantPos }}</td>
              <td>{{ player.Player }}</td>
              <td>{{ player.Rk }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="col m8 l8 center-ui">
        <div class="row center-ui">
          <div class="col m8 l8 board purple lighten-2">
            <p>Test</p>
          </div>
          <div class="col m4 l4 player-info yellow lighten-3">
            <p>Player Info</p>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script type="text/javascript">
  import ff2018 from '@/assets/2018yearlyFF.json'
  export default {
    name: 'Drafting',
    props: ['mockName', 'playerNum', 'pickPos','wrNum'],
    data() {
      return {
        currRound: null,
        currPick: null,
        stat2018: ff2018,
        playerSearch: ''
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
  .drafting .feed, .center-ui {
    height: 72.5vh;
    overflow: auto;
  }
  .drafting .board, .player-info {
    height: 50vh;
  }
</style>
