<template>
  <div class="landing blue-grey lighten-1">
    <section id="top" class="center">
      <h2>Drafti Landing Page</h2>
      <div id="landing-info" class="row">
        <div class="col m3">
          <div class="card">
            <div class="card-content">
              <span>Join us today!</span>
            </div>
            <div class="card-action">
              <a href="#">Register</a>
              <a href="#">Pricing</a>
            </div>
          </div>
        </div>
        <div class="col m3">
          <div class="card xsmall">
            <div class="card-content center">
              <span>Mock Draft Tools</span>
            </div>
            <div class="card-action center">
              <a class="center" href="#">Check it out now</a>
            </div>
          </div>
        </div>
        <div class="col m3">
          <div class="card">
            <div class="card-content">
              <span>Statistics, Analysis, & More</span>
            </div>
            <div class="card-action center">
              <a href="#">Explore our Information</a>
            </div>
          </div>
        </div>
        <div class="col m3">
          <div class="card">
            <div class="card-content">
              <span>Want to learn more about our services?</span>
            </div>
            <div class="card-action center">
              <a href="#">About Us</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="content green lighten-2">

    </section>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  #top {
    height: 90vh;
  }
  #landing-info {
    padding-top: 7.5%;
    padding: 7.5% 1%;
  }
  #top h2 {
    padding-top: 10%;
  }
  .content {
    height: 100vh;
  }
</style>
