<template>
  <div class="profile">
    <h2 class="center" v-if="user">This is the profile of {{ user.user_email }}</h2>
  </div>
</template>

<script>
  import slugify from 'slugify'
  import db from '@/firebase/init'
  import firebase from 'firebase'

  export default {
    name: 'Profile',
    data() {
      return {
        user: null,
        feedback: null
      }
    },
    created() {
      let ref = db.collection('users')

      // Get the current user
      ref.where('user_id', '==', firebase.auth().currentUser.uid).get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.user = doc.data(),
          this.user.id = doc.id
          console.log(this.user)
        })
      })

      // ref.doc(this.$route.params.id).get()
      // .then(user => {
      //   this.user = user.data()
      // })

    }
  }
</script>

<style>

</style>
