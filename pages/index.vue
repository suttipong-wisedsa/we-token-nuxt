<template>
  <v-app>
    <Nav />
    <Content />
  </v-app>
</template>

<script>

import Nav from '~/components/Nav.vue';
import Content from '~/components/Content.vue'
// import gql from 'graphql-tag'

export default {
  name: "IndexPage",
  components: { Nav, Content, },
}
</script>
<style>
html {
  scroll-behavior: smooth;
}

@import url('https://fonts.googleapis.com/css2?family=Mitr:wght@200;300;400;500&display=swap');
@import url('https://fonts.googleapis.com/css?family=Sarabun');
@import url('https://fonts.googleapis.com/css2?family=Mitr:wght@200;300;400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Mitr:wght@200;300;400;500&family=Poppins:ital,wght@0,100;0,200;1,100;1,200&display=swap');
</style>

