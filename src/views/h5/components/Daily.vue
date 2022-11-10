<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import BlockVue from "./Block.vue";
// Import Swiper styles
import "swiper/css";

import DailyItemVue from "./item/DailyItem.vue";
</script>

<template>
  <div>
    <BlockVue title="世界杯日报">
      <Swiper slides-per-view="auto" :space-between="10" class="mySwiper">
        <SwiperSlide v-for="item in 10" :key="item">
          <DailyItemVue />
        </SwiperSlide>
      </Swiper>
    </BlockVue>
  </div>
</template>

<style lang="scss" scoped>
:deep(.mySwiper) {
    width: 100%;
    height: 100%;

    .swiper-wrapper {
        text-align: center;
        font-size: 18px;

        .swiper-slide {
            width: 60%;
        }
    }
}
</style>
