<template>
  <v-app>
    <Nav />
    <v-card class="d-flex align-center mx-15 mt-12" flat height="50">
      <h1><a class="text" href="/Campaign">WE TOKEN CAMPAIGN</a></h1>
    </v-card>
  </v-app>
</template>

<script>
import Nav from "~/components/Nav.vue";
export default {
  name: "Weserve",
  components: { Nav },
};
</script>
<style scoped>
.text{
    text-align: left;
font: normal normal 800 23px/30px Sarabun;
letter-spacing: 2.3px;
color: #767484;
    text-decoration: none;
}
.text:hover{
    color: #FDD000;
    text-decoration: underline;
}
.line{
    width: 30px;
height: px;
}
</style>