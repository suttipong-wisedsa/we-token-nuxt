<template>
  <v-app class="bg-1">
    <div>
      <Nav />
      <v-row class="d-flex align-center justify-center" flat height="200" tile>   
          <v-text class="my-15">
            <h1 class="text-1">WE TOKEN</h1>
          </v-text>   
            <h1 class="text-2">CAMPAIGN</h1>
      </v-row>
      <!--Header-->
      <v-container>
        <v-row justify="center">
          <v-col v-for="(i, index) in imgs" :key="index" cols="auto">
            <!--card-->
            <div class="hover">
              <v-card @click="getPage(index)">
                <div class="v-img"
                  object-fit="cover"
                  height="10vw"
                  width="5vw"
                  opaciti="1"
                   >
                  <img :src="require(`@/static/${i.url}`)" alt="img" class="responsive"/>
                </div>
                <v-card-text class="d-flex justify-space-between mb-15">
                  <v-card-text class="d-flex">
                    <img  src="../static/Weserve Logo-01.png"/>
                    <h1 style="font-size:1vw">{{ i.title }}</h1>
                  </v-card-text>
                </v-card-text>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <Footer />
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
.responsive {
  width: 100%;
  height: auto;
}
.hover:hover {
  box-shadow: 2px 3px 17px 19px rgba(0, 0, 0, 0.11);
}
.bg {
  
  margin-bottom: 2rem;
}
.text-1{
  color:#FDD000;
  font-size: 2vw;
}
.text-2{
  color: #767484;
  font-size: 2vw;
}
.bg-1{
  background-color: #f4f4f4;
}
@media (max-width: 800px) {
  /* .v-img{
    height: 50vw;
  } */
}
</style>