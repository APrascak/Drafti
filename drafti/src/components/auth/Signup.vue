<template>
  <div class="center container signup">
    <form @submit.prevent="signup" class="card-panel hoverable">
      <h2 class="center blue-grey-text darken-4">Signup</h2>
      <div class="field">
        <label for="username" class="left">Username:</label>
        <input type="text" name="username" v-model="username">
      </div>
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
        <button class="btn deep-purple">Sign up</button>
      </div>
    </form>
  </div>
</template>

<script>
  import slugify from 'slugify'
  import db from '@/firebase/init'
  import firebase from 'firebase'

  export default {
    name: 'Signup',
    data() {
      return {
        username: null,
        email: null,
        password: null,
        feedback: null,
        slug: null
      }
    },
    methods: {
      signup() {
        if (this.email && this.password) {
          this.slug = slugify(this.username, {
            replacement: '-',
            remove: /[$*_+~.()'"!\-:@]/g,
            lower: true
          })
          let ref = db.collection('users').doc(this.slug)
          ref.get().then(doc => {
            if (doc.exists) {
              this.feedback = 'This email is already in use'
            } else {
              firebase.auth().createUserWithEmailAndPassword(
              this.email,this.password)
              .then(cred => {
                console.log(cred)
                ref.set({
                  user_id: cred.user.uid,
                  slug: this.slug,
                  user_email: cred.user.email,
                  username: this.username
                })
              }).then(() => {
                this.$router.push({ name: 'Home' })
              })
              .catch(err => {
                console.log(err)
                this.feedback = err.message
              })
            }
          })
        } else {
          this.feedback = 'You must enter both a username and a password.'
        }
      }
    }
  }
</script>

<style>
  .signup {
    margin-top: 2%;
    max-width: 550px;
  }
</style>
