<template>
  <div>
    <div class="background center">
      <v-row class="hidden-sm-and-down">
        <v-col>     
            <img src="../static/bass1.png" class="md1" /> 
            <img src="../static/bass2.png" class="md" />
        </v-col>
        <v-col class="text-center mt-15">
          <img src="../static/bass3.png" style="height:15vw" class="mt"/>
          <h1 class="text--text" style="font-size:2.5vw">WESERVE TOKEN (WE)</h1>
          <h2 class="texttitle--text" style="font-size:1.5vw">Got question? Contact us by scanning the QR code.</h2>
        </v-col>
      </v-row>
      <v-row class="hidden-md-and-up">
        <v-col>     
            <img src="../static/bass1.png" class="md11" /> 
            <img src="../static/bass2.png" class="mdd" />
        </v-col>
        <v-col class="text-center mt-15">
          <img src="../static/bass3.png" style="height:50vw" class="mt1"/>
          <h1 class="text--text my-5" style="font-size:5vw">WESERVE TOKEN (WE)</h1>
          <h2 class="texttitle--text my-3" style="font-size:3vw">Got question? Contact us by scanning the QR code.</h2>
        </v-col>
      </v-row>
    </div>
    <Footer />
  </div>
</template>

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
.mdd{
  position: absolute;
  margin-left: -8vw;
  margin-top: 5vh;
  width: 20vw;
  margin-top: 18vw;
}
.md11 {
  position: relative;
  width: 75vw;
  margin-left: 8vw;
  margin-top: 13vw;
}
.mt{
  margin-top: 20vh;
}
.mt1{
 
}
</style>
