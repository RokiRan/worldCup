<script lang="ts" setup>
import type { NewsItem } from "~/types/News";
import { newsImgFmt } from "~/utils/image";
defineProps<{
  news: NewsItem;
}>();
</script>

<template>
  <div class="postItem">
    <div class="image">
      <img v-loadFail :src="newsImgFmt($props.news)" alt="" srcset="">
      <i v-if="$props.news?.isVideo" class="v-icon" />
    </div>
    <div class="title">
      <div class="text line-clamp-2">
        {{ $props.news.title }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.postItem {
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  .image {
    position: relative;
    img {
      width: 288px;
      height: 137px;
      object-fit: cover;
    }

    .v-icon {
      position: absolute;
      width: 48px;
      height: 48px;
      background: url(/src/assets/vIcon.png) no-repeat;
      right: 12px;
      bottom: 12px;
    }
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

    .text {
      height: 42px;
    }
  }
}
</style>
