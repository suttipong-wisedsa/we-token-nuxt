<template>
  <div class="main-box">
    <div class="flex-box">
      <div class="card">
        <div class="totle-card">
          <div class="top-card"></div>
          <div class="footer-card">
            <h4>WE TOKEN <a>x</a> WESERVE</h4>
            <div class="last-footer">
              <div class="logo">
                <img src="../static/Weserve Logo-01.png" />
                <a>WESERVE</a>
              </div>
              <div class="last-footer2">
                <p>01 Oct, 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="totle-card">
          <div class="top-card2"></div>
          <div class="footer-card">
            <h4>WE TOKEN <a>x</a> WE SMART EXPRESS</h4>
            <div class="last-footer">
              <div class="logo">
                <img src="../static/Weserve Logo-01.png" />
                <a>WE SMART EXPRESS</a>
              </div>
              <div class="last-footer2">
                <p>01 Oct, 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="totle-card">
          <div class="top-card3"></div>
          <div class="footer-card">
            <h4>WE TOKEN <a>x</a>Manager dashboard</h4>
            <div class="last-footer">
              <div class="logo">
                <img src="../static/Weserve Logo-01.png" />
                <a>Manager Dashboard</a>
              </div>
              <div class="last-footer2">
                <p>01 Oct, 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "Cardcontent",

}</script>
<style scoped>
.card {
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #E6E6E6;
}

h4 {
  margin-left: 24px;
}

.flex-box {
  display: flex;
  justify-content: space-evenly;
}

.top-card {
  background-image: url('../static/Untitled-3.png');
  width: 556px;
  height: 266px;
}

.top-card2 {
  background-image: url('../static/Untitled-4.png');
  width: 556px;
  height: 266px;
}

.top-card3 {
  background-image: url('../static/photo3.png');
  width: 556px;
  height: 266px;
}

.footer-card {
  text-align: left;
  font: normal normal 800 21px/27px Sarabun;
  letter-spacing: 2.1px;
  color: #FDD000;
  opacity: 1;
  padding-top: 22px;
}

.last-footer {
  margin-top: 26px;
  display: flex;
  justify-content: space-between
}

.last-footer2 {
  text-align: left;
  font: normal normal medium 16px/21px Sarabun;
  letter-spacing: 1.6px;
  color: #A0A0A0;
  opacity: 1;
}

.logo {
  margin-left: 24px;
  color: #3B3B3B;
  font-size: 18px;
  margin-bottom: 24px;
}
</style>
