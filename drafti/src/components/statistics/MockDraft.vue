<template>
  <div class="center container mock">
    <form @submit.prevent="createMock" class="card-panel hoverable">
      <h3 class="teal-text text-darken-4" >Create Mock Draft</h3>
      <!-- Field for name of draft. -->
      <div class="row">
        <div class="col m6 l6 offset-m3 offset-l3">
          <div class="field">
            <label for="mockName" class="left">Draft Name:</label>
            <input type="text" placeholder="Name" id="mockName" v-model="mockName">
          </div>
        </div>
      </div>
      <!-- Field for number of players. -->
      <div class="row">
        <div class="col m6 l6 offset-m3 offset-l3 field">
            <label class="left" for="playerNum">Number of Players:</label>
            <select name="playerNum" v-model="playerNum">
              <option value="8" selected>8</option>
              <option value="10">10</option>
              <option value="12">12</option>
              <option value="16">16</option>
            </select>
        </div>
      </div>
      <!-- Field for draft position. -->
      <div class="row">
        <div class="col m6 l6 offset-m3 offset-l3 field">
            <label class="left" for="pickPos">Pick Position:</label>
            <input type="number" name="pickPos" v-model="pickPos">
        </div>
      </div>
      <!-- Field for number of WRs. -->
      <div class="row">
        <div class="col m6 l6 offset-m3 offset-l3 field">
            <label class="left" for="wrNum">Number of WRs Per Team:</label>
            <select name="wrNum" v-model="wrNum">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
        </div>
      </div>
      <!-- Field for number of RBs. -->
      <div class="row">
        <div class="col m6 l6 offset-m3 offset-l3 field">
            <label class="left" for="rbNum">Number of RBs Per Team:</label>
            <select name="rbNum" v-model="rbNum">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
        </div>
      </div>
      <!-- Field for number of FLEXes. -->
      <div class="row">
        <div class="col m6 l6 offset-m3 offset-l3 field">
            <label class="left" for="flexNum">Number of FLEX Positions Per Team:</label>
            <select name="flexNum" v-model="flexNum">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
        </div>
      </div>
      <ul class="">
        <li>Each team has exactly 1 QB, TE, K, and D/ST position</li>
        <li>FLEX positions can include RB, WR, or TE</li>
      </ul>
      <div class="field">
        <button class="btn teal darken-4">Start Drafting</button>
      </div>
    </form>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'MockDraft',
    data() {
      return {
        mockName: null,
        playerNum: null,
        pickPos: null,
        wrNum: null,
        rbNum: null,
        flexNum: null
      }
    },
    methods: {
      createMock() {
        console.log(this.mockName)
        console.log(this.playerNum)
        console.log(this.pickPos)
        this.$router.push({
          name: 'Drafting',
          params: {
            mockName: this.mockName,
            playerNum: this.playerNum,
            pickPos: this.pickPos,
            wrNum: this.wrNum,
            rbNum: this.rbNum,
            flxNum: this.flexNum
          }})
      }
    },
    mounted() {
      M.AutoInit()
    }
  }
</script>

<style media="screen">
  .mock {
    padding-top: 2.5%;
    max-width: 1000px;
  }
  .mock button {
    margin-top: 1%;
  }
</style>
