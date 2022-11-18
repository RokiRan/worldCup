<script lang="ts" setup>
import type { NewsItem } from "~/types/News";
import { newsImgFmt } from "~/utils/image";
import { openPage } from "~/utils/menu";
import EmptyVue from "~/components/layout/Empty/index.vue";
defineProps<{
  image: NewsItem | null;
}>();
const open = (item: NewsItem | null) => {
  if (!item) {
    return;
  }
  openPage(item);
};
</script>

<template>
  <div class="cursor-pointer contentATLeft" @click="open($props.image)">
    <template v-if="$props.image">
      <div class="BigImgAT">
        <img v-loadFail :src="newsImgFmt($props.image)">
        <i v-if="$props.image?.isVideo" class="v-icon" />
      </div>
      <div class="BigImgTitle line-clamp-3">
        <a class="">{{ $props.image?.title }}</a>
      </div>
    </template>
    <EmptyVue v-else class="h-full m-auto" />
  </div>
</template>

<style lang="scss" scoped>
.contentATLeft {
  width: 698px;
  height: 480px;
  .BigImgAT {
    width: 698px;
    height: 398px;
    position: relative;

    .v-icon {
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
    width: 100%;
    max-height: 116px;
    background: #3E0A12;
  }

  .BigImgTitle a {
    color: #fff;
    font-size: 18px;
    line-height: 32px;
    padding: 14px;
    display: block;
    text-decoration: none;
    cursor: default;
  }
}
</style>
