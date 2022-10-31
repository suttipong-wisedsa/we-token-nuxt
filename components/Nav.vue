<template>
  <nav class="bg">
    <div class="main" id="section1">
    </div>
    <div class="Navbar">
      <div style="display:flex; justify-content: center;">
        <img src="../static/photologo.png" width="50" height="50" class="mt-3 ml-3 hidden-md-and-up"/>
        <img src="../static/photologo.png" width="65" height="70" class="mt-4 ml-3 hidden-sm-and-down"/>
        <h1 class="mt-5 ml-3 hidden-md-and-up">WE TOKEN</h1>
        <h1 class="mt-8 ml-3 hidden-sm-and-down">WE TOKEN</h1>
      </div>
      <div class="menu">
        <ul class="list">
          <li v-for="(item, index) in menu" :key="index">
            <a :href="item.path" class="text mx-4" style="color: aliceblue; font-family: ">{{ item.li }}</a>
          </li>
          <!--TH toggle-->
          <div class="text1" @click="OnclickTab" style="display: flex; justify-content: center; align-items: center">
            <div class="mx-2 d-flex justify-center align-center">
              <div class="ml-1 mr-1">
                <img  class="hide" :src="require(`@/static/${img}`)" @click="OnclickTab" style="border-radius:100%; height:1.5vw; width:1.5vw"/>
              </div>
              <div>
                <a class="hide" style="font-size: calc(1.2vh + 10px); color: aliceblue">{{ $t("lg") }}</a>
              </div>
            </div>
          </div>
        </ul>
        <div class="ham-active">
          <div class="ham" @click="OnClick">
            <div class="ham-in">
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Toggle TH-->
    <div v-if="checkTab">
      <v-card-text class="list-menu-th">
        <div class="eng ">
          <a href="#" class="grey--text" @click="changeLange(eng)">English</a>
        </div>
        <div class="eng">
          <a href="#" class="grey--text" @click="changeLange(th)">ภาษาไทย</a>
        </div>
      </v-card-text>
    </div>
    <!--Toggle res-->
    <div v-if="check" class="menu">
      <ul class="list-menu">
        <div style="margin-top: 0.5rem">
          <a href="#" class="textmenu--text" style="color:#FFFFFF">Token info</a>
        </div>
        <div class="line"></div>
        <div style="margin-top: 1.5rem">
          <a href="#" class="textmenu--text" style="color:#FFFFFF">News</a>
        </div>
        <div class="line"></div>
        <div style="margin-top: 1.5rem">
          <a href="#" class="textmenu--text" style="color:#FFFFFF">Contact</a>
        </div>
        <div class="line"></div>
        <div style="margin-top: 1.5rem">
          <a href="/Campaign" class="textmenu--text" style="color:#FFFFFF">Campaign</a>
        </div>
        <div class="line"></div>
        <div class="box-lg" style="display: flex; justify-content: center; margin-top: 1.5rem">
          <div class="d-flex">
            <h2 class="white--text" @click="changeLange(eng)">English</h2>
            <h2 class="white--text mx-5">|</h2>
            <h2 class="white--text" @click="changeLange(th)">ภาษาไทย</h2>
          </div>
        </div>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
 
  name: "Nav",
  // props: {
  //   check: {
  //     type: Boolean,
  //     required: true,
  //     default: false,
  //   },
  // },
  data() {
    return {
      menu: [
        { li: "Token info", path: "#" },
        { li: "News", path: "#" },
        { li: "Contact Us", path: "#" },
        { li: "Campaign", path: "/Campaign" },

      ],
      th: "la",
      eng: "en",
      checkTab: false,
      thlogo: false,
      englogo: true,
      img:"united-states-of-america.png",
      check:false
    };
  },
  computed: {
    ...mapGetters(["locales", "locale"])
  },
  methods: {
    ...mapMutations(["SET_LANG"]),
    changeLange(t) {
      // if (t === "la") {
      //   this.thlogo = !this.thlogo
      //   this.englogo = !this.englogo
      // }
      // else if (t === "en") {
      //   this.thlogo = !this.thlogo
      // }
      if(t==="la"){
        this.img = "TH.jpg"
      }
      else if(t==="en"){
        this.img = "united-states-of-america.png"
      }
      this.englogo=false
      this.SET_LANG(t);
      this.$i18n.locale = t;
      this.checkTab = false;
      this.check = false;
      this.count=false
    },
    OnClick() {
      return (this.check = !this.check);
    },
    OnclickTab() {
      this.checkTab = !this.checkTab;
      
    },
  },
};
</script>

<style scoped>
@import "../assets/Nav.css";
.responsivelogo {
  width: 100%;
  height: auto;
}
</style>