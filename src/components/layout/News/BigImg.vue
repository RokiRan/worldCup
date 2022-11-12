<script lang="ts" setup>
import type { NewsItem } from "~/types/News";
defineProps<{
  image: NewsItem;
}>();
</script>

<template>
  <div v-if="Object.hasOwn($props.image, 'title')" class="contentATLeft bigImg">
    <div class="BigImgAT">
      <img :src="$props.image?.imageUrl[0]">
    </div>
    <div class="BigImgTitle">
      <a :href="$props.image?.targetUrl">{{ $props.image?.title }}</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contentBoxAT {
  display: flex;
  width: 1200px;
  margin: 20px auto 0;
}

.BigImgAT {
  width: 654px;
  height: 366px;
}

.BigImgAT img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  border-radius: 10px 10px 0px 0px;
  display: block;
  overflow: hidden;
}

.BigImgTitle {
  width: 654px;
  height: 120px;
  background: #3E0A12;
}

.BigImgTitle a {
  color: #fff;
  font-size: 20px;
  line-height: 32px;
  padding: 20px;
  display: block;
  text-decoration: none;
}

.BigImgTitle a:hover {
  color: #fff;
  font-size: 20px;
  line-height: 32px;
  padding: 20px;
  display: block;
  text-decoration: underline;
}
</style>
