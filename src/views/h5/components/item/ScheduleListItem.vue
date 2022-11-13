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
      <img v-loadFail src="/src/assets/Senegal.png" alt="" srcset="">
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
      <img v-loadFail src="/src/assets/Senegal.png" alt="" srcset="">
      <div class="country">
        卡塔尔
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.scheduleMatch{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .4rem;
  background-color: #AA0838;
  margin-bottom: 1px;
  .time{
    font-size: .8rem;
    color: #fff;
  }
  .group{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .groupA{
      font-size: .8rem;
      color: #fff;
    }
    .groupB{
      font-size: .8rem;
      color: #fff;
    }
  }
  .flag{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    img{
      width: 2.5rem;
      height: 2.5rem;
      object-fit: cover;
    }
    .country{
      font-size: .8rem;
      color: #fff;
      max-width: 2.5rem;
    }
  }
  .score{
    font-size: 1.2rem;
    color: #fff;
    display: flex;
  }
}
</style>
