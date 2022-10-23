<template>
  <v-app>
    <div class="main">
      <v-container>
        <v-col class="d-flex justify-center" style="height: 15vw">
          <p class="homecard--text" style="font-size: 2vw; text-indent: 50px">
            WE Token, a decentralized digital asset lending business developed
            by WESERVE PLATFORM Co.,Ltd. is a platform that incorporates
            centralized finance with decentralized finance (CeDeFi).
          </p>
        </v-col>
      </v-container>
      <v-container>
        <v-row justify="center">
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
              height="13rem"
              width="15rem"
            >
              <v-text class="d-flex justify-end">
                <img class="my-3 mx-2" src="../static/Weserve Token-06.png" />
              </v-text>
              <v-row justify="center">
                <h1 class="">{{ item.title }}</h1>
                <p style="color: #fdd000; font-size: 3.5vw">
                  {{ item.detail }}
                </p>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
        <!-- <Trading /> -->
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