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
      <div class="line-clamp-2">
        {{ $props.post.name }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.postItem2 {
  // width: 288px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  // padding: 5px;
  border: 4px solid #00000000;
  .image img {
    width: 288px;
    height: 512px;
    object-fit: cover;
     /*上方圆角*/
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .title {
    font-size: 14px;
    color: rgb(243, 235, 235);
    font-weight: 500;
    // line-height: 1.5;
    width: 288px;
    text-align: left;
    height: 62px;
    padding: 8px;
    background: linear-gradient(180deg, #B70A3F 0%, #871034 100%);
  }
}
.postItem2:first-child{
  border-left: 0px solid #00000000;
}
.postItem2:last-child{
  border-right: 0px solid #00000000;
}
</style>
