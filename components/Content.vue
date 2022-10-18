<template>
<div>
   <div class="back">
    <img class="coin" src="../static/Group 5266.png" />
    <div class="text-content">
      <h1>{{ title }}</h1>
      <p >Discover the next-level digital asset</p>
      <p >trading experience on a regulated platfrom</p>
      <img class="coin2" src="../static/Group 5266.png" />
    </div>
    <img class="foot-photo" src="../static/Path 1910.png" />
  </div> 
  <Card />
</div>
</template>

<script>
import Card from './Card.vue';
import Nav from './Nav.vue';
export default {
    comments:{Card},
    name: "Nav",
    data() {
        return {
            title: "WESERVE TOKEN (WE)",
        };
    },
    components: { Card, Nav }
};
</script>

<style scoped>
.back {
  background-image: url("../static/back.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 1300px;
  overflow: hidden;
  position: relative;
}
.text-content {
  position: absolute;
  top: 403px;
  left: 153px;
  font-size: 25px;
}
.foot-photo {
  position: absolute;
  top: 895px;
  left: 1px;
  opacity: 1;
  left: -76.078125px;
  width: 2176px;
  height: 544px;
}
.coin {
  width: 204px;
  height: 226px;
  transform: matrix(0.97, -0.24, 0.24, 0.97, 0, 0);
  opacity: 0.52;
}
h1 {
  font: normal normal bold 70px/106px Poppins;
  letter-spacing: 3.5px;
  color: #6b420b;
  opacity: 1;
}
.coin2 {
  position: absolute;
  top: 10px;
  left: 1055px;
  width: 682px;
  height: 754px;
  transform: matrix(0.97, 0.24, -0.24, 0.97, 0, 0);
}
p{
    text-align: center;
font: normal normal normal 35px/53px Poppins;
letter-spacing: 0.88px;
color: #6B420B;
opacity: 1;
}
</style>
