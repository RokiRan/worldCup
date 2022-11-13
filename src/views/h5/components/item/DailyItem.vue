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
    <img v-loadFail :src="img" alt="">
    <div class="content">
      <div class="line-clamp-2">
        {{ $props.news.title }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.dailyItems{
    padding: .4rem 0 0 0;
    border-radius: .3rem;
    overflow: hidden;
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    img{
        width: 100%;
        height: 8rem;
        object-fit: cover;
        border-top-left-radius: .3rem;
        border-top-right-radius: .3rem;
    }
    .content{
        width: 100%;
        padding: .4rem;
        flex: 1;
        color: #fff;
        font-size: .85rem;
        background: linear-gradient(342deg, #A1003A 10%, #E50C49 100%);
        overflow-y: hidden;
        div{
          text-align: left;
        }
    }
}
</style>
