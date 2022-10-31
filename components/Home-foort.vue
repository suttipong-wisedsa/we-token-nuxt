<template>
  <div>
    <div class="background center" id="section2">
      <v-content class="hidden-sm-and-down">
        <v-row>
          <v-col class="ml-15 mt-2">
            <img src="../static/bass1.png" class="md1" />
            <img src="../static/bass2.png" class="md" />
          </v-col>
          <v-col>
            <img src="../static/bass3.png" style="height: 15vw" class="mt" />
            <v-card-text class="text-center my-5">
              <h1
              class="text--text"
              style=" font-size: 2.5vw; font-family: 'Mitr', sans-serif"
            >
              WESERVE TOKEN (WE)
            </h1>
            </v-card-text>
            <v-card-text>
              <p
              class="texttitle--text"
              style="font-size: 1.5vw; font-family: 'Mitr', sans-serif"
             >
              {{$t("we")}}
            </p>
            </v-card-text>
            <img
              src="../static/icon.jpg"
              @click="smoot()"
              style="cursor: pointer; border-radius:100%;"
              class="smooth"
            />
          </v-col>
        </v-row> 
      </v-content>
      <v-container class="hidden-md-and-up">
        <v-col>
          <img src="../static/bass1.png" class="md11" />
          <img src="../static/bass2.png" class="mdd" />
        </v-col>
        <v-col class="text-center mt-10" id="section2">
          <img src="../static/bass3.png" style="height: 35vw" />
        </v-col>
        <v-col class="d-flex justify-center my-15">
          <img
            src="../static/icon.jpg"
            @click="smoot()"
            style="cursor: pointer; border-radius:100%;"
            class="smoothmb"
          />
        </v-col>
      </v-container>
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
};
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
  margin-top: 13vw;
}

.md1 {
  position: relative;
  width: 35vw;
  margin-left: 2vw;
  margin-top: 8vw;
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
  margin-left: 14vw;
  margin-top: 25vh;

}
.smooth {
  margin-left: 25vw;
  margin-top: 10vh;
}

</style>
