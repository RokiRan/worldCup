<script>
export default {

};
</script>

<template>
  <div class="postItem">
    <div class="image">
      <img src="/src/assets/nature-3.jpg" alt="" srcset="">
    </div>
    <div class="title">
      格子波霸姆巴佩破门 法国4-2克罗地亚再夺世界杯
    </div>
  </div>
</template>

<style lang="scss">
.postItem {
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  .image img {
    width: 288px;
    height: 137px;
    object-fit: cover;
  }
  .title {
    font-size: 14px;
    color: rgb(243, 235, 235);
    font-weight: 500;
    line-height: 1.5;
    width: 288px;
    text-align: left;
    padding: 8px;
    background: linear-gradient(180deg, #B70A3F 0%, #871034 100%);
  }
}
</style>
