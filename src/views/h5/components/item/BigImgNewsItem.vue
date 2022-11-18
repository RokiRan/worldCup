<script lang="ts" setup>
import type { PropType } from "vue";
import type { NewsItem } from "~/types/News";
import { newsImgFmt } from "~/utils/image";
import { openPage } from "~/utils/menu";
const props = defineProps({
  news: {
    type: Object as PropType<NewsItem>,
    default: () => { },
  },
});
const imgs = computed(() => {
  return newsImgFmt(props.news);
});
</script>

<template>
  <div class="bigImgNews" @click="openPage($props.news)">
    <div class="big">
      <img v-loadFail :src="imgs" alt="">
      <span v-if="$props.news?.isVideo" class="video" />
    </div>
    <div class="titile ">
      <div class="line-clamp-3">
        {{ $props.news?.title }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.bigImgNews {
  padding: .4rem 0 0 0;
  border-radius: .3rem;
  overflow: hidden;
  margin-bottom: .7rem;
  .big {
    width: 100%;
    position: relative;
    height: 12rem;

    img {
      width: 100%;
      height: 12rem;
      object-fit: cover;
      border-top-left-radius: .3rem;
      border-top-right-radius: .3rem;
    }

    .video {
      position: absolute;
      bottom: .5rem;
      right: 8px;
      width: 3rem;
      height: 3rem;
      border-radius: 100%;
      background: url("/src/assets/vIcon.png") no-repeat center center;
      background-size: contain;
      opacity: .9;
    }
  }

  .titile {
    width: 100%;
    padding: .5rem;
    color: #fff;
    background: linear-gradient(342deg, #A1003A 10%, #E50C49 100%);
  }

}
</style>
