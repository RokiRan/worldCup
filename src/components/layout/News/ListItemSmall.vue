<script lang="ts" setup>
import type { PropType } from "vue";
import dayjs from "dayjs";
import type { NewsItem } from "~/types/News";
import { newsImgFmt } from "~/utils/image";
const props = defineProps({
  news: {
    type: Object as PropType<NewsItem>,
    default: () => {},
  },
});
const imgs = computed(() => {
  return newsImgFmt(props.news);
});
</script>

<template>
  <div class="smallNews">
    <div class="left">
      <div class="title line-clamp-2">
        {{ $props.news?.title }}
      </div>
      <div class="desc">
        <div v-if="$props.news?.sourceName" class="source">
          {{ $props.news?.sourceName }}
        </div>
        <div v-if="$props.news?.lastDoTime" class="date">
          {{ dayjs(($props.news?.lastDoTime || 1) * 1000).format("YYYY-MM-DD HH:mm:ss") }}
        </div>
        <div v-if="$props.news?.label" class="tag">
          {{ $props.news?.label }}
        </div>
      </div>
    </div>
    <div class="right">
      <img v-loadFail :src="imgs" alt="" srcset="">
      <div v-if="$props.news?.isVideo !== 0" class="time">
        {{ $props.news?.videoTime }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.smallNews {
    display: flex;
    padding: 20px 0;
    background-color: #8F0F36;
    border-bottom: 1px solid #F4A1A1;
    .left {
        width: 80%;
        .title {
            font-size: 18px;
            color: #fff;
            text-align: left;
            margin-bottom: 0.2rem;
        }
        .desc {
            display: flex;
            font-size: 12px;
            align-items: center;
            .source {
                color: #B4B4B4;
                text-align: left;
                margin-right: 10px;
            }
            .date {
                color: #B4B4B4;
                text-align: left;
                margin-right: 10px;
            }
            .tag {
                color: #E70B21;
                text-align: left;
                border: 1px solid #E70B21;
                border-radius: 2px;
                padding:0 2px;
            }
        }
    }
    .right {
        width: 20%;
        position: relative;
        img {
            width: 100%;
            object-fit: cover;
            object-position: 50% 50%;
            border-radius: 10px;
            display: block;
            overflow: hidden;
        }
        .time {
            font-size: 12px;
            color: #fff;
            text-align: center;
            margin-top: 0.2rem;
            position: absolute;
            bottom: 10px;
            right: 10px;
            background-color: #00000090;
            border-radius: 8px;
            padding: 0 4px;
        }
    }
}
</style>
