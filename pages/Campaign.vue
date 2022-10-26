<template>
  <div>
    <v-app class="bg-1">
      <Nav />
      <div class="mb-10">
        <v-row class="d-flex justify-center align-center" style="height:10vw">
          <div class="d-flex ">
            <h1 class="text-1 hidden-sm-and-down">WE TOKEN</h1>
            <h1 class="text-2 hidden-sm-and-down">CAMPAIGN</h1>
            <h1 class="hidden-md-and-up my-3" style="color: #fdd000;
  font-size: 8vw;">WE TOKEN</h1>
            <h1 class="hidden-md-and-up my-3" style=" color: #767484;
  font-size: 8vw;">CAMPAIGN</h1>
          </div>
        </v-row>
        <!--Header-->
        <v-container>
          <v-row justify="center" class="mt-10">
            <v-col v-for="(i, index) in imgs" :key="index" cols="auto">
              <!--card-->
              <div class="hover">
                <v-card @click="getPage(index)" class="hidden-sm-and-down">
                  <img :src="require(`@/static/${i.url}`)" alt="img" class="responsive" />
                  <v-card-text class="d-flex">
                    <img src="../static/Weserve Logo-01.png" />
                    <h1 style="font-size: 1vw" class="mx-1">{{ i.title }}</h1>
                  </v-card-text>
                </v-card>
                <v-card @click="getPage(index)" class="hidden-md-and-up">
                  <img :src="require(`@/static/${i.url}`)" alt="img" class="responsiveMB" />
                  <v-card-text class="d-flex">
                    <img src="../static/Weserve Logo-01.png" />
                    <h1 style="font-size: 1vw" class="mx-1">{{ i.title }}</h1>
                  </v-card-text>
                </v-card>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <div class="foot">
        <Footer />
      </div>
    </v-app>
  </div>
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mitr:wght@200;300;400;500&display=swap');
@import url('https://fonts.googleapis.com/css?family=Sarabun');
@import url('https://fonts.googleapis.com/css2?family=Mitr:wght@200;300;400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Mitr:wght@200;300;400;500&family=Poppins:ital,wght@0,100;0,200;1,100;1,200&display=swap');

.responsive {
  width: 100%;
  max-width: 360px;
  height: auto;
}

.foot {
  margin-top: 10vh;
}

.responsiveMB {
  width: 100%;
  max-width: 300px;
  height: auto;
}

.hover:hover {
  box-shadow: 2px 3px 17px 19px rgba(0, 0, 0, 0.11);
}

.bg {
  margin-bottom: 2rem;
}

.text-1 {
  color: #fdd000;
  font-size: 2.5vw;
}

.text-1mb {
  color: #fdd000;
  font-size: 2.5vw;
}

.text-2 {
  color: #767484;
  font-size: 2.5vw;
}

.bg-1 {
  background-color: #f4f4f4;
}

@media (max-width: 800px) {
  /* .v-img{
    height: 50vw;
  } */
}
</style>
