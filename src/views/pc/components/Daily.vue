<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import DailyItem from "~/components/swiper/DailyItem.vue";

import SubTitileVue from "~/components/layout/Title/SubTitile.vue";
import type { NewsItem } from "~/types/News";
const props = defineProps<{
  news: NewsItem[];
}>();
const emit = defineEmits<{
  (event: "showNewsList", index: number): void;
}>();
const imageArr = computed(() => {
  // reduce 一位数组转二维数组
  return props.news.reduce((acc: NewsItem[], cur: NewsItem, index: number) => {
    const page = Math.floor(index / 4);
    if (!acc[page]) {
      acc[page] = [];
    }
    acc[page].push(cur);
    return acc;
  }, []);
});
const change = (index: number) => {
  emit("showNewsList", index);
};
</script>

<template>
  <div class="container4">
    <div class="columnBox">
      <SubTitileVue title="世界杯日报" :show="true" @more="change" />
      <div class="groupingPosetion3">
        <div class="grouping">
          <div class="groupingInfo">
            <Swiper
              ref="ReditSwiper"
              :slides-per-view="1"
              :space-between="2"
              :navigation="false"
              next-el=".groupingBtNext"
              prev-el=".groupingBtPrev"
            >
              <SwiperSlide v-for="item, inde in imageArr" :key="inde">
                <div class="flex">
                  <DailyItem v-for="item_, ind in item" :key="`${ind}daily`" :news="item_" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}

.container4{
  width: 100vw;
}
.groupingPosetion3 {
  position: relative;
  width: 100%;
  margin: 20px auto;
}

.grouping {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}
</style>
