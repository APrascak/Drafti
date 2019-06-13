<template>
  <div class="center container login">
    <form @submit.prevent="login" class="card-panel hoverable">
      <h2 class="center blue-grey-text darken-4">Login</h2>
      <div class="field">
        <label for="email" class="left">Email:</label>
        <input type="email" name="email" v-model="email">
      </div>
      <div class="field">
        <label for="email" class="left">Password:</label>
        <input type="password" name="password" v-model="password">
      </div>
      <p class="center red-text" v-if="feedback">{{ feedback }}</p>
      <div class="field pulse">
        <button class="btn deep-purple">Login</button>
      </div>
    </form>
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

<style>
  .login {
    max-width: 550px;
    margin-top: 60px;
  }
  .login .field {
    margin-bottom: 20px;
  }
</style>
