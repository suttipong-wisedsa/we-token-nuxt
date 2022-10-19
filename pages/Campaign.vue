<template>
  <div>
    <div class="back-in">
      <Nav check="check" />
      <div class="head">
        <div class="topic">
          <a class="topic-big">WE TOKEN</a>
          <span>CAMPAIGN</span>
        </div>
      </div>
      <Cardcontent />
    </div>
    <Footer />
  </div>

</template>
<script>
import Cardcontent from '~/components/Cardcontent.vue';
import Footer from '~/components/Footer.vue';
import Nav from '~/components/Nav.vue'
export default {

  name: "Campaign",
  components: { Cardcontent, Footer, Nav },

}

</script>
<style >
.back-in {
  background-color: #F4F4F4;
  height: 800px;
}

.head {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 242px;
  background-color: #F4F4F4;
}

.topic-big {
  text-align: left;
  font: normal normal 800 45px/58px Sarabun;
  letter-spacing: 4.5px;
  opacity: 1;
  color: #FDD000;
}

.topic span {
  text-align: left;
  font: normal normal 800 45px/58px Sarabun;
  letter-spacing: 4.5px;
  opacity: 1;
  color: #767484;
}

.card {
  display: flex;
  justify-content: center;
}
</style>
