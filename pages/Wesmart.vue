<template>
  <v-app>
    <Nav />
    <div class="bg">
      <v-card class="d-flex align-center mx-15 mt-12" flat height="50">
        <h1><a class="text" href="/Campaign">WE TOKEN CAMPAIGN</a></h1>
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
            <v-card-text class="mx-2">
              <p>{{ data }}</p>
            </v-card-text>
            <v-card-text class="mx-2">
              <p>{{ data }}</p>
            </v-card-text>
          </v-card>
        </v-row>
      </v-container>
      
    </div>
  </v-app>
</template>

<script>
import Nav from "~/components/Nav.vue";
export default {
  name: "Weserve",
  components: { Nav },
  data() {
    return {
      data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id nisl finibus Leo porttitor scelerisque. Pellentesque suscipit laoreet mauris, a dignissim ex lacinia nec. Phasellus sed est quis quam interdum faucibus nec sed enim. Ut bibendum volutpat augue at porta. Vivamus placerat viverra lectus, nec mollis sem volutpat a. Duis at feugiat enim, consectetur mollis nulla. Nam felis libero, tincidunt a ultricies sit amet, ultricies sit amet felis. Phasellus at congue dolor. Mauris sed nibh et est ornare tincidunt. Sed ut tristique dui. Pellentesque iaculis sagittis lacinia. Nunc ultricies, quam et imperdiet consectetur, diam erat tincidunt ante, ut tempus felis orci et metus. Sed a diam tempor, ultricies nibh a, congue massa. Nam a justo urna.",
    };
  },
};
</script>
<style scoped>
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
}
</style>
