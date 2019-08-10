<template>
  <div class="my-container">
    <div id="content">
      <h1 class="center"><router-link class="white-text" :to="{ name: 'Home' }">Drafti</router-link></h1>
      <div class="divider"></div>
      <div id="navrow" class="row">
        <span><router-link class="white-text" :to="{ name: 'MockDraft' }">Mock Draft</router-link></span>
        <span><router-link class="white-text" :to="{ name: 'Landing' }">Statistics</router-link></span>
        <span><router-link class="white-text" :to="{ name: 'Landing' }">More</router-link></span>
        <span><router-link class="white-text" :to="{ name: 'Landing' }">Profile</router-link></span>
      </div>
      <div class="row">
        <div class="col m4 l4 offset-m4 offset-l4">
          <form @submit.prevent="createMock" class="card-panel hoverable">
            <h3 class="teal-text text-darken-4" >Create Mock Draft</h3>
            <div class="row">
              <div class="col m8 l8 offset-m2 offset-l2">
                <div class="field">
                  <label for="mockName" class="left">Draft Name:</label>
                  <input type="text" placeholder="Name" id="mockName" v-model="mockName">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col m8 l8 offset-m2 offset-l2 field">
                  <label class="left" for="playerNum">Number of Players:</label>
                  <select name="playerNum" v-model="playerNum">
                    <option value="8" selected>8</option>
                    <option value="10">10</option>
                    <option value="12">12</option>
                    <option value="16">16</option>
                  </select>
              </div>
            </div>
            <div class="row">
              <div class="col m8 l8 offset-m2 offset-l2 field">
                  <label class="left" for="pickPos">Pick Position:</label>
                  <input type="number" name="pickPos" v-model="pickPos">
              </div>
            </div>
            <div class="row">
              <div class="col m8 l8 offset-m2 offset-l2 field">
                  <label class="left" for="wrNum">Number of WRs Per Team:</label>
                  <select name="wrNum" v-model="wrNum">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
              </div>
            </div>
            <div class="row">
              <div class="col m8 l8 offset-m2 offset-l2 field">
                  <label class="left" for="rbNum">Number of RBs Per Team:</label>
                  <select name="rbNum" v-model="rbNum">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
              </div>
            </div>
            <div class="row">
              <div class="col m8 l8 offset-m2 offset-l2 field">
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
      </div>
    </div>
    <img src="../../assets/Background-PaintedField.jpg">
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
  span {
    font-size: 18px;
    margin-left: 1%;
    margin-right: 1%;
  }
</style>
