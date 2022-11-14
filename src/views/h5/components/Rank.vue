<script>
export default {

};
</script>

<template>
  <div class="rankDing">
    <img v-loadFail src="/src/assets/rank.png" alt="" srcset="" class="w-100vw">
  </div>
</template>

<style lang="scss">
.rankDing{
    position: fixed;
    right: .1rem;
    top: 40%;
    z-index: 9999;
    img{
        width: 100%;
        height: 8rem;
        object-fit: contain;
        /*透明图片阴影*/
        filter: drop-shadow(0 0 0.3rem #000);
    }
}
</style>
