<template>
  <!-- <v-app> -->
    <div style="width: 100vw">
      <Nav :check="check" />
      <Content />
    </div>
  <!-- </v-app> -->
</template>

<script>

import Nav from '~/components/Nav.vue';
import Content from '~/components/Content.vue'
export default {
  name: "IndexPage",
  components: { Nav, Content },
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false
    },
  },
  data() {
    return {
      check: false,
    };
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Mitr:wght@200;300;400;500&display=swap');
</style>
