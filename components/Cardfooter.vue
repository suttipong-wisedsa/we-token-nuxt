<template>
  <div class="main-bg">
    <v-container>
      <v-row >
        <v-col class="d-flex justify-center">
          <h1>The most trusted cryptocurrency platform</h1>
        </v-col>
      </v-row>
      <v-row >
        <v-col class="d-flex justify-center">
          <p>The most trusted cryptocurrency platform</p>
        </v-col>
      </v-row>
        <v-row justify="center">
          <v-col v-for="(item, index) in card" :key="index">
            <!--card-->           
              <v-card height="189.66" width="250" class="black mx-auto ">
                <v-row  justify="center" >
                  <v-col class="d-flex justify-center align-center">
                    <img src="../static/facebook.png"/>
                  </v-col>
                </v-row>
              </v-card>
              <v-row>
                <v-col>
                  <h1>{{item.title}}</h1>
                  <p>{{item.detail}}</p>
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
                    photo: "Weserve Token-06.png",
                    title: "Secure storage",
                    detail: "We store the vast majority of the digital assets in secure offline storage.",
                },
                {
                    photo: "Weserve Token-06.png",
                    title: "Protected by insurance",
                    detail: "Cryptocurrency stored on our servers is covered by our insurance policy.",
                },
                {
                    photo: "Weserve Token-06.png",
                    title: "Industry best practices",
                    detail: "WE Token supports a variety of the most popular digital currencies.",
                },
            ],
            text: "WE Token, a decentralized digital asset lending business developed by WESERVE PLATFORM Co.,Ltd. is a platform that incorporates centralized finance with decentralized finance (CeDeFi).",
        };
    },
    components: { HomeFoort, Partners }
};
</script>
<style>
.main-bg{
  background-color:#FFFFFF;
}
</style>
