<template>
  <div id="app">
    <NavBar />
    <router-view/>
    <!-- <Footer /> -->
  </div>
</template>

<script>
  import NavBar from '@/components/constants/Navbar'
  import Footer from '@/components/constants/Footer'
  export default {
    name: 'App',
    components: {
      NavBar,
      Footer
    }
  }
</script>

<style>

</style>
