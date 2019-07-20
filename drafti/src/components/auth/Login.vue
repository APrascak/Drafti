<template>
  <div class="my-container">
    <h1 class="center"><router-link class="white-text" :to="{ name: 'Landing' }">Drafti</router-link></h1>
    <div class="divider"></div>
    <div id="navrow" class="row">
      <span><router-link class="white-text" :to="{ name: 'MockDraft' }">Mock Draft</router-link></span>
      <span><router-link class="white-text" :to="{ name: 'Landing' }">Statistics</router-link></span>
      <span><router-link class="white-text" :to="{ name: 'Landing' }">More</router-link></span>
      <span><router-link class="white-text" :to="{ name: 'Landing' }">Profile</router-link></span>
    </div>
    <div class="row">
      <div class="col m4 l4 offset-m4 offset-l4">
        <form @submit.prevent="login" class="card-panel hoverable center">
          <h2 class="center black-text darken-4">Login</h2>
          <div class="field">
            <label for="email" class="left black-text">Email:</label>
            <input type="email" name="email" v-model="email">
          </div>
          <div class="field">
            <label for="email" class="left black-text">Password:</label>
            <input type="password" name="password" v-model="password">
          </div>
          <p class="center red-text" v-if="feedback">{{ feedback }}</p>
          <div class="field pulse">
            <button class="btn black">Login</button>
          </div>
        </form>
      </div>
    </div>
    <img src="../../assets/Background-PaintedField.jpg">
  </div>

</template>

<script type="text/javascript">
  import db from '@/firebase/init'
  import firebase from 'firebase'

  export default {
    name: 'Login',
    data() {
      return {
        email: null,
        password: null,
        feedback: null
      }
    },
    methods: {
      login() {
        if (this.email && this.password) {
          firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .then(cred => {
            console.log(cred.user)
            this.$router.push({ name: 'Home' })
          })
          .catch(err => {
            this.feedback = err.message
          })
          this.feedback = null
        } else {
          this.feedback = 'Please fill in both fields.'
        }
      }
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
