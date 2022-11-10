<script>
export default {

};
</script>

<template>
  <div class="postItems">
    <img src="/src/assets/fenmianAir2.png" alt="">
    <div>
      <div class="line-clamp-1">
        哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.postItems{
    padding: .4rem 0 0 0;
    border-radius: .3rem;
    overflow: hidden;
    position: relative;
    img{
        width: 100%;
        height: 18rem;
        object-fit: cover;
        border-top-left-radius: .3rem;
        border-top-right-radius: .3rem;
    }
    div{
        width: 100%;
        padding: .4rem;
        color: #fff;
        font-size: .85rem;
        background: linear-gradient(342deg, #A1003A 10%, #E50C49 100%);
        /*文字超出省略号*/
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}
</style>
