<template>
  <nav>
    <div class="Navbar">
      <div class="logo">
        <img src="../static/photologo.png" alt="logo" />
        <h2 class="d-flex justify-center align-center mx-3">WE TOKEN</h2>
      </div>
      <div class="menu">
        <ul class="list">
          <li v-for="(item, index) in menu" :key="index">
            <a :href="item.path" class="text">{{ item.li }}</a>
          </li>
          <!--TH toggle-->
          <div class="text1" @click="OnclickTab" style="display:flex; justify-content: center; align-items: center;">
            <div class="mx-2 d-flex justify-center align-center">
              <div class="ml-1 mr-1">
              <img class="hide" src="../static/youtube.png" @click="OnclickTab" />
            </div>     
            <div>
              <a class="hide" style="font-size: 25px">English</a>
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
    <div v-if="checkTab" >
      <v-card-text class="list-menu-th">
        <div class="eng">
          <a href="#">English</a>
        </div>
        <div class="eng">
          <a href="#">ภาษาไทย</a>
        </div> 
      </v-card-text>
    </div>
    <!--Toggle res-->
    <div v-if="check" class="menu">
      <ul class="list-menu">
        <div style="margin-top: 0.5rem">
          <a href="#">Token info</a>
        </div>
        <div class="line"></div>
        <div style="margin-top: 1.5rem">
          <a href="#">News</a>
        </div>
        <div class="line"></div>
        <div style="margin-top: 1.5rem">
          <a href="#">Contact</a>
        </div>
        <div class="line"></div>
        <div style="margin-top: 1.5rem">
          <a href="/Campaign">Campaign</a>
        </div>
        <div class="line"></div>
        <div
          class="box-lg"
          style="display: flex; justify-content: center; margin-top: 1.5rem"
        >
          <div class="eng">
            <h2 class="white--text">English</h2>
          </div>
          <div class="th">
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
.eng{
  margin-left: 0.1rem;
  margin-top: 0.3rem;
 
}
.eng a{
   color:#ABB3C7;
   border-radius: 4px;
}
.eng:hover{
  background-color: #222222;
  border-radius: 4px;
}
.eng:hover a{
  color: #ffffff;
}
.list-menu-th {
  position: absolute;
  z-index: 1;
  top: 5rem;
  width: 7.5rem;
  background-color: #fffffffa;
  height: 90px;
  padding-right: 1rem;
  right: 2rem;
  border-radius: 11px;
}
.list-menu {
  position: absolute;
  z-index: 1;
  top: 4.6rem;
  width: 100%;
  background-color: #222222;
  height: 274px;
  padding-right: 1rem;
}
.text {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px
}
html {
  scroll-behavior: smooth;
}
a {
  text-decoration: none;
  color: #ffffff;
}
.line {
  border: 2px solid #fdd000;
  opacity: 1;
}
.Nav-hide {
  background-color: aqua;
  width: 100%;
  height: 100px;
  z-index: 1;
  position: fixed;
  top: -100%;
  transition: 3s;
}

.text {
  text-decoration: none;
  margin-left: 3rem;
  text-align: center;
  font: normal normal 300 25px/38px Poppins;
  letter-spacing: 0.63px;
  color: #ffffff;
  opacity: 1;
}

body {
  margin: 0 auto;
}

.Navbar {
  background: #222222 0% 0% no-repeat padding-box;
  display: flex;
  justify-content: space-between;
  color: white;
  height: 103px;
  width: 100%;
  box-shadow: 0px 6px 6px #0000001c;
  opacity: 1;
}

.logo {
  display: flex;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 3rem;
}

.menu {
  display: flex;
  align-items: center;
  flex-direction: row;
}

.list {
  display: flex;
  list-style-type: none;
  margin: 2rem;
}

.ham-active {
  display: none;
}

.ham {
  background: #222222;
  border-radius: 10px;
  border: 2px white solid;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  cursor: pointer;
}

.ham-in {
  width: 20px;
}

.line {
  border: 1px white solid;
  margin-top: 5px;
  margin-bottom: 5px;
}

@media screen and (max-width: 820px) {
  .hide{
    display: none;
  }
  .ham-active {
    display: block;
  }

  .Navbar {
    height: 75px;
    width: 100%;
  }

  .text {
    display: none;
  }
}
</style>
