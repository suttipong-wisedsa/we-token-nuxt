<template>
  <v-app>
    <Nav />
    <v-col style="background-color: #f4f4f4; width: 100%">
      <v-container>
        <v-row class="my-10">
          <v-col class="d-flex align-center">
            <a href="./Campaign" style="text-decoration: none; font-size: calc(1.5vh + 7px)" class="title--text">WE
              TOKEN CAMPAIGN</a>
            <h1 style="font-size: 2rem" class="text-center mx-3 textcontent--text">></h1>
            <img src="../static/Weserve Token-06.png" style="height: 33px; width: 34px" />
            <a style="font-size: calc(1vh + 7px); color: #fdd000" class="mx-2">WE TOKEN X</a>

            <a style="font-size: calc(1vh + 7px); color: #fdd000" class="mx-2">Manager Dashboard</a>
          </v-col>
        </v-row>
        <v-card class="my-10" style="box-shadow: 0px 5px 20px #00000029;">
          <v-container>
            <v-col>
              <h1 style="font-size: calc(1vh + 10px)">WE TOKEN x WESERVE</h1>
            </v-col>
            <v-img class="mx-8">
              <!-- <img src="../static/photo3.png" class="responsive" width="600" height="400" /> -->
              <img src="../static/bigbg.png" class="responsive" width="600" height="400" />
            </v-img>
          </v-container>
          <v-row>
            <v-col>
              <v-card-text class="d-flex">
                <img src="../static/calender.png" />
                <h3 style="color:#A0A0A0" class="mx-1">01 Oct, 2022</h3>
              </v-card-text>
              <v-card-text>
                <p style="font-size: calc(1vh + 10px); text-indent: 50px; font-family: 'Sarabun';">
                  {{ data }}
                </p>
              </v-card-text>
              <v-card-text>
                <p style="font-size: calc(1vh + 10px); text-indent: 50px; font-family: 'Sarabun';">
                  {{ data }}
                </p>
              </v-card-text>
              <v-card-text>
                <p style="font-size: calc(1vh + 10px); text-indent: 50px; font-family: 'Sarabun';">
                  {{ data }}
                </p>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
        <v-row class="mt-15 mb-10">
          <h1 style="font-size: calc(2.5vh + 10px)">
            <a class="title--text">Other</a><a class="cardfooter--text mx-2">WE TOKEN</a><a
              class="title--text">CAMPAIGN</a>
          </h1>
        </v-row>
        <v-row>
          <v-col v-for="(i, index) in imgs" :key="index" cols="auto">
            <div class="hover">
              <v-card @click="getPage(index)">
                <v-img object-fit="cover" opaciti="1" class="responsive">
                  <img :src="require(`@/static/${i.url}`)" style="height: 200; width: 250" class="responsive" />
                </v-img>
                <v-card-text class="d-flex justify-space-between mb-15">
                  <v-card-text class="d-flex">
                    <img src="../static/Weserve Logo-01.png" />
                    <h1 style="font-size: calc(1vh + 10px)">{{ i.title }}</h1>
                  </v-card-text>
                </v-card-text>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <Footer />
    </v-col>
  </v-app>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mitr:wght@200;300;400;500&display=swap');
@import url('https://fonts.googleapis.com/css?family=Sarabun');
@import url('https://fonts.googleapis.com/css2?family=Mitr:wght@200;300;400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Mitr:wght@200;300;400;500&family=Poppins:ital,wght@0,100;0,200;1,100;1,200&display=swap');

.bg-img {
  background-image: url("../static/bigbg.png");
}

.bg {
  background-color: rgb(106, 153, 194);
}

.text:hover {
  color: #fdd000;
}

.text {
  color: #767484;
}

.responsive {
  width: 100%;
  height: auto;
}
</style>

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
        { url: "photo1.png", title: "WE TOKEN x WE SMART EXPRESS" },
        { url: "photo3.png", title: "WE TOKEN x Manager Dashboard" },
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
