<template>
  <div >
    <div>
      <v-footer class="darkbg">
        <v-row >
          <v-col class="mx-15 mt-4">
            <v-col class="d-flex align-center">
              <img src="../static/Weserve Token-06.png" />
              <h2 class="white--text mx-3">WE SERVE</h2>
            </v-col>
            <v-col>
              <p class="white--text">
                {{$t("location")}}
              </p>
            </v-col>
          </v-col>
          <v-spacer class="hidden-sm-and-down"></v-spacer>
          <v-col class=" d-md-non text-center">
            <v-col class="mx-10">
              <h2 class="white--text my-5">{{$t("company")}}</h2>
              <p class="white--text my-5">{{$t("about")}}</p>
              <p class="white--text my-5">{{$t("ourpartner")}}</p>
            </v-col>
          </v-col>
          <v-spacer class="d-md-none .d-lg-flex"></v-spacer>
          <v-col class="mr-15 d-md-non text-center">
            <v-col class="mx-10">
              <h2 class="white--text my-5">{{$t("support")}}</h2>
              <p class="white--text my-1">{{$t("wetokennews")}}</p>
              <p class="white--text my-5">{{$t("faq")}}</p>
            </v-col>
          </v-col>
          <v-spacer class="d-md-none .d-lg-flex"></v-spacer>
          <v-spacer class="d-md-none .d-lg-flex"></v-spacer>
          <v-col class="hidden-sm-and-down">
            <h2 class="white--text mt-8">{{$t("socialmedia")}}</h2>
            <v-col class="d-flex align-center" style="height: 3rem">
              <img src="../static/facebook.png" />
              <p class="white--text my-3 mx-2">{{$t("company")}}</p>
            </v-col>
            <v-col class="d-flex align-center" style="height: 3rem">
              <img src="../static/ig.png" />
              <p class="white--text my-4 mx-2">{{$t("about")}}</p>
            </v-col>
            <v-col class="d-flex align-center" style="height: 3rem">
              <img src="../static/youtube.png" />
              <p class="white--text my-4 mx-2">{{$t("ourpartner")}}</p>
            </v-col>
          </v-col>
        </v-row>
      </v-footer>
    </div>
    <v-footer style="background-color: #222222; border-top: 1px solid #ffffff;">
      <v-row>
        <v-card-text class="white--text d-flex align-self-center justify-center"
          >&copy; Copyright 2021. All Rights Reserved.
        </v-card-text>
        <v-col class="d-md-none .d-lg-flex justify-center d-flex align-center mb-2">
          <img src="../static/facebook.png" class="mx-5" />
          <img src="../static/ig.png" class="mx-5" />
          <img src="../static/youtube.png" class="mx-5" />
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Mitr:wght@200;300;400;500&display=swap');
@import url('https://fonts.googleapis.com/css?family=Sarabun');
@import url('https://fonts.googleapis.com/css2?family=Mitr:wght@200;300;400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Mitr:wght@200;300;400;500&family=Poppins:ital,wght@0,100;0,200;1,100;1,200&display=swap');

</style>