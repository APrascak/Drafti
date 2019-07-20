<template id="">
  <div class="my-container">
    <div class="content">
      <h1><router-link class="white-text" :to="{ name: 'Home' }">Drafti</router-link></h1>
      <div class="divider"></div>
      <div id="navrow" class="row">
        <span><router-link class="white-text" :to="{ name: 'Landing' }">Mock Draft</router-link></span>
        <span><router-link class="white-text" :to="{ name: 'Landing' }">Statistics</router-link></span>
        <span><router-link class="white-text" :to="{ name: 'Landing' }">More</router-link></span>
        <span><router-link class="white-text" :to="{ name: 'Landing' }">Profile</router-link></span>
      </div>
      <div class="row">

      </div>
    </div>
    <img src="../assets/Background-PaintedField.jpg">
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'TheDraft',
    data() {
      return {

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
  .my-container h1 {
      position: relative;
      z-index: 2;
      margin-bottom:0%;
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
    width: 50%;
    margin-left: 25%;
    margin-top:0%;
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
</style>
