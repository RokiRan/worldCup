<script lang="ts" setup>
import { newsImgFmt } from "~/utils/image";
import type { NewsItem } from "~/types/News";
import { openPage } from "~/utils/menu";
defineProps<{
  news: NewsItem;
}>();
</script>

<template>
  <div class="bigImg" @click="openPage($props.news)">
    <img v-loadFail :src="newsImgFmt($props.news)" alt="" srcset="">
    <div>{{ $props.news.title }}</div>
  </div>
</template>

<style lang="scss">
.bigImg{
    position: relative;
    padding: .4rem 0 0 0;
    img{
        width: 100%;
        height: 15rem;
        object-fit: cover;
    }
    div{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: .3rem;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
        /*文字超出省略号*/
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #FFF;
        text-align: left;
    }
}
</style>
