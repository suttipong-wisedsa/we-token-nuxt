<template>
  <v-app>
    <div class="back">
      <div class="center">
        <div class="container"></div>
      </div>
    </div>
    <Footer/>
  </v-app>
</template>

<style scoped>
.foot-photo {
  width: 100%;
  height: 7rem;
  object-fit: fill;
}

.back {
  background-image: url("../static/landing3.png");
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
    background-image: url("../static/landing3.png");
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
