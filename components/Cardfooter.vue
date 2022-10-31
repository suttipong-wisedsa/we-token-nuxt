<template>
  <div class="main-bg">
    <v-container>
      <v-row class="mt-10">
        <v-col class="d-flex justify-center">
          <h1 class="textcardfooter1--text" style="font-family: 'Mitr', sans-serif;" >{{$t("trusted")}}</h1>
        </v-col>
      </v-row>
      <v-col class="d-flex justify-center mb-10 ">
        <p class="homecard--text" style="font-family: 'Mitr', sans-serif;">{{$t("reason")}}</p>
      </v-col>
      <v-row justify="center">
        <v-col >
          <!--card-->
          <v-card height="189.66" width="250" class=" mx-auto cardfooter d-flex align-center">
            <v-row justify="center">
              <v-col class="d-flex justify-center align-center ">
                <img :src="require(`@/static/card3.png`)" />
              </v-col>
            </v-row>
          </v-card>
          <v-row>
            <v-col class="my-5 px-5">
              <h1 class="texttitle--text" style="font-family: 'Mitr', sans-serif;">{{ $t("storage") }}</h1>
              <p class="title--text" style="font-family: 'Mitr', sans-serif;">{{ $t("titlestorage") }}</p>
            </v-col>
          </v-row>
        </v-col>
        <v-col >
          <!--card-->
          <v-card height="189.66" width="250" class=" mx-auto cardfooter d-flex align-center">
            <v-row justify="center">
              <v-col class="d-flex justify-center align-center ">
                <img :src="require(`@/static/card2.png`)" />
              </v-col>
            </v-row>
          </v-card>
          <v-row>
            <v-col class="my-5 px-5">
              <h1 class="texttitle--text" style="font-family: 'Mitr', sans-serif;">{{ $t("protected") }}</h1>
              <p class="title--text" style="font-family: 'Mitr', sans-serif;" >{{ $t("titleprotected") }}</p>
            </v-col>
          </v-row>
        </v-col>
        <v-col >
          <!--card-->
          <v-card height="189.66" width="250" class=" mx-auto cardfooter d-flex align-center">
            <v-row justify="center">
              <v-col class="d-flex justify-center align-center ">
                <img :src="require(`@/static/card1.png`)" style="width:140px"/>
              </v-col>
            </v-row>
          </v-card>
          <v-row>
            <v-col class="my-5 px-5">
              <h1 class="texttitle--text" style="font-family: 'Mitr', sans-serif; ">{{ $t("industry") }}</h1>
              <p class="title--text" style="font-family: 'Mitr', sans-serif;" >{{ $t("titleindustry") }}</p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import HomeFoort from "./Home-foort.vue";
import Partners from "./Partners.vue";
export default {
  data() {
    return {
      card: [
        {
          photo: "card3.png",
          title: "Secure storage",
          detail: "We store the vast majority of the digital assets in secure offline storage.",
        },
        {
          photo: "card2.png",
          title: "Protected by insurance",
          detail: "Cryptocurrency stored on our servers is covered by our insurance policy.",
        },
        {
          photo: "card1.png",
          title: "Industry best practices",
          detail: "WE Token supports a variety of the most popular digital currencies.",
          width:140
        },
      ],
      text: "WE Token, a decentralized digital asset lending business developed by WESERVE PLATFORM Co.,Ltd. is a platform that incorporates centralized finance with decentralized finance (CeDeFi).",
    };
  },
  components: { HomeFoort, Partners }
};
</script>
<style>
.main-bg {
  background-color: #f4f4f4
}
</style>
