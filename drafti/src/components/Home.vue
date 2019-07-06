<template>
  <div id="home">
    <!-- Top Parallax -->
    <div class="parallax-container">
      <div class="parallax"><img src="../assets/ben-hershey-B4XZxcZcTsI-unsplash.jpg"></div>
    </div>

    <!-- Statistics section. -->
    <div id="stat-section" class="section white z-depth-1">
      <div class="row container">
        <h2>Statistical Analysis</h2>
        <div class="divider stat-divider teal"></div>
        <p>Drafti's dynamic visualization tools provide a greater understanding the connections between pre-season player metrics and yearly PPR totals.
          Utilize various graphs, charts, and diagrams to find relationships between variables like:</p>
        <ul>
          <li>ADP (Average Draft Position)</li>
          <li>VBD (Value Based Drafting)</li>
          <li>Offensive Team Ratings</li>
          <li>Target / Carry Volume</li>
          <li>ESPN Pre-Season Rankings</li>
        </ul>
        <div class="center">
          <a class=" waves-effect waves-light btn-large teal darken-3 stat-btn">
            <router-link class="white-text" :to="{ name: 'Visualization'}">Get Started Now</router-link>
          </a>
        </div>
      </div>
    </div>

    <!-- Second parallax -->
    <div class="parallax-container">
      <div class="parallax"><img src="../assets/field-field-line-grass-54567.jpg"></div>
    </div>

    <!-- Mock Draft section -->
    <div class="section transparent lighten-3 z-depth-1">
      <div class="row container">
        <h2 class="">Mock Draft Simulator</h2>
        <div class="divider teal"></div>
        <p class="right">Simulate your fantasy team expectations utilizing custom draft league settings.
        Drafti's CPU drafting algorithms accounts for the expected decision made at every position in the draft.
        CPU drafting will continue to be updated based on current NFL player expectations. Here are some of the
        features of our Mock Draft tool:
        </p>
        <ul>
          <li>8,10,12, or 16 Player Leagues</li>
          <li>Draft Pick Position Selection</li>
          <li>Choice Between 1,2,3 Players for RB,WR,FLEX Positions</li>
        </ul>
        <div class="center">
          <a class=" waves-effect waves-light btn-large teal darken-3 stat-btn">
            <router-link class="white-text" :to="{ name: 'MockDraft'}">Start Drafting</router-link>
          </a>
        </div>
      </div>
    </div>

    <!-- Third parallax -->
    <div class="parallax-container">
      <div class="parallax"><img src="../assets/Background-PaintedField.jpg"></div>
    </div>

    <!-- Blog section -->
    <div class="section white z-depth-1 valign-wrapper">
      <div class="row container valign-wrapper">
        <div class="col m3 l3 center">
          <div class="center">
            <a class=" waves-effect waves-light btn-large teal darken-3 stat-btn">
              <router-link class="white-text" :to="{ name: 'Blog'}">Check It Out</router-link>
            </a>
          </div>
        </div>
        <div class="col m9 l9">
          <h2>Weekly Fantasy Blog</h2>
          <div class="divider teal">

          </div>
          <p>Weekly blog updates every Friday at 4:00pm EST based on expert analysis & recent player developments.
          Learn more about player projections, predictive modeling, and more!</p>
          <span>Our information is based on:</span>
          <ul>
            <li>Recent Player Updates</li>
            <li>Statistical Models</li>
            <li>Historical NFL Patterns</li>
            <li>Expert Analysis</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Fourth (last) parallax -->
    <div class="parallax-container">
      <div class="parallax"><img src="../assets/39506381-e1475104443236.jpg"></div>
    </div>

    <!-- Drafti about section -->
    <div class="section about-section transparent lighten-3 z-depth-1">
      <div class="row about-section container">
        <h2 class="teal-text text-darken-3 center">About</h2>
        <div class="divider black"></div>
        <div class="row info-section">
          <div class="col m6 l6">
            <p>Drafti was initially started in May 2019 with the goal of providing simple, useful information for the 2019 NFL Season.
            After elaborating on which tools help provide the most concise information, Drafti was focused on providing 3 main tools:
            data visualization, mock drafting, and expert opinions.</p>
          </div>
          <div class="col m6 l6">
            <p>This application was developed by Alex Prascak, a Computer Science Student at the University of Florida.
            Feel free to reach out with any questions or interests:</p>
            <li><a href="mailto:aprascak@ufl.edu">Email Me!</a></li>
            <li><a href="https://www.linkedin.com/in/aprascak/">Message me on LinkedIn!</a></li>
            <p>My other work can be accessed through my personal website or Github:</p>
            <li><a href="http://www.alexprascak.com">Personal Site</a></li>
            <li id="last-li"><a href="https://github.com/APrascak">Github</a></li>
          </div>
        </div>
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
  #home #stat-section {
    height: 410px;
  }
  #home .material-icons {
    font-size: 4rem;
    margin-top: 60%;
  }
  #home .mock-text {
    margin-bottom: 0;
  }
  #home .about-section {
    margin-bottom: 0;
  }
</style>
