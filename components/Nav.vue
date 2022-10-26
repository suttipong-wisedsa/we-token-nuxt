<template>
  <nav class="bg">
    <div class="Navbar">
      <div class="logo">
        <img src="../static/photologo.png" alt="logo" class="mx-2" />
        <h2 class="d-flex justify-center align-center">WE TOKEN</h2>
      </div>
      <div class="menu">
        <ul class="list">
          <li v-for="(item, index) in menu" :key="index">
            <a :href="item.path" class="text mx-2" style="color: aliceblue; font-family: ">{{ item.li }}</a>
          </li>
          <!--TH toggle-->
          <div class="text1" @click="OnclickTab" style="display: flex; justify-content: center; align-items: center">
            <div class="mx-2 d-flex justify-center align-center">
              <div class="ml-1 mr-1">
                <img class="hide" src="../static/united-states-of-america.png" @click="OnclickTab" />
              </div>
              <div>
                <a class="hide" style="font-size: 1.2vw; color: aliceblue">English</a>
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
          <a href="#" class="grey--text">English</a>
        </div>
        <div class="eng">
          <a href="#" class="grey--text">ภาษาไทย</a>
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
            <h2 class="white--text">English</h2>
            <h2 class="white--text mx-5">|</h2>
            <h2 class="white--text">ภาษาไทย</h2>
          </div>
        </div>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  props: {
    check: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  data() {
    return {
      menu: [
        { li: "Token info", path: "#" },
        { li: "News", path: "#" },
        { li: "Contact Us", path: "#" },
        { li: "Campaign", path: "/Campaign" },
      ],
      checkTab: false,
    };
  },
  methods: {
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
</style>
