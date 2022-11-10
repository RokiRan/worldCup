<script>
export default {

};
</script>

<template>
  <div class="bigImg">
    <img src="/src/assets/fenmianAir2.png" alt="" srcset="">
    <div>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</div>
  </div>
</template>

<style lang="scss">
.bigImg{
    position: relative;
    padding: .4rem 0 0 0;
    img{
        width: 100%;
        height: 15rem;
        object-fit: cover;
    }
    div{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: .3rem;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
        /*文字超出省略号*/
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}
</style>
