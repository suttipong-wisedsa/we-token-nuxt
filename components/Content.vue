<template>
  <v-app>
    <div class="back">
      <div class="center">
        <h1>{{ title }}</h1>
        <div class="container">
          <p class="mx-10 hometext--text" style="font-size:2vw; ">Discover the next-level digital asset</p>
          <p class="hometext--text" style="font-size:2vw"> trading experience on a regulated platform.</p>
        </div>
      </div>
    </div>
    <Card />
    <!-- <Trading/> -->
    <Partners />
    <News />
    <Cardfooter />
    <HomeFoort />
  </v-app>
</template>

<script>
import Card from "./Card.vue";
import Nav from "./Nav.vue";
import Partners from "./Partners.vue";
import News from "./News.vue";
import Cardfooter from "./Cardfooter.vue";
import HomeFoort from "./Home-foort.vue";
import Trading from "./Trading.vue";
export default {
  comments: { Card },
  name: "Nav",
  data() {
    return {
      title: "WESERVE TOKEN (WE)",
    };
  },
  components: { Card, Nav, Partners, News, Cardfooter, HomeFoort, Trading },
};
</script>

<style scoped>
.foot-photo {
  width: 100%;
  height: 7rem;
  object-fit: fill;
}

.back {
  background-image: url("../static/bghome.png");
  width: 100%;
  background-size: 100% 100%;
  height: 70rem;
  position: relative;
}

.center {
  position: absolute;
  top: 18.75rem;
  left: 10rem;
}

h1 {
  font: normal normal bold 4.375rem/106px Poppins;
  letter-spacing: 3.5px;
  color: #6b420b;
  opacity: 1;
}

.head-photo {
  position: absolute;
  bottom: -0.5vh;
  left: -1vw;
}

@media screen and (max-width: 820px) {
  .back {
    background-image: url("../static/landing.jpg");
    width: 100%;
    height: 30.063rem;
    position: relative;
  }

  .center {
    position: absolute;
    top: 2rem;
    left: 1.188rem;
  }

  h1 {
    color: #6b420b;
    font-size: 1.563rem;
  }

  .contsiner {
    color: #6b420b;
    font-size: 1.563rem;
  }
}
</style>