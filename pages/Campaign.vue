<template>
  <v-app>
    <div>
      <Nav />
      <v-card
        class="d-flex align-center justify-center mt-12"
        flat
        height="100"
        tile
      >
        <v-card outlined tile>
          <h1>WE TOKEN CAMPAIGN</h1>
        </v-card>
      </v-card>
      <!--Header-->
      <v-container>
        <v-row justify="center">
          <v-col v-for="(i, index) in imgs" :key="index" cols="auto">
            <!--card-->
            <div class="hover">
              <v-card @click="getPage(index)">
                <v-img
                  object-fit="cover"
                  height="266"
                  width="556"
                  opaciti="1"
                  class="white mx-auto my-8 rounded-lg"
                >
                  <img :src="require(`@/static/${i.url}`)" />
                </v-img>
                <v-card-text class="d-flex justify-space-between mb-15">
                  <v-card-text class="d-flex">
                    <img src="../static/Weserve Logo-01.png" />
                    <h1 class="">{{ i.title }}</h1>
                  </v-card-text>
                </v-card-text>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <v-title backgourd="red">
        <v-title>
          <v-img>
            <img :src="require(`@/static/${img}`)" />
          </v-img>
          <v-title>
            <h1>WESERVE</h1>
          </v-title>
        </v-title>
      </v-title>
    </div>
  </v-app>
</template>
<script>
import Footer from "~/components/Footer.vue";
import Nav from "~/components/Nav.vue";
export default {
  name: "Campaign",
  components: { Footer, Nav },
  data() {
    return {
      imgs: [
        { url: "Untitled-3.png", title: "WE TOKEN x WESERVE" },
        { url: "photo3.png", title: "WE TOKEN x WE SMART EXPRESS" },
        { url: "photo1.png", title: "WE TOKEN x Manager Dashboard" },
      ],
      img: "Weserve Logo-01.png",
      setRouter: Number,
    };
  },
  methods: {
    getPage(i) {
      this.setRouter = i;
      if (i === 0) {
        window.location.href = "/Weserve";
      } else if (i === 1) {
        window.location.href = "/Wesmart";
      } else if (i === 2) {
        window.location.href = "/ManagerDashboard";
      }
    },
  },
};
</script>

<style scoped>
.hover:hover {
  box-shadow: 0px 0px 5px 13px rgba(0, 0, 0, 0.1);
}
</style>
