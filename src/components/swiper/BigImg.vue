<script lang="ts" setup>
import { type PropType } from "vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import "./style.css";

// import required modules
import { EffectCoverflow, FreeMode, Navigation, Thumbs } from "swiper";
import type { NewsItem } from "~/types/News";

const props = defineProps({
  sliderItems: {
    type: Array as PropType<NewsItem[]>,
    default: () => [],
  },
});

const thumbsSwiper = ref(null);
function setThumbsSwiper(swiper: any) {
  thumbsSwiper.value = swiper;
}
const effect = {
  rotate: 10, // 滑动时旋转角度
  stretch: 206, // 聚合宽度
  depth: 200, // 景深
  modifier: 1, // 覆盖叠加层数
  slideShadows: false, // 是否阴影
};
const modules = [FreeMode, Navigation, Thumbs, EffectCoverflow];
</script>

<template>
  <div class="container">
    <Swiper
      :style="{
        '--swiper-navigation-color': 'red',
        '--swiper-pagination-color': 'red',
      }"
      :coverflow-effect="effect"
      effect="coverflow"
      :grab-cursor="true"
      :loop="true"
      :space-between="10"
      :navigation="true"
      :thumbs="{ swiper: thumbsSwiper }"
      :modules="modules"
      class="mySwiper2"
    >
      <SwiperSlide v-for="img in props.sliderItems" :key="img.id">
        <div class="myImg">
          <img
            v-loadFail
            :src="img.imageUrl[0]"
          >
        </div>
      </SwiperSlide>
    </Swiper>
    <Swiper
      ref="thumbsSwiper"
      :space-between="10"
      :slides-per-view="4"
      :free-mode="false"
      :watch-slides-progress="true"
      :modules="modules"
      class="mySwiper"
      @swiper="setThumbsSwiper"
    >
      <SwiperSlide v-for="img in props.sliderItems" :key="img.id">
        <img
          v-loadFail
          :src="img.imageUrl[0]"
        >
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style lang="scss" scoped>
.container {
    width: $min-width;
    margin: 0 auto;
    height: 600px;
}

.swiper-slide .myImg > img{
    width: 90%;
    margin: 0 auto;
    object-fit: cover;
}
.swiper-slide img {
    display: block;
    width: 100%;
    object-fit: cover;
}

body {
    background: #000;
    color: #000;
}

.swiper {
    width: 100%;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
}

.swiper-slide {
    background-size: cover;
    background-position: center;
}

.mySwiper2 {
    height: 80%;
    width: 100%;
    .swiper-wrapper{
      .swiper-slide-prev{
        overflow: hidden;
      }
      .swiper-slide-next{
        overflow: hidden;
      }
    }
}

.mySwiper {
    height: 20%;
    box-sizing: border-box;
    padding: 10px 0;
}

.mySwiper .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
    opacity: 1;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
