<template>
  <div class="profile">
    <h2>This is the profile</h2>
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
        profile: null,
        feedback: null
      }
    }
  }
</script>

<style>

</style>
