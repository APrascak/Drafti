<template>
  <div class="my-container">
    <h1 class="center"><router-link class="white-text" :to="{ name: 'Home' }">Drafti</router-link></h1>
    <div class="divider"></div>
    <div id="navrow" class="row">
      <span><router-link class="white-text" :to="{ name: 'MockDraft' }">Mock Draft</router-link></span>
      <span><router-link class="white-text" :to="{ name: 'Statistics' }">Statistics</router-link></span>
      <span v-if="user"><router-link class="white-text" :to="{ name: 'Home' }">{{ user.user_email }}</router-link></span>
      <span><a href="#" class="white-text" @click="logout">Logout</a></span>
    </div>
    <div class="row">
      <div class="col s12 m4 l4 offset-m4 offset-l4">
        <div class="card-panel white z-depth-3">
          <h4><router-link class="black-text" :to="{ name: 'MockDraft'}">Mock Draft</router-link></h4>
          <div class="divider" id="home-divider"></div>
          <h4><router-link class="black-text" :to="{ name: 'Statistics'}">Statistics</router-link></h4>
        </div>
      </div>
    </div>
    <img src="../assets/Background-PaintedField.jpg">
  </div>
</template>

<script>
  import slugify from 'slugify'
  import db from '@/firebase/init'
  import firebase from 'firebase'

  export default {
    name: 'Home',
    data() {
      return {
        user: null,
        feedback: null
      }
    },
    methods: {
      logout() {
        firebase.auth().signOut().then(() => {
          this.$router.push({ name: 'Landing' })
        })
      }
    },
    created() {
      let ref = db.collection('users')

      // Get the current user.
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
      M.AutoInit() // That way, it is only initialized when the component is mounted
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
  .my-container span {
    font-size: 18px;
    margin-left: 1%;
    margin-right: 1%;
  }
  #navrow {
    margin-top: 0.5%;
  }
  .card-panel {
    z-index: 2;
    position: relative;
  }
  #home-divider {
    width: 50%;
    margin-left: 25%;
    margin-bottom: 0%;
  }
  .card-panel h4 {
    padding: 5% 0% 5% 0%;
  }
</style>
