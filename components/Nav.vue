<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav>
    <div class="Navbar">
      <div class="logo">
        <img src="../static/Weserve Token-06.png" alt="logo" />
        <h1>WE TOKEN</h1>
      </div>
      <div class="menu">
        <ul>
            <!-- <li v-for="(item, index) in menu" :key="index">
            <RouterLink to="/"
              ><h4>{{ item }}</h4></RouterLink>
          </li> -->
          <li><h4>{{menu[0]}}</h4></li>
          <li><h4>{{menu[1]}}</h4></li>
          <li><h4>{{menu[2]}}</h4></li>
          <li><h4>{{menu[3]}}</h4></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      menu: ["Token Info", "News", "Contact Us", "Campaign"]
    };
  },
};
</script>

<style scoped>
html {
  scroll-behavior: smooth;
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
}
.logo h1 {
  margin-left: 12px;
  margin-top: 15px;
}
li h4 {
  color: aliceblue;
  margin-left: 4rem;
  margin-right: 2rem;
  font: normal normal 300 25px/38px Poppins;
}
li {
  list-style-type: none;
  text-decoration: none;
}
ul {
  display: flex;
}
a {
  text-decoration: none;
}
</style>
