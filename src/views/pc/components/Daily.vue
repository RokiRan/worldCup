<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper";
import DailyItem from "~/components/swiper/DailyItem.vue";
import EmptyVue from "~/components/layout/Empty/index.vue";
import SubTitileVue from "~/components/layout/Title/SubTitile.vue";
import type { NewsItem } from "~/types/News";
import { openPage } from "~/utils/menu";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
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
            <EmptyVue v-if="imageArr.length === 0" />
            <template v-else>
              <div class="groupingBtPrev" />
              <Swiper
                ref="ReditSwiper" class="dailySwiper" :slides-per-view="1" :space-between="2"
                :navigation="{
                  prevEl: '.groupingBtPrev',
                  nextEl: '.groupingBtNext',
                }"
                :modules="[Pagination, Navigation]" :pagination="{
                  dynamicBullets: true,
                }"
              >
                <SwiperSlide v-for="item, inde in imageArr" :key="inde" class="grab">
                  <div class="flex">
                    <DailyItem v-for="item_, ind in item" :key="`${ind}daily`" :news="item_" @click="openPage(item_)" />
                  </div>
                </SwiperSlide>
              </Swiper>
              <div class="groupingBtNext" />
            </template>
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

.container4 {}

.groupingPosetion3 {
  position: relative;
  width: 100%;
  margin: 20px auto 0 auto;

  .grouping {
    width: 1300px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    padding-left: 50px;
    padding-right: 50px;
    .groupingInfo {
      position: relative;

      .groupingBtPrev {
        position: absolute;
        top: 40%;
        left: -44px;
        width: 40px;
        height: 40px;
        margin-top: -20px;
        background: url(/src/assets/arr-left-big.png) no-repeat;
        background-size: 100% 100%;
        cursor: pointer;
        z-index: 999999;
      }

      .groupingBtNext {
        position: absolute;
        top: 40%;
        right: -44px;
        width: 40px;
        height: 40px;
        margin-top: -20px;
        background: url(/src/assets/leftSmallBt2.png) no-repeat;
        background-size: 100% 100%;
        cursor: pointer;
        z-index: 10;
        // translate: rotate(180deg);
        transform: rotate(180deg);
      }
    }
  }
}

:deep(.dailySwiper) {
  padding-bottom: 30px;

  .swiper-pagination {
    bottom: -20 !important;

    .swiper-pagination-bullet {
      width: 10px;
      border-radius: 5px;
      height: 10px;
      background: red;
      opacity: 0.5;

      &.swiper-pagination-bullet-active {
        background: #fff;
        width: 40px;
        height: 10px;
      }
    }
  }
}
</style>
