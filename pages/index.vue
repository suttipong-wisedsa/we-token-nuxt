<template>
  <v-app>
    <Nav  :check="check"/>
    <Content />
  </v-app>
</template>

<script>

import Nav from '~/components/Nav.vue';
import Content from '~/components/Content.vue'

export default {
  name: "IndexPage",
  components: { Nav, Content,},
  data() {
    return {
      check: false,
    };
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Mitr:wght@200;300;400;500&display=swap');
@import url('https://fonts.googleapis.com/css?family=Sarabun');
/* html{
  margin: 0;
  padding: 0;
} */
</style>
