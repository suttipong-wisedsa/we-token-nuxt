<template>
  <div>
    <div class="background center">
      <v-row class="hidden-sm-and-down">
        <v-col>
          <img src="../static/bass1.png" class="md1" />
          <img src="../static/bass2.png" class="md" />
        </v-col>
        <v-col class="text-center mt-5" id="section2">
          <img src="../static/bass3.png" style="height:15vw" class="mt" />
          <h1 class="text--text" style="font-size:2.5vw; font-family: 'Mitr', sans-serif;">WESERVE TOKEN (WE)</h1>
          <p class="texttitle--text" style="font-size:1.5vw; font-family: 'Mitr', sans-serif;">Got question? Contact us
            by scanning the QR code.</p>
          <img src="../static/icon.jpg" @click="smoot()" style="cursor: pointer;" />
        </v-col>
      </v-row>
      <v-row class="hidden-md-and-up">
        <v-col>
          <img src="../static/bass1.png" class="md11" />
          <img src="../static/bass2.png" class="mdd" />
        </v-col>
        <v-col class="text-center mt-10" id="section2">
          <img src="../static/bass3.png" style="height:35vw" />
          <h1 class="text--text my-5" style="font-size:4vw; font-family: 'Mitr', sans-serif;">WESERVE TOKEN (WE)</h1>
          <p class="texttitle--text my-3" style="font-size:3vw; font-family: 'Mitr', sans-serif;">Got
            question? Contact
            us by scanning the QR code.</p>
          <img src="../static/icon.jpg" @click="smoot()" style="cursor: pointer;" />
        </v-col>
      </v-row>
      <!-- <div class="main" id="section2">
      <h2>Section 2</h2>
      <a href="#section1"> Me to SmClickooth Scroll to Section 1 Above</a>
    </div> -->
    </div>
    <Footer />
  </div>
</template>
<script>
export default {
  methods: {
    smoot() {
      window.location.href = "#section1";
    },
  },
}
</script>
<style scoped>
.background {
  background-image: url("../static/bass4.png");
  width: 100%;
  background-size: 100% 100%;
  height: 100vh;
  position: relative;
  border-color: blue;
  border-width: 20px;
}

.center {
  display: flex;
}

.left {
  display: flex;
  justify-content: center;
  align-items: center;
}

.md {
  position: absolute;
  margin-left: -8vw;
  margin-top: 5vh;
  width: 12vw;
  margin-top: 18vw;
}

.md1 {
  position: relative;
  width: 35vw;
  margin-left: 13vw;
  margin-top: 13vw;
}

.mdd {
  position: absolute;
  margin-left: -8vw;
  margin-top: 5vh;
  width: 15vw;
  margin-top: 18vw;
}

.md11 {
  position: relative;
  width: 60vw;
  margin-left: 18vw;
  margin-top: 13vw;
}

.mt {
  margin-top: 20vh;
}

.mt1 {}
</style>
