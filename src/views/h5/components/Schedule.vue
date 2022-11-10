<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import BlockVue from "./Block.vue";
// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";

import ScheduleItemVue from "./item/ScheduleItem.vue";
import ScheduleBigImgItemVue from "./item/ScheduleBigImgItem.vue";
</script>

<template>
  <div>
    <BlockVue title="赛程">
      <Swiper slides-per-view="auto" :space-between="10" class="mySwiper">
        <SwiperSlide v-for="item in 10" :key="item">
          <ScheduleItemVue />
        </SwiperSlide>
      </Swiper>
      <Swiper slides-per-view="auto" :loop="true" :space-between="10" class="mySwiper2" :navigation="true" :modules="[Navigation]">
        <SwiperSlide v-for="item in 10" :key="item">
          <ScheduleBigImgItemVue />
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
:deep(.mySwiper2) {
    width: 100%;
    height: 100%;

    .swiper-wrapper {
        text-align: center;
        font-size: 18px;

        .swiper-slide {

        }
    }
    // .swiper-button-disabled{
    //     opacity: .35;
    //     pointer-events: none;
    //     z-index: 9999999;
    // }
    .swiper-button-prev::before {
        content: "";
        display: inline-block;
        width: 1.5rem;
        height: 2.5rem;
        background: url("/src/assets/arr.png") no-repeat;
        background-size: 100% 100%;
        transform: translateY(50%);
        position: absolute;
        left: 0;
        bottom: 50%;
        z-index: 999999;
    }
    .swiper-button-next::after{
        content: "";
        display: inline-block;
        width: 1.5rem;
        height: 2.5rem;
        background: url("/src/assets/arr.png") no-repeat;
        transform-origin:center 50%;
        transform: rotate(180deg) translateY(-50%);
        background-size: 100% 100%;
        position: absolute;
        right: 0;
        bottom: 50%;
        z-index: 999999;
    }
}
</style>
