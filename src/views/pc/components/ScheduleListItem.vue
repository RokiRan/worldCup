<script>
export default {

};
</script>

<template>
  <div class="scheduleMatch">
    <div class="time">
      00:00
    </div>
    <div class="group">
      <div class="groupA">
        小组赛A组
      </div>
      <div class="groupB">
        第一轮
      </div>
    </div>
    <div class="flag">
      <img src="/src/assets/Senegal.png" alt="" srcset="">
      <div class="country">
        卡塔尔
      </div>
    </div>
    <div class="score">
      <div class="scoreA">
        0
      </div>
      :
      <div class="scoreB">
        0
      </div>
    </div>
    <div class="flag">
      <img src="/src/assets/Senegal.png" alt="" srcset="">
      <div class="country">
        卡塔尔
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.scheduleMatch{
  display: flex;
  // justify-content: space-between;
  align-items: center;
  padding: .4rem;
  background-color: #8F0F36;
  .time{
    font-size: .8rem;
    color: #fff;
    text-align: center;
    width: 10%;
  }
  .group{
    display: flex;
    width: 20%;
    justify-content: center;
    .groupA{
      font-size: .8rem;
      color: #fff;
      margin-right: 10px;
    }
    .groupB{
      font-size: .8rem;
      color: #fff;
    }
  }
  .flag{
    width: 30%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    img{
      width: 2.5rem;
      height: 2.5rem;
      object-fit: cover;
      margin-right: 10px;
    }
    .country{
      font-size: .8rem;
      color: #fff;
      max-width: 2.5rem;
    }
  }
  .score{
    width: 10%;
    font-size: 1.2rem;
    color: #fff;
    display: flex;
    justify-content: center;
  }
}
</style>
