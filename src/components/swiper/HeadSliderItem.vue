<script>
export default {

};
</script>

<template>
  <div class="container">
    <div class="groupTime">
      <div class="groupTimeInfo">
        <div>世界杯小组赛-A组 第一轮</div>
        <div>11月21日 00:00</div>
      </div>
      <div class="contestant">
        <div class="team">
          <div class="teamLogo">
            <img src="/src/assets/England.png" alt="">
          </div>
          <div class="teamName">
            英格兰
          </div>
        </div>
        <div class="info">
          <div class="score">
            VS
          </div>
        </div>
        <div class="team">
          <div class="teamLogo">
            <img src="/src/assets/Iran.png" alt="">
          </div>
          <div class="teamName">
            伊朗
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container{
    padding: 20px;
}
.groupTime div {
  font-size: 13px;
  color: #fff;
  text-align: left;
}

.groupTimeInfo {
  margin-bottom: 10px;
}

.contestant {
  width: 236px;
  box-sizing: border-box;
}

.groupmore {
  width: 56px;
  height: 154px;
  background: linear-gradient(360deg, #811133 0%, #950832 100%);
  border-radius: 0px 0px 0px 0px;
  opacity: 1;
  margin: 0 0 0 10px;
  color: #fff;
  cursor: pointer;
}

.groupTime div.team {
  display: inline-block;
  width: 33%;
  vertical-align: middle;
  text-align: center;
}

.teamLogo {
  width: 45px;
  height: 45px;
  margin: 0 auto;
}

.teamLogo img {
  width: 100%;
}

.groupTime div.teamName {
  font-size: 12px;
  text-align: center;
}

.info {
  display: inline-block;
  width: 30%;
  font-size: 12px;
  text-align: center;
  vertical-align: top;
  margin-top: 5px;
}

.groupTime div.score {
  font-size: 18px;
  text-align: center;
}

.Dot {
  width: 7px;
  height: 7px;
  background: #ff004c;
  border-radius: 0px 0px 0px 0px;
  opacity: 1;
  transform: rotate(45deg);
  margin: 10px auto;
}

.moreBt {
  width: 56px;
  text-align: center;
  font-size: 14px;
  writing-mode: vertical-lr;
  /*从左向右从右向左是writing-mode:vertical-rl;*/
  writing-mode: tb-lr;
  /*IE浏览器的从左向右从右向左是writing-mode:tb-rl；*/
  align-items: center;
  justify-content: center;
  display: flex;
  color: #ff004c;
  cursor: pointer;
}

/* 小组赛积分 */
.columnBox {
  margin: 0 auto 0;
  padding-bottom: 40px;
}

.groupBJ {
  background-image: url(./src/assets/groupBJ.png);
  background-position: center;
  background-repeat: no-repeat;
}
</style>
