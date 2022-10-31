<template>
  <v-container>
    <v-row>
      <v-col>
        <VueTradingView :options="{
          width: 1070,
          height: 500,
          symbol: 'NASDAQ:AAPL',
          interval: 'D',
          timezone: 'Etc/UTC',
          theme: 'dark',
          style: '1',
          locale: 'en',
          toolbar_bg: '#f1f3f6',
          enable_publishing: false,
          allow_symbol_change: true,
          autosize: $vuetify.breakpoint.xs,
        }" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VueTradingView from 'vue-trading-view';

export default {
  components: {
    VueTradingView,
  },
}


</script>

<style scoped>
.hideaaa {
  background-color: blue;
  height: 100vh;
  width: 50vw;
}
</style>
