<script lang="ts" setup>
import type { PropType } from "vue";
import type { NewsItem } from "~/types/News";
defineProps({
  news: {
    type: Object as PropType<NewsItem>,
    default: () => {},
  },
});
</script>

<template>
  <div class="smallImgNews">
    <div class="title">
      <div class="line-clamp-2">
        {{ $props.news?.title }}
      </div>
    </div>
    <div class="img">
      <img v-loadFail :src="$props.news?.imageUrl[0]" alt="">
      <span class="video" />
    </div>
  </div>
</template>

<style lang="scss">
.smallImgNews{
    padding: .4rem;
    border-radius: .4rem;
    margin-bottom: .3rem;
    display: flex;
    background: linear-gradient(180deg, #B70A3F 0%, #880525 100%);
    .title{
        width: 100%;
        padding: .5rem;
        color: #fff;

        div{
          overflow-y: hidden;
        }
    }
    .img{
        width: 15rem;
        position: relative;
        padding: .3rem;
        img{
            width: 100%;
            height: 5rem;
            object-fit: cover;
            border-radius: .4rem;
        }
        .video{
            position: absolute;
            bottom: .7rem;
            right: .7rem;
            width: 2rem;
            height: 2rem;
            border-radius: 100%;
            background: url("/src/assets/vIcon.png") no-repeat center center;
            background-size: contain;
            opacity: .9;
        }
    }
}
</style>
