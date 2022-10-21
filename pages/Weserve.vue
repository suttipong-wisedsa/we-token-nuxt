<template>
  <v-app>
    <Nav />
    <div class="bg">
      <v-card class="d-flex align-center mx-15 mt-12 grey grey lighten-4" flat height="50">
        <display-2><a class="text" href="/Campaign">WE TOKEN CAMPAIGN</a></display-2>
      </v-card>
      <!--Card-->
      <v-container>
        <v-row justify="center">
          <v-card width="1650" height="1100" class="my-12">
            <v-card-text class="my-4 mx-2">
              <h1>WE TOKEN x WESERVE</h1>
            </v-card-text>
            <v-img class="mx-8">
              <img src="../static/bigbg.png" />
            </v-img>
            <v-card-text class="mx-2">
              <p>01 Oct,2022</p>
            </v-card-text>
            <v-card-text class="mx-2">
              <p>{{ data }}</p>
            </v-card-text>
            <!-- <v-card-text class="mx-2">
              <p>{{ data }}</p>
            </v-card-text> -->
            <!-- <v-card-text class="mx-2">
              <p>{{ data }}</p>
            </v-card-text> -->
          </v-card>
        </v-row>
        <v-container class="mx-10 my-5">
          <!--content-->
          <h1 class="">Other WE TOKEN CAMPAIGN</h1>
          <v-container>
            <v-row>
              <v-col v-for="(i, index) in imgs" :key="index" cols="auto">
                <!--card-->
                <div class="hover">
                  <v-card @click="getPage(index)">
                    <v-img object-fit="cover" height="266" width="556" opaciti="1"
                      class="white mx-auto my-1 rounded-lg">
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
        </v-container>
      </v-container>
      <!-- <Footer /> -->
    </div>
  </v-app>
</template>

<script>
import Nav from "~/components/Nav.vue";
import Footer from "~/components/Footer.vue";
export default {
  name: "Weserve",
  components: { Nav, Footer },
  data() {
    return {
      data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id nisl finibus Leo porttitor scelerisque. Pellentesque suscipit laoreet mauris, a dignissim ex lacinia nec. Phasellus sed est quis quam interdum faucibus nec sed enim. Ut bibendum volutpat augue at porta. Vivamus placerat viverra lectus, nec mollis sem volutpat a. Duis at feugiat enim, consectetur mollis nulla. Nam felis libero, tincidunt a ultricies sit amet, ultricies sit amet felis. Phasellus at congue dolor. Mauris sed nibh et est ornare tincidunt. Sed ut tristique dui. Pellentesque iaculis sagittis lacinia. Nunc ultricies, quam et imperdiet consectetur, diam erat tincidunt ante, ut tempus felis orci et metus. Sed a diam tempor, ultricies nibh a, congue massa. Nam a justo urna.",
      imgs: [
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
  box-shadow: 2px 3px 17px 19px rgba(0, 0, 0, 0.11);
}

.text {
  text-align: left;
  font: normal normal 800 23px/30px Sarabun;
  letter-spacing: 2.3px;
  color: #767484;
  text-decoration: none;
}

.text:hover {
  color: #fdd000;
  text-decoration: underline;
}

.line {
  width: 30px;
  height: px;
}

.bg {
  background-color: #f4f4f4;
  width: 100%;
}

.img {
  background-image: url('../static/GroupZ.png');
}
</style>
