<template id="NavBar">
  <nav>
    <div class="nav-wrapper teal darken-3 z-depth-2">
      <a class="brand-logo center"><router-link :to="{ name: 'Home' }">Drafti</router-link></a>
      <ul id="nav-mobile" class="left">
        <li><a href="#">Stats by Position</a></li>
        <li><a href="#">Rookies</a></li>
        <li><a href="#">Defenses</a></li>
      </ul>
      <ul id="nav-mobile" class="right">
        <li v-if="user"><router-link :to="{ name: 'ViewProfile', params: { id: user.uid }}">View Profile</router-link></li>
        <li v-if="!user"><router-link :to="{ name: 'Login' }">Login</router-link></li>
        <li v-if="!user"><router-link :to="{ name: 'SignUp' }">Signup</router-link></li>
        <li v-if="user"><a @click="logout">Logout</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
  import firebase from 'firebase'
  import db from '@/firebase/init'

  export default {
    name: 'NavBar',
    data() {
      return {
        user: null
      }
    },
    methods: {
      logout() {
        firebase.auth().signOut().then(() => {
          this.$router.push({ name: 'Login' })
        })
      }
    },
    created() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.user = user
          console.log(user)
        } else {
          this.user = null
        }
      })
    }
  }
</script>

<style>

</style>
