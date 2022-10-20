<template>
  <div>
    <div class="back">
      <!-- <img class="coin" src="../static/Group 5266.png" /> -->
      <div class="center">
        <h1>{{title}}</h1>
        <div class="container">
          <p class="mx-5">Discover the next-level</p>
          <p>digital asset trading experience</p>
          <p class="mx-5">on a regulated platform.</p>
        </div>
      </div>
      <!-- <div class="head-photo">
        <img class="foot-photo" src="../static/Path 1910.png" />
      </div> -->
    </div>
    <Card />
  </div>
</template>

<script>
import Card from "./Card.vue";
import Nav from "./Nav.vue";
export default {
  comments: { Card },
  name: "Nav",
  data() {
    return {
      title: "WESERVE TOKEN (WE)",
    };
  },
  components: { Card, Nav },
};
</script>

<style scoped>
.foot-photo {
  width: 100%;
  height: 7rem;
  object-fit: fill;
}

.back {
  background-image: url("../static/back.png");
  width: 100%;
  background-size: 100% 100%;
  height: 50rem;
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
  color: #6B420B;
  opacity: 1;

}


.head-photo {
  position: absolute;
  bottom: -0.50vh;
  left: -1vw;

}


@media screen and (max-width: 820px) {
  .back {
    background-image: url("../static/bg-mb.png");
    width: 100%;
    height: 20.063rem;
    position: relative;
  }

  .center {
    position: absolute;
    top: 2rem;
    left: 1.188rem;
  }

  h1 {
    color: #6B420B;
    font-size: 1.563rem;
  }

  .contsiner {
    color: #6B420B;
    font-size: 1.563rem;
  }
}
</style>
