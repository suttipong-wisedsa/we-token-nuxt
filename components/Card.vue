<template>
  <div>
    <v-card class="d-flex pa-5 justify-center " outlined tile>
      <p>
        WE Token, a decentralized digital asset lending business developed by WESERVE PLATFORM Co.,Ltd. is a platform
        that incorporates centralized finance with decentralized finance (CeDeFi).
      </p>
    </v-card>
    <v-container>
      <v-row justify="center">
        <v-col v-for="(item, index) in card" :key="index" cols="auto">
          <!--card-->
          <v-card height="189.66" width="250" margin-top="10" class="white mx-auto  rounded-lg">
            <div class="d-flex justify-end">
              <img class="my-3 mx-2" src="../static/Weserve Token-06.png" />
            </div>
            <v-row class="fill-height" justify="center">
              <div class="box">
                <h1>{{item.title}}</h1>
                <p class="yellow--text">{{item.detail}}</p>
              </div>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>

</template>

<style scoped>

</style>

<script>
export default {
  data() {
    return {
      card: [{
        photo: "Weserve Token-06.png",
        title: "B226.9M", detail: "Total WE Token Trading Volume"
      }, {
        photo: "Weserve Token-06.png",
        title: "+.5.30%", detail: "24hr Charge"
      }, {
        photo: "Weserve Token-06.png",
        title: "B45.38", detail: "WE Token Price"
      }, {
        photo: "Weserve Token-06.png",
        title: "3,529", detail: "WE Token Holders"
      }],
    };
  }
}
</script>
