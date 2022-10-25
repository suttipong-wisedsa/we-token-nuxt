<!-- <template>
  <v-row>
    <v-col>
      <div :id="container_id"></div>
    </v-col>
  </v-row>
</template>

<script>
const SCRIPT_ID = "tradingview-widget-script";
const CONTAINER_ID = "trading-view-section";

export default {
  name: "Trading",
  data() {
    return {
      container_id: CONTAINER_ID,
    };
  },
  props: {
    options: {
      type: Object,
    },
  },
  methods: {

    canUseDOM() {
      return (
        typeof window !== "undefined" &&
        window.document &&
        window.document.createElement
      );
    },
    resize(width, height) {
      this.chart.resize(width, height);
    },
    getScriptElement() {
      return document.getElementById(SCRIPT_ID);
    },
    updateOnloadListener(onload) {
      const script = this.getScriptElement();
      const oldOnload = script.onload;
      return (script.onload = () => {
        oldOnload();
        onload();
      });
    },
    scriptExists() {
      return this.getScriptElement() !== null;
    },
    appendScript(onload) {
      if (!this.canUseDOM()) {
        onload();
        return;
      }

      if (this.scriptExists()) {
        if (typeof TradingView === "undefined") {
          this.updateOnloadListener(onload);
          return;
        }
        onload();
        return;
      }
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.type = "text/javascript";
      script.async = true;
      script.src = "https://s3.tradingview.com/tv.js";
      script.onload = onload;
      document.getElementsByTagName("head")[0].appendChild(script);
    },

    initWidget() {
      if (typeof TradingView === "undefined") {
        return;
      }

      new window.TradingView.widget(
        Object.assign({ container_id: this.container_id }, this.options)
      );
    },
  },
  mounted() {
    this.appendScript(this.initWidget);
  },
};
</script>


<style>
@media only screen and (max-width: 800px) {
  #container_id {
    height: 30vh !important;
  }
}
</style> -->
<template>
  <div class="trading">
    <VueTradingView :options="{
      symbol: 'NASDAQ:AAPL',
      theme: 'dark',
      autosize: true, //props trading responsive
      width:350,
      height:220,
    }" />
  </div>
</template>

<script>
import VueTradingView from 'vue-trading-view';
export default {
  components: {
    VueTradingView,
  }
}


</script>

<style scoped>
.trading{

}
</style>
