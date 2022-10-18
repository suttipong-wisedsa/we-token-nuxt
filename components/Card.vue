<template>
  <div class="main">
    <div class="card"></div>
    <div class="card1">
      <div class="a">
        <div class="border1"></div>
      </div>
      <div class="content">
        <p>WE TOKEN</p>
      </div>
      <div class="a">
        <div class="border1"></div>
      </div>
    </div>
    <div class="detail">
      <div>
        <p>
          WE Token, a decentralized digital asset lending business developed by
          WESERVE PLATFORM Co.,Ltd. is a platform that incorporates centralized
          finance with decentralized finance (CeDeFi).
        </p>
      </div>
    </div>
    <div  class="card-coin">
      <div v-for="(item, index) in card" :key="index" class="item-card">
        <div class="item1">
          <img src="../static/Weserve Token-06.png" />
          <h1>{{item.title}}</h1>
          <p>{{item.detail}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
 .main {
  background-color:#F4F4F4;
}
.border1 {
  top: 1240px;
  left: 116px;
  width: 603px;
  height: 0px;
  border: 2px solid #fdd000;
  opacity: 1;
}
.card {
  display: flex;
  justify-content: space-around;
  position: relative;
}

.content p {
  letter-spacing: 0px;
  color: #fdd000;
  opacity: 1;
  width: 220px;
  height: 130px;
  text-align: center;
  font-size: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card1 {
  display: flex;
  justify-content: space-evenly;
  background: #f4f4f4;
}
.a {
  display: flex;
  align-items: center;
  justify-content: center;
}
.detail {
  margin-top: 52px;
  text-align: center;
  margin-left: 340px;
  margin-right: 340px;
  font: normal normal normal 34px/53px Mitr;
  letter-spacing: 0px;
  color: #767484;
  opacity: 1;
  font-family: Mitr;
}
.item1 {
  width: 311px;
  height: 313px;
  border-radius: 20px;
  border: 1px rgb(240, 232, 231) solid;
  background-color: #ffffff;
  box-shadow: 5px 10px yellow;
}
.card-coin{
    margin-top: 95px;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 188px;
}

</style>

<script>
export default {
    data() {
    return {
      card: [{photo:'../static/Weserve Token-06.png',
        title:"2222M",detail:"Total"},{photo:"../static/Weserve Token-06.png",
        title:"2222M",detail:"Total"},{photo:"../static/Weserve Token-06.png",
        title:"2222M",detail:"Total"},{photo:"../static/Weserve Token-06.png",
        title:"2222M",detail:"Total"}],
    };
}
}
</script>