<template>
  <v-app>
    <div class="main">
      <v-container>
        <v-col class="d-flex justify-center" style="height: 15vw">
          <p class="homecard--text hidden-sm-and-down" style="font-size: 2vw; text-indent: 50px; color:#767484">
            WE Token, a decentralized digital asset lending business developed
            by WESERVE PLATFORM Co.,Ltd. is a platform that incorporates
            centralized finance with decentralized finance (CeDeFi).
          </p>
          <p class="homecard--text hidden-md-and-up " style="font-size: 3vw; text-indent: 50px; color:#767484;">
            WE Token, a decentralized digital asset lending business developed
            by WESERVE PLATFORM Co.,Ltd. is a platform that incorporates
            centralized finance with decentralized finance (CeDeFi).
          </p>
        </v-col>
      </v-container> 
      <v-container>
        <v-row justify="center my-10">
          <v-col v-for="(item, index) in card" :key="index" cols="auto">
            <!--card pc-->
            <v-card
              class="model mx-10 hidden-sm-and-down"
              height="13rem"
              width="12rem"
            >
              <v-text class="d-flex justify-end">
                <img class="my-3 mx-2" src="../static/Weserve Token-06.png" />
              </v-text>
              <v-col justify="center">
                <h1>{{ item.title }}</h1>
                <p style="color: #fdd000" class="text-center">{{ item.detail }}</p>
              </v-col>
            </v-card>
            <!--card mobile-->
            <v-card
              class="model mx-10 hidden-md-and-up"
              height="12rem"
              width="14rem"
            >
              <v-text class="d-flex justify-end">
                <img class="my-3 mx-2" src="../static/Weserve Token-06.png" />
              </v-text>
              <v-row justify="center">
                <h1>{{ item.title }}</h1>
              </v-row>
              <v-col>
                <p style="color: #fdd000" class="text-center">{{ item.detail }}</p>
              </v-col>
            </v-card>
          </v-col>
          <Trading />
        </v-row>
      </v-container>
    </div>
  </v-app>
</template>
<style scoped>
.main {
  background-color: #f4f4f4;
}

.text {
  font: normal normal normal 2vw/53px Mitr;
  letter-spacing: 0px;
  color: #767484;
  opacity: 1;
}

.model {
  border-right: 7px solid #fdd000;
  border-bottom: 7px solid #fdd000;
  border-radius: 14px;
}
</style>

<script>
import Partners from "./Partners.vue";
import Cardfooter from "./Cardfooter.vue";
import Trading from "./Trading.vue";

export default {
  data() {
    return {
      card: [
        {
          photo: "Weserve Token-06.png",
          title: "B226.9M",
          detail: "Total WE Token Trading Volume",
        },
        {
          photo: "Weserve Token-06.png",
          title: "+.5.30%",
          detail: "24hr Charge",
        },
        {
          photo: "Weserve Token-06.png",
          title: "B45.38",
          detail: "WE Token Price",
        },
        {
          photo: "Weserve Token-06.png",
          title: "3,529",
          detail: "WE Token Holders",
        },
      ],
      text: "WE Token, a decentralized digital asset lending business developed by WESERVE PLATFORM Co.,Ltd. is a platform that incorporates centralized finance with decentralized finance (CeDeFi).",
    };
  },
  components: { Partners, Cardfooter, Trading },
};
</script>