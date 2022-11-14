<script lang="ts" setup>
import type { NewsItem } from "~/types/News";
import { newsImgFmt } from "~/utils/image";
import { openPage } from "~/utils/menu";

defineProps<{
  image: NewsItem | null | undefined;
}>();
</script>

<template>
  <div v-if="Object.hasOwn($props.image || {}, 'title')" class="contentATLeft bigImg" @click="openPage($props.image)">
    <div class="BigImgAT">
      <img v-loadFail :src="newsImgFmt($props.image)">
      <i v-if="$props.image?.isVideo" class="v-icon" />
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
  position: relative;
  .v-icon{
    position: absolute;
    width: 48px;
    height: 48px;
    background: url(/src/assets/vIcon.png) no-repeat;
    right: 12px;
    bottom: 12px;
  }
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
