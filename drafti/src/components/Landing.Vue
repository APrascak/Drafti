<template>
  <div class="my-container">
    <h1 class="white-text">Welcome to Drafti</h1>
    <div class="divider"></div>
    <h4 class="white-text">Fantasy Football Resources</h4>
    <h5><router-link class="white-text" :to="{ name: 'TheDraft' }">Mock Draft</router-link></h5>
    <h5 class="white-text">Fantasy Statistics</h5>
    <h5 class="white-text">And More....</h5>
    <button class="btn black"><span><router-link class="white-text" :to="{ name: 'Login' }">Login</router-link></span></button>
    <button class="btn black"><span><router-link class="white-text" :to="{ name: 'SignUp' }">Signup</router-link></span></button>
    <img src="../assets/Background-PaintedField.jpg">
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'Landing',
    data() {
      return {

      }
    },
    created() {
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
      padding: 5% 0% 0% 0%;
      position: relative;
      z-index: 2;
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
    height: 3px;
    background-color: black;
  }
  .btn {
    position: relative;
    z-index: 2;
    margin: 1% 1% 0% 1%;
  }

</style>
