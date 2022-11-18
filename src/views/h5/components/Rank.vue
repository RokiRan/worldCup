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
    right: 1px;
    top: 45%;
    z-index: 9999;
    img{
        width: 2.75rem;
        height: 100%;
        object-fit: contain;
        /*透明图片阴影*/
        filter: drop-shadow(0 0 0.1rem #00000050);
    }
}
</style>
