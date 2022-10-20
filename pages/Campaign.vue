<template>
  <v-app>
    <div>
      <Nav />
      <v-card class="d-flex align-center justify-center mt-12" flat height="100" tile>
        <v-card outlined tile>
          <h1>WE TOKEN CAMPAIGN</h1>
        </v-card>
      </v-card>
      <!--Header-->
      <v-container>
        <v-row justify="center">
          <v-col v-for="(i, index) in card" :key="index" cols="auto">
            <!--card-->
            <v-card>
              <v-img object-fit="cover" height="266" width="556" opaciti="1" class="white mx-auto my-12 rounded-lg">
                <img src="../static/Untitled-3.png" />
              </v-img>
              <div>
                <h1>WE TOKEN x WESERVE</h1>
                <img src="../static/Weserve Logo-01.png" />
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-title backgourd="red">
        <v-title>
          <v-img>
            <img src="../static/Weserve Logo-01.png" />
          </v-img>
          <v-title>
            <h1>WE TOKEN</h1>
          </v-title>
        </v-title>
      </v-title>
    </div>
  </v-app>

</template>
<script>
import Footer from '~/components/Footer.vue';
import Nav from '~/components/Nav.vue'
export default {

  name: "Campaign",
  components: { Footer, Nav },
  data() {
    return {
      card: ['1', '2', '3'],
    };
  }
}
</script>

<style scoped>

</style>
