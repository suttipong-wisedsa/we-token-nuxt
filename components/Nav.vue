<template>
  <nav>
    <div class="Navbar">
      <div class="logo">
        <img src="../static/photologo.png" alt="logo" />
        <h1 class="d-flex justify-center align-center mx-3">WE TOKEN</h1>
      </div>
      <div class="menu">
        <ul class="list">
          <li v-for="(item, index) in menu" :key="index">
            <a :href="item.path" class="text">{{item.li}}</a>
          </li>
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
    <!-- <div v-if="check"> -->
    <!--Toggle-->
    <!-- <div class="Nav-hide .active">
        กดกดกด
      </div>
    </div> -->
    <!-- <div v-else>
      <div>
        dfdfdf
      </div>
    </div> -->
  </nav>
</template>

<script>

export default {
  name: "Nav",
  props: {
    check: {
      type: Boolean,
      required: true,
      default: false
    },
  },
  data() {
    return {
      menu: [{ li: "Token info", path: "#" }, { li: "News", path: "#", }, { li: "Contact Us", path: "#" },
      { li: "Campaign", path: "/Campaign" }]
    };
  },
  methods: {
    OnClick() {
      return this.check = !this.check;
    }
  },
};
</script>

<style scoped>
html {
  scroll-behavior: smooth;
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
  margin-left: 1rem;
  text-align: center;
  font: normal normal 300 25px/38px Poppins;
  letter-spacing: 0.63px;
  color: #FFFFFF;
  opacity: 1;
}

.Nav-hide .active {
  top: 0;
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
  margin: 2rem
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
