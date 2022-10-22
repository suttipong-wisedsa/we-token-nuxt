<template>
  <v-app>
    <div class="main">
      <v-container class="d-flex justify-center align-center">
        <v-conten class="mx-15">
          <v-text class="text mx-10">WE Token, a decentralized digital asset lending business</v-text>
          <v-text class="text">developed by WESERVE PLATFORM Co.,Ltd. is a platform that incorporates</v-text>
          <v-text class="text mx-10">centralized finance with decentralized finance (CeDeFi).</v-text>
        </v-conten>
      </v-container>
      <v-container>
        <v-row justify="center">
          <v-col v-for="(item, index) in card" :key="index"  cols="auto">
            <!--card-->       
              <v-card class="model mx-10" height="313px" width="311px">
                <v-text class="d-flex justify-end">
                  <img class="my-3 mx-2" src="../static/Weserve Token-06.png" />
                </v-text>
                <v-row  justify="center">
                  <div class="box">
                    <h1>{{item.title}}</h1>
                    <p style="color:#FDD000">{{item.detail}}</p>
                  </div>
                </v-row>
              </v-card>
          </v-col>
        </v-row>
        <div class="d-flex align-center justify-center my-15">
          <img src="../static/GroupZ.png" />
        </div>
      </v-container>
     
    </div>
  </v-app>
</template>

<style scoped>

.main {
  background-color: #F4F4F4;
}

.text {
  font: normal normal normal 2vw/53px Mitr;
  letter-spacing: 0px;
  color: #767484;
  opacity: 1;
}

.model {
  border-right: 7px solid #FDD000;
  border-bottom: 7px solid #FDD000;
  border-radius: 14px;

}
</style>

<script>
import Partners from "./Partners.vue";
import Cardfooter from "./Cardfooter.vue";

export default {
  data() {
    return {
      card: [{
        photo: "Weserve Token-06.png",
        title: "B226.9M",
        detail: "Total WE Token Trading Volume"
      }, {
        photo: "Weserve Token-06.png",
        title: "+.5.30%",
        detail: "24hr Charge"
      }, {
        photo: "Weserve Token-06.png",
        title: "B45.38",
        detail: "WE Token Price"
      }, {
        photo: "Weserve Token-06.png",
        title: "3,529",
        detail: "WE Token Holders"
      }],
      text: "WE Token, a decentralized digital asset lending business developed by WESERVE PLATFORM Co.,Ltd. is a platform that incorporates centralized finance with decentralized finance (CeDeFi)."
    };
  },
  components: { Partners, Cardfooter }
}
</script>
