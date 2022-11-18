<script lang="ts" setup>
import type { NewsItem } from "~/types/News";
import { newsImgFmt } from "~/utils/image";
const props = defineProps<{
  news: NewsItem;
}>();
const img = computed(() => {
  return newsImgFmt(props.news);
});
</script>

<template>
  <div class="dailyItems">
    <div class="img">
      <img v-loadFail :src="img" alt="">
      <i v-if="$props.news?.isVideo" class="v-icon" />
    </div>
    <div class="content">
      <div class="line-clamp-2">
        {{ $props.news.title }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.dailyItems {
  padding: .4rem 0 0 0;
  border-radius: .3rem;
  overflow: hidden;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;

  .img {
    height: 8rem;
    width: 100%;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-top-left-radius: .3rem;
      border-top-right-radius: .3rem;
    }
    .v-icon {
      position: absolute;
      width: 2rem;
      height: 2rem;
      background: url(/src/assets/vIcon.png) no-repeat;
      background-size: cover;
      right: .2rem;
      bottom: .2rem;
    }
  }

  .content {
    width: 100%;
    padding: .4rem;
    flex: 1;
    color: #fff;
    font-size: .85rem;
    background: linear-gradient(342deg, #A1003A 10%, #E50C49 100%);
    overflow-y: hidden;

    div {
      text-align: left;
    }
  }
}
</style>
