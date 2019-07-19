<template>
  <div id="app">
    <router-view/>
    <!-- <Footer /> -->
  </div>
</template>

<script>
  import NavBar from '@/components/constants/Navbar'
  import Footer from '@/components/constants/Footer'
  import SideNav from '@/components/constants/SideNav'
  export default {
    name: 'App',
    components: {
      SideNav,
      NavBar,
      Footer
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* margin-top: 60px; */
  }
</style>
