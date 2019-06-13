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
        <li><a href="#">Register</a></li>
        <li><router-link :to="{ name: 'SignUp' }">Signup</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'NavBar',
    data() {
      return {

      }
    }
  }
</script>

<style>

</style>
