<script lang="ts" setup>

</script>

<template>
  <div class="smallNews">
    <div class="title line-clamp-2">
      世界杯32强巡礼|最后一舞，梅西能否带领阿根廷圆梦？世界杯32强巡礼|最后一舞，梅西能否带领阿根廷圆梦？
    </div>
    <div class="right">
      <img v-loadFail src="/src/assets/fenmianAir2.png" alt="" srcset="">
      <div class="time">
        00:30
      </div>
    </div>
    <div class="left">
      <div class="desc">
        <div class="source">
          上游新闻
        </div>
        <div class="date">
          2022-11-11 16:51:12
        </div>
        <div class="tag">
          原创
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.smallNews {
  padding: 20px 0;
  background-color: #8F0F36;
  border-bottom: 1px solid #F4A1A1;

  .title {
    font-size: 18px;
    color: #fff;
    text-align: left;
    margin-bottom: 0.2rem;
  }

  .right {
    width: 100%;
    position: relative;
    margin: 16px 0;
    img {
      height: 540px;
      width: 100%;
      object-fit: cover;
      object-position: 50% 50%;
      border-radius: 10px;
      display: block;
      overflow: hidden;
    }

    .time {
      font-size: 12px;
      color: #fff;
      text-align: center;
      margin-top: 0.2rem;
      position: absolute;
      bottom: 10px;
      right: 10px;
      background-color: #00000090;
      border-radius: 8px;
      padding: 0 4px;
    }
  }

  .left {
    width: 80%;

    .desc {
      display: flex;
      font-size: 12px;
      align-items: center;

      .source {
        color: #B4B4B4;
        text-align: left;
        margin-right: 10px;
      }

      .date {
        color: #B4B4B4;
        text-align: left;
        margin-right: 10px;
      }

      .tag {
        color: #E70B21;
        text-align: left;
        border: 1px solid #E70B21;
        border-radius: 2px;
        padding: 0 2px;
      }
    }
  }

}
</style>
