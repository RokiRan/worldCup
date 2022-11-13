<script lang="ts" setup>
import type { NewsItem } from "~/types/News";
defineProps<{
  news: NewsItem;
}>();
</script>

<template>
  <div class="postItem">
    <div class="image">
      <img v-loadFail :src="$props.news.imageUrl[0]" alt="" srcset="">
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
    .text{
      height: 42px;
    }
  }
}
</style>
