<script lang="ts" setup>
import type { PostItem } from "~/types/News";

defineProps<{
  post: PostItem;
}>();
</script>

<template>
  <div class="postItem2">
    <div class="image">
      <img v-loadFail :src="$props.post.cover" alt="" srcset="">
    </div>
    <div class="title">
      {{ $props.post.name }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.postItem2 {
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  .image img {
    width: 288px;
    height: 574px;
    object-fit: cover;
     /*上方圆角*/
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
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
  }
}
</style>
