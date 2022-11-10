<script>
export default {

};
</script>

<template>
  <div class="bigImgNews">
    <img src="/src/assets/fenmianAir2.png" alt="">
    <div>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</div>
    <span class="video" />
  </div>
</template>

<style lang="scss">
.bigImgNews{
    padding: .4rem 0 0 0;
    border-radius: .3rem;
    overflow: hidden;
    position: relative;
    img{
        width: 100%;
        height: 12rem;
        object-fit: cover;
        border-top-left-radius: .3rem;
        border-top-right-radius: .3rem;
    }
    div{
        width: 100%;
        padding: .5rem;
        color: #fff;
        background: linear-gradient(342deg, #A1003A 10%, #E50C49 100%);
        /*文字超出省略号*/
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .video{
        position: absolute;
        bottom: 3rem;
        right: 1rem;
        width: 3rem;
        height: 3rem;
        border-radius: 100%;
        background: url("/src/assets/vIcon.png") no-repeat center center;
        background-size: contain;
        opacity: .9;
    }
}
</style>
