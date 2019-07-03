<template>
  <div>
    <!-- Top Parallax -->
    <div class="parallax-container">
      <div class="parallax"><img src="../assets/ben-hershey-B4XZxcZcTsI-unsplash.jpg"></div>
    </div>

    <!-- Statistics section. -->
    <div class="section white z-depth-1">
      <div class="container">
        <h2 class="center">Statistical Analysis</h2>
      </div>
    </div>

    <!-- Second parallax -->
    <div class="parallax-container">
      <div class="parallax"><img src="../assets/field-field-line-grass-54567.jpg"></div>
    </div>

    <!-- Mock Draft section -->
    <div class="section transparent lighten-3 z-depth-1">
      <div class="row container valign-wrapper">
        <h2>Mock Draft Simulator</h2>
      </div>
    </div>

    <!-- Third parallax -->
    <div class="parallax-container">
      <div class="parallax"><img src="../assets/Background-PaintedField.jpg"></div>
    </div>

    <!-- Blog section -->
    <div class="section white z-depth-1">
      <div class="row container valign-wrapper">
        <div class="col m3 l3 center">
          <a class="waves-effect waves-light btn-large teal darken-3">Check it out</a>
        </div>
        <div class="col m9 l9">
          <h2>Weekly Fantasy Blog</h2>
          <span>In-depth player and team analysis based on:</span>
          <ul>
            <li>Recent Player Updates</li>
            <li>Statistical Models</li>
            <li>Historical NFL Patterns</li>
            <li>Expert Analysis</li>
          </ul>
          <span>Sign up for our email list: </span>
        </div>
      </div>
    </div>

    <!-- Fourth (last) parallax -->
    <div class="parallax-container">
      <div class="parallax"><img src="../assets/39506381-e1475104443236.jpg"></div>
    </div>

    <!-- Personal section -->
    <div class="section transparent lighten-3 z-depth-1">
      <div class="row container valign-wrapper">
        <h2>About</h2>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {

      }
    },
    mounted() {
      M.AutoInit() // That way, it is only initialized when the component is mounted
    }
  }
</script>

<style>
  .parallax-container {
    height: 500px;
  }
  .section {
    height: 400px;
  }

</style>
